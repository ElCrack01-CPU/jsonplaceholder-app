import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { fetchUserPosts } from '../services/GetPostApi';
import { fetchUserComments } from '../services/GetCommentsApi';
import { PostSection } from './PostSection';
import './components.css';

export const UserDetails = ({ user }) => {
  const [postId, setPostId] = useState(1); // Empezamos con el primer post
  const [comments, setComments] = useState([]);
  

  const postsHook = useFetch(fetchUserPosts, user.id, postId);

  useEffect(() => {
    if (postsHook.data.length > 0) {
      const fetchCommentsForPost = async () => {
        try {
          const commentsData = await fetchUserComments(postId); // Traemos los comentarios del postId actual
          setComments(commentsData.slice(0, 5)); // Limitar a los primeros 5 comentarios
        } catch (error) {
          console.error('Error fetching comments:', error);
        } finally {
          
        }
      };

      fetchCommentsForPost();
    }
  }, [postsHook.data, postId]); // Dependemos de postId para actualizar los comentarios

  const nextPost = () => {
    setPostId((prevPostId) => Math.min(prevPostId + 1, postsHook.data.length)); // Siguiente post
  };

  const prevPost = () => {
    setPostId((prevPostId) => Math.max(prevPostId - 1, 1)); // Página anterior, pero no menos de 1
  };

  if (postsHook.loading) {
    return <div className="text-center mt-4"><div className="spinner-border text-warning" role="status"></div></div>;
  }

  if (postsHook.error) {
    console.error("Error fetching posts:", postsHook.error);
    return <div className="alert alert-danger text-center">Error fetching data.</div>;
  }

  if (!postsHook.data || postsHook.data.length === 0) {
    return <div className="alert alert-warning text-center">No posts found.</div>;
  }

  const post = postsHook.data[postId - 1]; // Tomamos el post basado en postId actual (ajustado para índice cero)

  return (
    <div className="container my-5">
      <h2 className="text-center primary-text mb-4">User Details</h2>
      <div className="card shadow-lg">
        <div className="card-header primary-bg text-white">
          <h5>{user.name}</h5>
        </div>
        <div className="card-body">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Empresa:</strong> {user.company.name}</p>
        </div>
      </div>

      <PostSection post={post} comments={comments} />

      <div className="d-flex justify-content-between">
        <button className="btn btn-outline-primary" onClick={prevPost} disabled={postId === 1}>
          Previous
        </button>
        <button className="btn btn-outline-primary" onClick={nextPost} disabled={postId >= postsHook.data.length}>
          Next
        </button>
      </div>
    </div>
  );
};
