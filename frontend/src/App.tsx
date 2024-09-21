import Header from "./components/Header.tsx";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Users from "./components/Users.tsx";
import Modal from "./components/Modal.tsx";
import { FaUser } from "react-icons/fa";
import UserForm from "./components/Forms/UserForm.tsx";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        users: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <Modal title={"Add User"} icon={<FaUser className="me-2" />}>
            <UserForm />
          </Modal>
          <Users />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
