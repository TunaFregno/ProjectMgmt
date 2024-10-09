import { FaList, FaUser } from "react-icons/fa";
import Modal from "../components/Modal";
import UserForm from "../components/Forms/UserForm";
import Projects from "../components/Projects";
import Users from "../components/Users";
import ProjectForm from "../components/Forms/ProjectForm";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <Modal
          title={"Add User"}
          icon={<FaUser className="me-2" />}
          target="userModal"
          buttonType="btn-secondary"
          padding="py-2"
        >
          <UserForm />
        </Modal>
        <Modal
          title={"Add New Project"}
          icon={<FaList className="me-2" />}
          target="projectModal"
          buttonType="btn-primary"
          padding="py-2"
        >
          <ProjectForm />
        </Modal>
      </div>

      <Projects />
      <hr />
      <Users />
    </>
  );
}
