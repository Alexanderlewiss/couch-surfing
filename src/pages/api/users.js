import { users } from '../../data/userdata';

export default function handler(req, res) {
  res.status(200).json(users.map(({ id, name }) => ({ id, name })));
}
