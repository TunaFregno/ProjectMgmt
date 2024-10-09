import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../mutations/userMutations";
import { UsersQueryResult } from "../UsersRow";
import { GET_USERS } from "../../queries/userQueries";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [addUser] = useMutation(ADD_USER, {
    variables: formData,
    //refetchQueries: [{ query: GET_USERS }],
    update(cache, { data: { addUser } }) {
      const { users } =
        cache.readQuery<UsersQueryResult>({ query: GET_USERS }) || {};

      cache.writeQuery({
        query: GET_USERS,
        data: { users: [...(users || []), addUser] },
      });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData.name, formData.email, formData.phone);

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === ""
    ) {
      return alert("Please fill in all fields");
    }

    addUser({
      variables: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      },
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="submit"
            data-bs-dismiss="modal"
            className="btn btn-primary"
          >
            Save changeees
          </button>
        </div>
      </form>
    </>
  );
}
