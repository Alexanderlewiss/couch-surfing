import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
        .then(res => res.json())
        .then(data => setUsers(data));
  }, []);

  return (
      <div>
        <h1>User List</h1>
        <ul>
          {users.map(user => (
              <li key={user.id}>
                <Link href={`/user/${user.id}`}>{user.name}</Link>
              </li>
          ))}
        </ul>
      </div>
  );
}