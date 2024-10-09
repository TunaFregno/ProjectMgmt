import { useState } from "react";
import { ADD_PROJECT } from "../../mutations/projectMutations";
import { GET_USERS } from "../../queries/userQueries";
import { useMutation, useQuery } from "@apollo/client";
import { UserType } from "../Users";
import { GET_PROJECTS } from "../../queries/pojectQueries";

export type ProjectQueryResult = {
  projects: {
    id: string;
    name: string;
    description: string;
    status: string;
  }[];
};

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "new",
    userId: "",
  });

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: formData,
    //refetchQueries: [{ query: GET_PROJECTS }],
    update(cache, { data: { addProject } }) {
      const { projects } =
        cache.readQuery<ProjectQueryResult>({ query: GET_PROJECTS }) || {};

      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...(projects || []), addProject] },
      });
    },
  });

  //Get User for the select
  const { loading, error, data } = useQuery(GET_USERS);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData.name, formData.description, formData.status);

    if (
      formData.name === "" ||
      formData.description === "" ||
      formData.status === ""
    ) {
      return alert("Please fill in all fields");
    }

    addProject({
      variables: {
        name: formData.name,
        description: formData.description,
        status: formData.status,
        userId: formData.userId,
      },
    });

    setFormData({
      name: "",
      description: "",
      status: "new",
      userId: "",
    });
  };

  if (loading) return null;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
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
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              id="status"
              className="form-select"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="new">Not Started</option>
              <option value="progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">User</label>
            <select
              id="userId"
              className="form-select"
              value={formData.userId}
              onChange={handleChange}
            >
              <option value="">Select User</option>
              {data.users.map((user: UserType) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
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
      )}
    </>
  );
}
