import { UserType } from "./Users";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../mutations/userMutations";
import { GET_USERS } from "../queries/userQueries";
import { GET_PROJECTS } from "../queries/pojectQueries";
import ButtonComponent from "./ButtonComponent";

export type UsersQueryResult = {
  users: {
    id: string;
    name: string;
    email: string;
    phone: string;
  }[];
};

export default function UsersRow({ id, name, email, phone }: UserType) {
  const [deleteUser] = useMutation(DELETE_USER, {
    variables: { id: id },
    refetchQueries: [{ query: GET_USERS }, { query: GET_PROJECTS }],
    /* update(cache, { data: { deleteUser } }) {
      const { users } =
        cache.readQuery<UsersQueryResult>({ query: GET_USERS }) || {};
      cache.writeQuery({
        query: GET_USERS,
        data: {
          users: (users || []).filter(
            (user: UserType) => user.id !== deleteUser.id
          ),
        },
      });
    }, */
  });

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <ButtonComponent onClick={() => deleteUser()} buttonType="btn-dark">
          <FaTrash />
        </ButtonComponent>
      </td>
    </tr>
  );
}
