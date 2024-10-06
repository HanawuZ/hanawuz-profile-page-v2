import { SkillBadge } from "@/components/SkillBadge";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { HiLightBulb } from "react-icons/hi";
import { MdOutlineMonitor } from "react-icons/md";
import { FaServer } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
/* 
<span><img src="https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white" alt="Arduino logo" title="Arduino" height="25" /></span>
<span><img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" alt="C logo" title="C" height="25" /></span>
<span><img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="Cpp logo" title="C++" height="25" /></span>
<span><img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" alt="Sass logo" title="SASS" height="25" /></span>

*/

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
      <SkillBadge
        src="https://img.shields.io/static/v1?label=&message=spring+boot&color=%236DB33F&style=for-the-badge&logo=springboot&logoColor=white"
        alt="Spring boot logo"
      />
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
      <SkillBadge
        src="https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white"
        alt="Go logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
        alt="Java logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
        alt="JavaScript logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
        alt="TypeScript logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
        alt="Python logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
        alt="C"
      />
      <SkillBadge
        src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
        alt="Cpp"
      />
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
      <SkillBadge
        src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
        alt="React logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
        alt="Next logo"
      />
      {/* <SkillBadge
        src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
        alt="HTML logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
        alt="CSS logo"
      /> */}
      <SkillBadge
        src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
        alt="Tailwind logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white"
        alt="Angular logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white"
        alt="Material UI logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D"
        alt="Vue logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
        alt="Bootstrap logo"
      />
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
      <SkillBadge
        src="https://img.shields.io/static/v1?label=&message=Gin&color=%23008ECF&style=for-the-badge&logo=gin&logoColor=white"
        alt="Gin logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
        alt="Express.js logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"
        alt="MySQL logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
        alt="PostgreSQL logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
        alt="MongoDB logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white"
        alt="Redis logo"
      />
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
      <SkillBadge
        src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
        alt="Git logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white"
        alt="GitLab logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
        alt="Docker logo"
      />
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
      <SkillBadge
        src="https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white"
        alt="LaTeX logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white"
        alt="Markdown logo"
      />

      <SkillBadge
        src="https://img.shields.io/badge/Mermaid-FF3670?style=for-the-badge&logo=mermaid&logoColor=white"
        alt="Mermaid logo"
      />

      <SkillBadge
        src="https://img.shields.io/static/v1?label=&message=Superset&color=%2320A6C9&style=for-the-badge&logo=apachesuperset&logoColor=white"
        alt="Superset logo"
      />

      <SkillBadge
        src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white"
        alt="Pandas logo"
      />
      <SkillBadge
        src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
        alt="Figma logo"
      />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SkillsBody };
