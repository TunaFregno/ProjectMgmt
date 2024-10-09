import { ProjectType } from "./Projects";

export default function ProjectCard({ id, name, status }: ProjectType) {
  return (
    <div className="col-md-6 mb-3 mt-2">
      <div className=" card h-100">
        <div className=" card-body">
          <div className=" d-flex justify-content-between align-items-center">
            <h5 className="card-title">{name}</h5>
            <a className="btn btn-light" href={`projects/${id}`}>
              View
            </a>
          </div>
          <p className="small">Status: {status}</p>
        </div>
      </div>
    </div>
  );
}
