import { useProfileContext } from "@/context/ProfileContext";
import styles from "@/pages/projects/styles.module.css";
import PROJECTS from "@/constants/locales/project";
import wordLocales from "@/constants/locales/word";
import Image from "next/image";
const ProjectCard = ({ projectKey }: { projectKey: string } ) => {
  const { setProjectKey, language } = useProfileContext();
  const project = PROJECTS[projectKey];
  const { projectCardImageUrl, name, projectTimeRange, overview } = project[language] ?? {
    imageUrl: "",
    name: "",
    projectTimeRange: "",
    description: [],
  };
  return (
    <div className="border max-w-md mx-auto rounded-xl shadow-lg overflow-hidden md:max-w-3xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <Image
            className="max-md:h-48 w-full object-cover md:w-56"
            src={projectCardImageUrl || ""}
            alt={name}
            height={512}
            width={512}
          />
        </div>
        <div className="py-3 px-8">
          <div className="block mt-1 text-lg leading-tight font-bold">
            {name}
          </div>
          {/* Secondary color */}
          <div className="text-sm"> {projectTimeRange} </div>
          <p className="text-sm my-2 min-h-[150px]">{overview}</p>
          <div className="p-3 w-full md:flex md:justify-end">
            <button
              onClick={() => setProjectKey(projectKey)}
              className={`${styles.linkButton} max-md:w-full`}
              style={{
                border: "solid 1px",
              }}
            >
              {wordLocales[language].viewDetail}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };