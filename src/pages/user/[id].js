import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function UserProfile() {
    const router = useRouter();
    const { id } = router.query;
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`/api/users/${id}`)
                .then(res => res.json())
                .then(data => setUser(data));
        }
    }, [id]);

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.bio}</p>
            {user.friends.length > 0 && (
                <div>
                    <h2>Friends:</h2>
                    <ul>
                        {user.friends.map(friend => (
                            <li key={friend.id}>
                                <Link href={`/user/${friend.id}`}>{friend.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <Link href="/">Back to user list</Link>
        </div>
    );
}