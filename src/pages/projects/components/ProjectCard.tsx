import { useProfileContext } from "@/context/ProfileContext";
import styles from "@/pages/projects/styles.module.css";
import PROJECTS from "@/constants/locales/project";

const ProjectCard = ({ projectKey }: { projectKey: string } ) => {
  const { setProjectKey, language } = useProfileContext();
  const project = PROJECTS[projectKey];
  const { projectCardImageUrl, name, projectTimeRange, description, overview } = project[language] ?? {
    imageUrl: "",
    name: "",
    projectTimeRange: "",
    description: [],
  };
  return (
    <div className="border border-slate-800 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="max-md:h-48 w-full object-cover md:h-full md:w-56"
            src={projectCardImageUrl}
          />
        </div>
        <div className="py-3 px-8">
          <div className="block mt-1 text-lg leading-tight font-medium text-black">
            {name}
          </div>
          <div className="text-sm text-slate-500"> {projectTimeRange} </div>
          <p className="text-sm my-2 text-slate-500 min-h-[100px]">{overview}</p>
          <div className="p-3 w-full md:flex md:justify-end">
            <button
              onClick={() => setProjectKey(projectKey)}
              className={`${styles.linkButton} max-md:w-full`}
              style={{
                border: "solid 1px",
              }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };