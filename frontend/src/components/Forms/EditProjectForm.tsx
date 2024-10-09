import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GET_PROJECT } from "../../queries/pojectQueries";
import { useMutation } from "@apollo/client";
import { ProjectType } from "../Projects";
import { UPDATE_PROJECT } from "../../mutations/projectMutations";

export default function EditProjectForm({
  id,
  name,
  description,
  status,
}: ProjectType) {
  const [formData, setFormData] = useState({
    name: name,
    description: description,
    status: "",
  });
  const navigate = useNavigate();
  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id, name, description, status },
    onCompleted: () => navigate(`/projects/${id}`),
    refetchQueries: [{ query: GET_PROJECT, variables: { id } }],
  });

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

    if (
      formData.name === "" ||
      formData.description === "" ||
      formData.status === ""
    ) {
      return alert("Please fill in all fields");
    }

    updateProject({
      variables: {
        name: formData.name,
        description: formData.description,
        status: formData.status,
      },
    });
  };

  return (
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
          Save changes
        </button>
      </div>
    </form>
  );
}
