import { ProjectCard } from "./ProjectCard";
const ProjectBody = () => {
  return (
    <div className="grid gap-4 p-4 mt-4 justify-center">
      <ProjectCard projectKey="prompt-lab" />
      <ProjectCard projectKey="se-project" />
    </div>
  );
};

export { ProjectBody };
