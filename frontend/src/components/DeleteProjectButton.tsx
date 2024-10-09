import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GET_PROJECTS } from "../queries/pojectQueries";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectMutations";
import ButtonComponent from "./ButtonComponent";

type DeleteProjectButtonType = {
  projectId: string;
};

export default function DeleteProjectButton({
  projectId,
}: DeleteProjectButtonType) {
  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  return (
    <div className="d-flex mt-5 ms-auto">
      <ButtonComponent
        buttonType="btn-danger"
        type="button"
        padding="py-2"
        onClick={() => deleteProject()}
      >
        <FaTrash className="me-2 mb-1" />
        Delete Project
      </ButtonComponent>
    </div>
  );
}
