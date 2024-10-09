import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/pojectQueries";
import ProjectCard from "./ProjectCard";

export type ProjectType = {
  id?: string;
  name: string;
  description?: string;
  status: string;
};

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row">
          {data.projects.map(({ id, name, status }: ProjectType) => (
            <ProjectCard key={name} id={id} name={name} status={status} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
}
