import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../services/GetUsersApi'; // Asegúrate de tener esta función importada
import { UserList } from '../components/UserList';
import { UserDetails } from '../components/UserDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';


export const Home = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);


  useEffect(() => {
    fetchUsers(1, 10)
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error)); // Manejo de errores
  }, []);

  const selectedUser = selectedUserId ? users.find(user => user.id === selectedUserId) : null;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {!selectedUserId ?
            (
              <UserList users={users} onSelectUser={(userId) => setSelectedUserId(userId)} />
            )
            : (
              <>
                <UserDetails  user={selectedUser} />
                <div className="d-flex justify-content-center mt-4">
                <button onClick={() => setSelectedUserId(null)} className='btn btn-primary btn-shadow btn-rounded'>Back</button>
                </div>
              </>

            )}
        </div>
      </div>
    </div>
  );
}
