import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserCard from './UserCard'

const UserData = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:',error);
                setLoading(false);
            }

        };
        fetchData();
    }, [])
    if (loading) return <p>Loading...</p>;

  return (
    <div>
        {users.map(user => (
           <UserCard key={user.id} user={user} />
        ))}
    </div>
  );
}

export default UserData