import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
      email
      phone
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $phone: String) {
    addUser(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      name
      email
      phone
    }
  }
`;
