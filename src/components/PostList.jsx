import useFetch from '../hooks/useFetch';
import { fetchPosts } from '../services/api';

const PostList = () => {
  const { data: posts, loading, error, currentPage, setCurrentPage } = useFetch(fetchPosts);

  if (loading) return <p className="text-primary">Loading posts...</p>;
  if (error) return <p className="text-danger">Error loading posts</p>;

  return (
    <div className="container">
      <h2 className="text-center my-4">Posts</h2>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center my-3">
        <button className="btn btn-primary mx-2" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>Prev</button>
        <button className="btn btn-primary mx-2" onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default PostList;