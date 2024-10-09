import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/pojectQueries";
import UserInfo from "../components/UserInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import { FaPencilAlt } from "react-icons/fa";
import Modal from "../components/Modal";
import EditProjectForm from "../components/Forms/EditProjectForm";
export default function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5 mt-5">
          <Link
            to="/"
            className="btn btn-light btn-sm d-inline ms-auto py-2 px-5 mb-5"
          >
            Back
          </Link>
          <h2>{data.project.name}</h2>
          <p className="lead">{data.project.description}</p>
          <h5 className="mt-3"> Project Status:</h5>
          <p className="lead">{data.project.status}</p>
          <UserInfo
            name={data.project.user.name}
            email={data.project.user.email}
            phone={data.project.user.phone}
          />
          <div className="d-flex mt-5 ms-auto gap-3">
            <Modal
              title={"Edit Project"}
              icon={<FaPencilAlt className="me-2" />}
              target="editProjectModal"
              buttonType="btn-outline-secondary"
              padding="py-2"
            >
              <EditProjectForm
                id={data.project.id}
                name={data.project.name}
                description={data.project.description}
                status={data.project.status}
              />
            </Modal>

            <DeleteProjectButton projectId={data.project.id} />
          </div>
        </div>
      )}
    </>
  );
}
