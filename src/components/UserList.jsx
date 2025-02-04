import useFetch from '../hooks/useFetch';
import { fetchUsers } from '../services/api';

const UserList = () => {
  const { data: users, loading, error, currentPage, setCurrentPage } = useFetch(fetchUsers);

  if (loading) return <p className="text-primary">Loading users...</p>;
  if (error) return <p className="text-danger">Error loading users</p>;

  return (
    <div className="container">
      <h2 className="text-center my-4">Users</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            <strong>{user.name}</strong> - {user.email}
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

export default UserList;
