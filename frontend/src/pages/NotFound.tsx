import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
      <FaExclamationTriangle size="5em" className="text-danger mb-3 mt-5" />
      <h2>404 Not Found </h2>
      <p className="lead">Sorry, this page does not exist.</p>
      <Link to="/" className="btn btn-dark mt-4">
        Go Back
      </Link>
    </div>
  );
}
