import { useProfileContext } from "@/context/ProfileContext";
import styles from "@/pages/projects/styles.module.css";
import PROJECTS from "@/constants/locales/project";
import wordLocales from "@/constants/locales/word";
import themes from "@/theme";
import { FaCalendarAlt } from "react-icons/fa";

const ProjectCard = ({ projectKey = "default" }: { projectKey?: string }): JSX.Element => {
  const { language, setProjectKey, mode } = useProfileContext();
  const project = PROJECTS[projectKey]?.[language] 

  const { projectCardImageUrl , name, projectTimeRange, overview } = project;
  
  const noProjectInfo = projectKey === "default" ? true : false
  return (
    <div 
      className="border border-gray-500 shadow-lg max-w-md overflow-hidden lg:max-w-4xl lg:min-h-[200px] max-lg:h-[500px]"
      style={{
        opacity: noProjectInfo ? 0.4 : 1,
        pointerEvents: noProjectInfo ? "none" : "auto",
      }}
    >
      <div className="lg:grid lg:grid-cols-3">
        <div className="flex justify-center items-center">
          <img
            className="h-full w-full object-cover max-lg:h-48 max-h-[250px]"
            src={projectCardImageUrl}
            alt={name}
          />
        </div>
        <div className="col-span-2">
          <div className="lg:mx-4 max-lg:mx-6 my-4">
            <div
              className="text-2xl md:text-xl leading-tight font-bold tracking-wide"
              style={{
                color: themes[mode].primaryText,
              }}
            >
              {name}
            </div>
            <div
              className="md:text-sm mt-2 leading-relaxed tracking-wide flex gap-2 items-center"
              style={{
                color: themes[mode].secondaryText,
              }}
            >
              <FaCalendarAlt size={16}/>
              <div> {projectTimeRange} </div>
            </div>
            <p
              className="text-sm min-h-[100px] pt-3 leading-relaxed tracking-wide hyphens-auto break-normal"
              style={{
                color: themes[mode].secondaryText,
                height: noProjectInfo ? "132px" : "auto",
              }}
            >
              {overview}
            </p>
            <div
              className="p-3 w-full md:flex md:justify-end pt-5"
              style={{
                color: themes[mode].primaryText,
              }}
            >
              {!noProjectInfo && 
                <button
                  onClick={() => setProjectKey(projectKey ?? "default")}
                  className={`${styles.linkButton} max-lg:w-full leading-relaxed tracking-wide`}
                  style={{
                    border: "solid 1px",
                  }}
                >
                  {wordLocales[language].viewDetail}
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
