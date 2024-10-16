import { useProfileContext } from "@/context/ProfileContext";
import styles from "@/pages/projects/styles.module.css";
import PROJECTS from "@/constants/locales/project";
import wordLocales from "@/constants/locales/word";
import Image from "next/image";
import themes from "@/theme";

const ProjectCard = ({ projectKey }: { projectKey: string }) => {
  const { language, setProjectKey, mode } = useProfileContext();
  const project = PROJECTS[projectKey]?.[language] ?? {
    projectCardImageUrl: "",
    name: "",
    projectTimeRange: "",
    overview: [],
  };

  const { projectCardImageUrl, name, projectTimeRange, overview } = project;
  return (
    <div className="border border-gray-500 shadow-lg max-w-md overflow-hidden md:max-w-3xl min-h-[200px]">
      <div className="md:grid md:grid-cols-3">
        
        {/* Tablet show */}
        <Image
          className="h-full w-full object-cover max-md:h-48 md:w-56"
          src={projectCardImageUrl || ""}
          alt={name}
          height={512}
          width={512}
        />
        <div className="col-span-2 h-full min-h-[200px]">
          <div className="mx-6 mt-3">
            <div
              className="block mt-1 text-lg leading-tight font-bold"
              style={{
                color: themes[mode].primaryText,
              }}
            >
              {name}
            </div>
            <text
              className="text-sm"
              style={{
                color: themes[mode].secondaryText,
              }}
            >
              {projectTimeRange}
            </text>
            <p
              className="text-sm my-2 min-h-[100px]"
              style={{
                color: themes[mode].secondaryText,
              }}
            >
              {overview}
            </p>
            <div
              className="p-3 w-full md:flex md:justify-end"
              style={{
                color: themes[mode].primaryText,
              }}
            >
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
    </div>
  );
};

/* 
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
*/
export { ProjectCard };
