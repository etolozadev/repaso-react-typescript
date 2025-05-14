import { UserRow } from "./UserRow";
import { useUsers } from "../hooks/useUsers";

export const UsersPage = () => {
  const { data, currentPage, setcurrentPage } = useUsers();
  
  return (
    <div>
      <h3>Usuarios</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <UserRow key={user.id} {...user} />
          ))}
        </tbody>
      </table>

      <div>
        <button
          onClick={() => currentPage > 1 && setcurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anteriores
        </button>
        <button
          onClick={() => data.length > 0 && setcurrentPage(currentPage + 1)}
          disabled={data.length === 0}
        >
          Siguientes
        </button>
      </div>
    </div>
  );
};
