import useFetch from '../hooks/useFetch';
import { fetchComments } from '../services/api';

const CommentList = () => {
  const { data: comments, loading, error, currentPage, setCurrentPage } = useFetch(fetchComments);

  if (loading) return <p className="text-primary">Loading comments...</p>;
  if (error) return <p className="text-danger">Error loading comments</p>;

  return (
    <div className="container">
      <h2 className="text-center my-4">Comments</h2>
      <ul className="list-group">
        {comments.map((comment) => (
          <li key={comment.id} className="list-group-item">
            {comment.body}
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-center my-3">
        <button className="btn btn-primary mx-2" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>Prev</button>
        <button className="btn btn-primary mx-2" onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default CommentList;
