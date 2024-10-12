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
  SEQUELIZE,
  CPP,
  GITHUB,
} from "@/constants/skills";

const SkillsBody = () => {
  return (
    <div className="grid gap-8 max-md:mx-4">
      <CurrentlyLearning />
      <ProgrammingLanguages />
      <FrontendDevelopment />
      <BackendDevelopment />
      <Tools />
      <Others />
    </div>
  );
};

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
      <Badge {...DOCKER} />
    </div>
    <div className="mt-4">
      <p className="break-normal hyphens-auto" lang="en">
        I&apos;m currently spending some free time to learn Java Spring Boot by
        learning official document. Things I have learned including Basic REST
        API implemention, Authentication with JWT, Open authentication (OAuth)
        and Caching with Redis. Furthermore, I am learning Docker to containize
        database without installing it on my machine.
      </p>
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
    <div className="mt-4">
      <p className="break-normal hyphens-auto" lang="en">
        During my time in university, Python is a first programming language
        I&apos;ve learned, then followed by C, Java, Go, JavaScript and
        TypeScript, respectively.
      </p>
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
    <div className="mt-4">
      <p className="break-normal hyphens-auto" lang="en">
        I also have studied front-end development in System Analysis & Design
        (SA) and Software Engineering (SE) courses. React is my first
        web-development library with Material UI as css framework. After
        completing SE, I decided to develop web project with senior using
        Next.js and Bootstrap.
      </p>
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
    <div className="mt-4">
      <p className="break-normal hyphens-auto">
        Go with Gin become a first backend framework I&apos;ve learned,
        introducing me a realm of back-end development. Subsequently, I have
        touched Express.js with MongoDB in Web application course.
      </p>
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
      <Badge {...GITHUB} />
      <Badge {...GITLAB} />
    </div>
    <div className="mt-4">
      <p className="break-normal hyphens-auto">
        Version control is one of most interesting thing I have learned in
        software development journey. SE course presented me how to use Git to
        maintain a source code of project with a team such as managing branches,
        resolving code conflicts and tracking changes from previous commits.
      </p>
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
    <div className="mt-4">
      <p className="break-normal hyphens-auto">
        Since internship at Toss. Senior developer assigned me tasks about Data
        analytics with Apache Superset and managing data with Pandas library.
      </p>
    </div>
  </div>
);

export { SkillsBody };
