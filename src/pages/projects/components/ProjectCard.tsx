import { useProfileContext } from "@/context/ProfileContext";
import styles from "@/pages/projects/styles.module.css";
import { SkillBadgeProps } from "@/components/SkillBadge/type";
import { IoLogoGithub } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { SkillBadge } from "@/components/SkillBadge";
interface ProjectCardProbs {
  index: number;
  projectName: string;
  imgUrl?: string;
  projectTimeRange?: string;
  description: string;
  projectLink: string;
  skills?: SkillBadgeProps[];
}

const ProjectCard = (props: ProjectCardProbs) => {
  const {
    index,
    imgUrl,
    projectName,
    projectTimeRange,
    description,
    projectLink,
    skills,
  } = props;
  const { setProjectModalIndex } = useProfileContext();
  return (
    <div className="border border-slate-800 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-56"
            src={imgUrl}
            alt="Modern building architecture"
          />
        </div>
        <div className="py-3 px-8">
          <div className="block mt-1 text-lg leading-tight font-medium text-black">
            {projectName}
          </div>
          <div className="text-sm text-slate-500"> {projectTimeRange} </div>
          <p className="text-sm my-2 text-slate-500">{description}</p>
          <div className="p-3 w-full md:flex md:justify-end">
            <button
              onClick={() => setProjectModalIndex(index)}
              className={`${styles.linkButton} max-md:w-full`}
              style={{
                border: "solid 1px",
              }}
            >
              View Details
            </button>
          </div>
          {/* <div>
            {skills && (
              <div className="flex flex-wrap gap-2 pt-5">
                {skills.map((skill, index) => (
                  <SkillBadge key={`skill-${index}`} {...skill} />
                ))}
              </div>
            )}
          </div> */}
          {/* <div className="mt-4 flex justify-end gap-3">
            <IoLogoGithub size={24} />
            <CiGlobe size={24} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };

/* 
            <div
      className="m-2 border border-slate-800 flex max-md:mx-5 justify-center"
      style={{
        background: "rgb(208, 208, 208, 0.2)",
      }}
    >
      <div className="p-4 flex flex-col">
        <div className="w-full   flex justify-center">
          <img
            className="justify-self-center max-md:w-[50vw] w-[15vw]"
            src={imgUrl}
            alt="Project Image"
          />
        </div>
        <div className="text-center pt-3">
          <text className="text-lg font-bold p"> {projectName} </text>
          <div className="text-sm text-slate-500"> {projectTimeRange} </div>
          <p className="mt-4 h-48 overflow-y-auto">{description}</p>
        </div>
        <div className="p-3 w-full">
          <button
            onClick={() => setProjectModalIndex(index)}
            // className={styles.linkButton}
            style={{
              border: "solid 1px",
            }}
          >
            View Details
          </button>
        </div>
      </div> 
      </div>
      */
