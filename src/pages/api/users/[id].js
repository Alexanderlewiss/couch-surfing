import { users } from '../../../data/userdata';

export default function handler(req, res) {
    const { id } = req.query;
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const friends = user.friends.map(friendId => {
        const friend = users.find(u => u.id === friendId);
        return friend ? { id: friend.id, name: friend.name } : null;
    }).filter(Boolean);

    res.status(200).json({ ...user, friends });
}