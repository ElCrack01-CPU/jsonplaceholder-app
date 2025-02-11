import react from "react";

export const PostSection = react.memo(({ post, comments }) => {
    return (
      <div>
        <h3 className="mt-5 info-text">Post:</h3>
        <div className="card mb-4">
          <div className="card-body">
            <h4 className="card-title">{post.title}</h4>
            <p className="card-text">{post.body}</p>
  
            <h4 className="success-text">Comments:</h4>
            <ul className="list-group mb-4">
              {comments.map((comment, index) => (
                <li key={index} className="list-group-item">
                  {comment.body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  });