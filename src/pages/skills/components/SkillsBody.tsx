import { SkillBadge } from "@/components/SkillBadge";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { HiLightBulb } from "react-icons/hi";
import { MdOutlineMonitor } from "react-icons/md";
import { FaServer } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import Badge from "@/components/Badge";
import {
  SPRING_BOOT,
  GO,
  JAVA,
  TYPESCRIPT,
  JAVASCRIPT,
  PYTHON,
  REACT,
  NEXT,
  MUI,
  TAILWIND,
  BOOTSTRAP,
  GIT,
  GITLAB,
  DOCKER,
  EXPRESSJS,
  POSTGRESQL,
  MONGODB,
  REDIS,
  GIN,
  MYSQL,
  LATEX,
  MARKDOWN,
  FIGMA,
  PANDAS,
  SUPERSET,
  ANGULAR,
  VUE,
  CSS,
  OVERLEAF,
  SEQUELIZE,
  CPP
} from "@/constants/skills";

const CurrentlyLearning = () => (
  <div className="max-md:mx-4 mt-6">
    <div className="font-bold w-full flex gap-2">
      <span>
        {" "}
        <HiLightBulb size={24} />{" "}
      </span>
      <text> Currently Learning </text>
    </div>
    <div className="flex gap-2 mt-2">
      <Badge {...SPRING_BOOT} />
    </div>
  </div>
);

const ProgrammingLanguages = () => (
  <div className="max-md:mx-4 mt-2">
    <div className="font-bold w-full flex gap-2">
      <span>
        <LiaLaptopCodeSolid size={24} />
      </span>
      Programming Languages
    </div>
    <div className="flex flex-wrap gap-2 mt-2">
      <Badge {...GO} />
      <Badge {...JAVA} />
      <Badge {...TYPESCRIPT} />
      <Badge {...JAVASCRIPT} />
      <Badge {...PYTHON} />
      <Badge {...CPP} />
    </div>
  </div>
);

const FrontendDevelopment = () => (
  <div className="max-md:mx-4 mt-2">
    <div className="font-bold w-full flex gap-2">
      <span>
        <MdOutlineMonitor size={24} />
      </span>
      Front-end Development
    </div>
    <div className="flex flex-wrap gap-2 mt-2">
      <Badge {...REACT} />
      <Badge {...NEXT} />
      <Badge {...CSS} />
      <Badge {...MUI} />
      <Badge {...TAILWIND} />
      <Badge {...BOOTSTRAP} />
      <Badge {...ANGULAR} />
      <Badge {...VUE} />
    </div>
  </div>
);

const BackendDevelopment = () => (
  <div className="max-md:mx-4 mt-2">
    <div className="font-bold w-full flex gap-2">
      <span>
        <FaServer size={24} />
      </span>
      Back-end Development
    </div>
    <div className="flex flex-wrap gap-2 mt-2">
      <Badge {...GIN} />
      <Badge {...MYSQL} />
      <Badge {...POSTGRESQL} />
      <Badge {...EXPRESSJS} />
      <Badge {...MONGODB} />
      <Badge {...REDIS} />
      <Badge {...SEQUELIZE} />
    </div>
  </div>
);

const Tools = () => (
  <div className="max-md:mx-4 mt-2">
    <div className="font-bold w-full flex gap-2">
      <span>
        <FaTools size={24} />
      </span>
      Tools
    </div>
    <div className="flex flex-wrap gap-2 mt-2">
      <Badge {...GIT} />
      <Badge {...GITLAB} />
      <Badge {...DOCKER} />
      <Badge {...OVERLEAF} />
    </div>
  </div>
);

const Others = () => (
  <div className="max-md:mx-4 mt-2">
    <div className="font-bold w-full flex gap-2">
      <span>
        <FaBookOpen size={24} />
      </span>
      Others
    </div>
    <div className="flex flex-wrap gap-2 mt-2">
      <Badge {...LATEX} />
      <Badge {...MARKDOWN} />
      <Badge {...FIGMA} />
      <Badge {...PANDAS} />
      <Badge {...SUPERSET} />
    </div>
  </div>
);

const SkillsBody = () => {
  return (
    <div className="h-90vh md:overflow-y-auto sm:px-8 max-sm:mt-6">
      <div
        className="grid md:grid-cols-5 lg:grid-cols-4 max-md:pb-20 pb-10"
        style={{
          zIndex: 100,
        }}
      >
        <div />
        <div className="w-full justify-self-center md:col-span-4 lg:col-span-3 min-h-[90vh]">
          <div className="md:self-center	w-full ">
            <div className="sm:mt-10 max-md:ms-3 flex justify-center">
              <text className="text-2xl font-bold max-md:mt-5 mt-10 max-md:ms-3">
                SKILLS &#38; PROFICIENCES
              </text>
            </div>
            <div className="grid gap-5 max-md:mx-4">
              <CurrentlyLearning />
              <ProgrammingLanguages />
              <FrontendDevelopment />
              <BackendDevelopment />
              <Tools />
              <Others /> 
              {/* 
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SkillsBody };
