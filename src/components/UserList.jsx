import React from 'react';
import { useFetch } from '../hooks/useFetch'
import './components.css';
import { fetchUsers } from '../services/GetUsersApi';

export const UserList = ({ onSelectUser }) => {
  const { data, loading, error, currentPage, setCurrentPage } = useFetch(fetchUsers, 1, 5);

  if (loading) {
    return <div>Cargando usuarios...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const users = data || [];

  console.log(users);

  return (
    <div className='user-list'>
      <h2 className='text-center primary-text mb-4'>Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => onSelectUser(user.id)}>{user.name}</li>
        ))}
        {users.length === 0 && <p className='text-center' >No hay más usuarios disponibles.</p>}
      </ul>
      <div className='d-flex justify-content-between'>
        <button onClick={() => setCurrentPage(currentPage - 1)} className='btn btn-primary btn-shadow btn-rounded' disabled={currentPage <= 1}>Anterior</button>
        
        <button onClick={() => setCurrentPage(currentPage + 1)} className='btn btn-primary btn-shadow btn-rounded' disabled={users.length < 5}>Siguiente</button>
      </div>

    </div>
  );
}

