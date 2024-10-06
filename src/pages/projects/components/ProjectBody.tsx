import { ProjectCard } from "./ProjectCard";
const ProjectBody = () => {
  return (
    <div className="h-90vh md:overflow-y-auto sm:px-8 max-sm:mt-6">
      <div
        className="grid md:grid-cols-5 lg:grid-cols-4 max-md:pb-20 "
        style={{
          zIndex: 100,
        }}
      >
        <div />
        <div className="w-full md:col-span-4 lg:col-span-3 min-h-[100vh] flex">
          <div className="w-full">
          <div className="w-full flex justify-center">
            <text className="text-2xl text-center font-bold max-md:mt-5 mt-10 max-md:ms-3">
              PROJECTS
            </text>
          </div>
            <div className="grid gap-4 p-4 mt-4 justify-center">
                <ProjectCard projectKey="prompt-lab" />
                <ProjectCard projectKey="se-project" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectBody };
