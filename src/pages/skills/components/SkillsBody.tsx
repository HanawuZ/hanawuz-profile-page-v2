import Badge from "@/components/Badge";
import { SPRING_BOOT } from "@/constants/badge";
import skillList from "@/constants/locales/skills";
import { useProfileContext } from "@/context/ProfileContext";
import { HiLightBulb } from "react-icons/hi";
import themes from "@/theme";

const SkillsBody = () => {
  const { language, mode } = useProfileContext();
  return (
    <div className="grid gap-6 m-4">
      {skillList[language]?.map((skill, index) => (
        <div 
          key={index} 
          className="max-md:mx-4 mt-6"
        >
          <div 
            className="font-bold w-full flex gap-2"
            style={{
              color: themes[mode].primaryText,
            }}
          >
            <span>{skill.icon}</span>
            <text> {skill.title} </text>
          </div>
          <div className="flex  flex-wrap gap-2 mt-2">
            {skill.tech?.map((tech, index) => (
              <Badge key={index} {...tech} />
            ))}
          </div>
          <div className="mt-4 max-w-[100vw]">
            <p 
              className="break-normal hyphens-auto"
              style={{
                color: themes[mode].secondaryText,
              }}
            >
              {skill.description}
            </p>
          </div>
        </div>
      ))}
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
    <div className="flex flex-wrap gap-2 mt-2">
      <Badge {...SPRING_BOOT} />
      <Badge {...SPRING_BOOT} />
      <Badge {...SPRING_BOOT} />
      <Badge {...SPRING_BOOT} />
      <Badge {...SPRING_BOOT} />
      <Badge {...SPRING_BOOT} />
      <Badge {...SPRING_BOOT} />
    </div>
    <div className="mt-4">
      <p className="break-normal hyphens-auto" lang="en">
        I&apos;m currently spending little free time to learn Java spring boot
        by learning its official site. Things I&apos;ve learned including Basic
        REST API implemention, Authentication with JWT, Open authentication
        &#40;OAuth&#41; and Caching with Redis. Furthermore, I trying Docker to
        containize database without installing it on my machine.
      </p>
    </div>
  </div>
);

// const ProgrammingLanguages = () => (
//   <div className="max-md:mx-4 mt-2">
//     <div className="font-bold w-full flex gap-2">
//       <span>
//         <LiaLaptopCodeSolid size={24} />
//       </span>
//       Programming Languages
//     </div>
//     <div className="flex flex-wrap gap-2 mt-2">
//       <Badge {...GO} />
//       <Badge {...JAVA} />
//       <Badge {...TYPESCRIPT} />
//       <Badge {...JAVASCRIPT} />
//       <Badge {...PYTHON} />
//       <Badge {...CPP} />
//     </div>
//     <div className="mt-4">
//       <p className="break-normal hyphens-auto" lang="en">
//         During time in university, Python is a first programming language
//         I&apos;ve learned, and then followed by C, Java, Go, JavaScript and
//         TypeScript, respectively. At this time TypeScript is now my favorite.
//       </p>
//     </div>
//   </div>
// );

// const FrontendDevelopment = () => (
//   <div className="max-md:mx-4 mt-2">
//     <div className="font-bold w-full flex gap-2">
//       <span>
//         <MdOutlineMonitor size={24} />
//       </span>
//       Front-end Development
//     </div>
//     <div className="flex flex-wrap gap-2 mt-2">
//       <Badge {...REACT} />
//       <Badge {...NEXT} />
//       <Badge {...CSS} />
//       <Badge {...MUI} />
//       <Badge {...TAILWIND} />
//       <Badge {...BOOTSTRAP} />
//       <Badge {...ANGULAR} />
//       <Badge {...VUE} />
//     </div>
//     <div className="mt-4">
//       <p className="break-normal hyphens-auto" lang="en">
//         When entered 3<sup>rd</sup> year of university, System Analysis &amp;
//         Design and Software Engineering &#40;SE&#41; introduced me the React
//         TypeScript as front-end library and Material UI as CSS framework. After
//         completing SE course, I decided to develop web project with senior using
//         Next.js and Bootstrap.
//       </p>
//     </div>
//   </div>
// );

// const BackendDevelopment = () => (
//   <div className="max-md:mx-4 mt-2">
//     <div className="font-bold w-full flex gap-2">
//       <span>
//         <FaServer size={24} />
//       </span>
//       Back-end Development
//     </div>
//     <div className="flex flex-wrap gap-2 mt-2">
//       <Badge {...GIN} />
//       <Badge {...MYSQL} />
//       <Badge {...POSTGRESQL} />
//       <Badge {...EXPRESSJS} />
//       <Badge {...MONGODB} />
//       <Badge {...REDIS} />
//       <Badge {...SEQUELIZE} />
//     </div>
//     <div className="mt-4">
//       <p className="break-normal hyphens-auto">
//         SA and SE also led me into a realm of back-end development. Go with Gin
//         becomes a first back-end framework I&apos;ve touched. Subsequently,
//         I&apos;learned Express.js and MongoDB in Advanced web application
//         course.
//       </p>
//     </div>
//   </div>
// );

// const Tools = () => (
//   <div className="max-md:mx-4 mt-2">
//     <div className="font-bold w-full flex gap-2">
//       <span>
//         <FaTools size={24} />
//       </span>
//       Tools
//     </div>
//     <div className="flex flex-wrap gap-2 mt-2">
//       <Badge {...GIT} />
//       <Badge {...GITHUB} />
//       <Badge {...GITLAB} />
//     </div>
//     <div className="mt-4">
//       <p className="break-normal hyphens-auto">
//         Version control is one of most interesting things I&apos;ve learned in
//         software development journey. SA and SE taught me how to use Git to
//         maintain a source code of project with a team such as managing branches,
//         resolving code conflicts, tracking changes from previous commits and so
//         on.
//       </p>
//     </div>
//   </div>
// );

// const Others = () => (
//   <div className="max-md:mx-4 mt-2">
//     <div className="font-bold w-full flex gap-2">
//       <span>
//         <FaBookOpen size={24} />
//       </span>
//       Others
//     </div>
//     <div className="flex flex-wrap gap-2 mt-2">
//       <Badge {...LATEX} />
//       <Badge {...MARKDOWN} />
//       <Badge {...FIGMA} />
//       <Badge {...PANDAS} />
//       <Badge {...SUPERSET} />
//     </div>
//     <div className="mt-4">
//       <p className="break-normal hyphens-auto">
//         Since internship, I&apos;m also experienced in utilizing Apache Superset
//         as senior developer assigned me tasks about Data analytics.
//       </p>
//     </div>
//   </div>
// );

export { SkillsBody };
