import { useQuery } from "@apollo/client";
import UsersRow from "./UsersRow";
import { GET_USERS } from "../queries/userQueries";

export type UserType = {
  id?: string;
  name: string;
  email: string;
  phone: string;
};

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.users.map(({ id, name, email, phone }: UserType) => (
              <UsersRow
                key={name}
                id={id}
                name={name}
                email={email}
                phone={phone}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
