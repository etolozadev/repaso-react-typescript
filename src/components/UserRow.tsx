import { Users } from '../interfaces';

export const UserRow = (user: Users) => {
  return (
    <tr key={user.id}>
    <td><img src={user.avatar} alt={user.first_name} style={{width: '50px'}}/></td>
    <td>{user.first_name} {user.last_name}</td>
    <td>{user.email}</td>
  </tr>
  )
}