import  ProjectCard  from "./ProjectCard";
const ProjectBody = () => {
  return (
    <div className="grid gap-6 p-4 md:px-8 mt-4 justify-center">
      <ProjectCard projectKey="prompt-lab" />
      <ProjectCard projectKey="se-project" />
      <ProjectCard  />
    </div>
  );
};

export default ProjectBody;
