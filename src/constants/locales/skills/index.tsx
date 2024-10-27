import * as badge from "@/constants/badge";
import { BadgeProps } from "@/components/Badge";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { HiLightBulb } from "react-icons/hi";
import { MdOutlineMonitor } from "react-icons/md";
import { FaServer } from "react-icons/fa6";
import { FaBookOpen, FaDatabase, FaTools } from "react-icons/fa";

type SkillList = {
  icon: JSX.Element;
  title: string;
  description: string | JSX.Element;
  tech: BadgeProps[];
};

const currentlyLearning: BadgeProps[] = [badge.SPRING_BOOT, badge.DOCKER];

const programmingLanguages: BadgeProps[] = [
  badge.GO,
  badge.JAVA,
  badge.TYPESCRIPT,
  badge.JAVASCRIPT,
  badge.PYTHON,
  badge.CPP,
];

const frontendDevelopment: BadgeProps[] = [
  badge.REACT,
  badge.NEXT,
  badge.MUI,
  badge.TAILWIND,
  badge.BOOTSTRAP,
  badge.ANGULAR,
  badge.VUE,
];

const backEndDevelopment: BadgeProps[] = [
  badge.GIN,
  badge.FIBER,
  // badge.ECHO,
  badge.EXPRESSJS,
  badge.SEQUELIZE,
];

const databases: BadgeProps[] = [
  badge.MYSQL,
  badge.POSTGRESQL,
  badge.MONGODB,
  badge.REDIS,
];

const tools: BadgeProps[] = [badge.GIT, badge.GITHUB, badge.GITLAB];

const others: BadgeProps[] = [
  badge.LATEX,
  badge.MARKDOWN,
  badge.FIGMA,
  badge.PANDAS,
  badge.SUPERSET,
];

const skillList: Record<string, SkillList[]> = {
  en: [
    {
      icon: <HiLightBulb size={24} />,
      title: "Currently Learning",
      tech: currentlyLearning,
      description: (
        <>
          I am currently spending little free time to learn{" "}
          <strong style={{ color: "#8BC34A" }}>Java Spring Boot</strong> from
          official documents. I grasp knowledges of backend development
          including Basic REST API implemention, Authentication with JWT, Open
          authentication &#40;OAuth&#41; and caching with{" "}
          <strong style={{ color: "#E33E2D" }}>Redis</strong>. Moreover, I am
          learning basic skill of{" "}
          <strong style={{ color: "#0DB7ED" }}>Docker</strong> to containize
          database rather than installing on my own machine.
        </>
      ),
    },
    {
      icon: <LiaLaptopCodeSolid size={24} />,
      title: "Programming Languages",
      tech: programmingLanguages,
      description: (
        <>
          During time in university, I have learned various programming
          languages including Python, and then followed by C++, Java, Go,
          JavaScript and TypeScript, respectively.
        </>
      ),
    },
    {
      icon: <MdOutlineMonitor size={24} />,
      title: "Front-end Development",
      tech: frontendDevelopment,
      description: (
        <>
          When entered 3<sup>rd</sup> year of university, System Analysis &amp;
          Design and Software Engineering &#40;SE&#41; introduced me the{" "}
          <strong>React Typescript</strong> as front-end library and{" "}
          <strong>Material UI</strong> as CSS framework. After completing SE
          course, I decided to develop web project with senior using{" "}
          <strong>Next.js</strong> and <strong>Bootstrap.</strong>
        </>
      ),
    },
    {
      icon: <FaServer size={24} />,
      title: "Back-end Development",
      tech: backEndDevelopment,
      description: (
        <>
          SA and SE also led me into a realm of back-end development.{" "}
          <strong>Go</strong> with Gin becomes a first back-end framework I have
          touched. Subsequently, I learned <strong>Express.js</strong> from
          course Advanced Web Application, <strong>Java Spring Boot</strong> and
          other Go web frameworks such as <strong>Echo</strong>
          and <strong>Fiber</strong>.
        </>
      ),
    },
    {
      icon: <FaDatabase size={24} />,
      title: "Databases",
      description: (
        <>
          The first database I got to try was <strong>MySQL</strong>, and I also explored{" "} 
          <strong>NoSQL</strong> options like MongoDB and Redis.
        </>
      ),
      tech: databases,
    },
    {
      icon: <FaTools size={24} />,
      title: "Tools",
      tech: tools,
      description: (
        <>
          Version control is one of most interesting things I have learned in
          software development journey. SA and SE taught me how to use{" "}
          <strong style={{ color: "#F05033" }}>Git</strong> to maintain a source
          code of project with a team such as managing branches, resolving code
          conflicts and tracking changes from previous commits.
        </>
      ),
    },
    {
      icon: <FaBookOpen size={24} />,
      title: "Others",
      tech: others,
      description: (
        <>
          I have also tried using <strong>LaTeX</strong> to write my CV and{" "}
          <strong>Markdown</strong> for documentation. There was a time at work
          when a senior assigned me to do data analysis, which gave me hands-on
          experience with{" "}
          <strong style={{ color: "#20A7C9" }}>Apache Superset</strong>
        </>
      ),
    },
  ],
  th: [
    {
      icon: <HiLightBulb size={24} />,
      title: "กำลังเรียนรู้อยู่",
      description: (
        <>
          ในเวลาว่างนิด ๆ หน่อย ๆ ผมลองศึกษา{" "}
          <strong style={{ color: "#8BC34A" }}>Java Spring Boot</strong> จาก
          Documents โดยเข้าใจ REST API เบื้องต้น, การยืนยันตัวตนด้วย JWT, Open
          Authentication &#40;OAuth&#41;, แล้วก็การทำ Caching ด้วย{" "}
          <strong style={{ color: "#E33E2D" }}>Redis</strong> นอกจากนี้ผมลองใช้{" "}
          <strong style={{ color: "#0DB7ED" }}>Docker</strong>{" "}
          เพื่อติดตั้งฐานข้อมูลแทนการติดตั้งลงเครื่องโดยตรงด้วย
        </>
      ),
      tech: currentlyLearning,
    },
    {
      icon: <LiaLaptopCodeSolid size={24} />,
      title: "ภาษาโปรแกรม",
      description: (
        <>
          สมัยเรียนมหาวิทยาลัย ผมได้เรียนภาษาโปรแกรมหลายตัวเลย ได้แก่ Python
          ตามด้วย C++, Java, Go, JavaScript และ TypeScript
        </>
      ),
      tech: programmingLanguages,
    },
    {
      icon: <MdOutlineMonitor size={24} />,
      title: "หน้าบ้าน",
      tech: frontendDevelopment,
      description: (
        <>
          เมื่อเข้าชั้นปีที่ 3 ผมได้รู้จักการทำเว็บด้วย <strong>React</strong>{" "}
          <strong>TypeScript</strong> และ <strong>Material UI</strong>{" "}
          เป็นเฟรมเวิร์ก CSS ครั้งแรกในวิชา{" "}
          <strong>System Analysis &amp; Design &#40;SA&#41;</strong> และ{" "}
          <strong>Software Engineering &#40;SE&#41;</strong> หลังจากผ่านทั้ง 2
          วิชาแล้ว ก็เลยตัดสินใจพัฒนาโปรเจกต์เว็บกับรุ่นพี่ โดยใช้{" "}
          <strong>Next.js</strong> และ <strong>Bootstrap</strong>
        </>
      ),
    },
    {
      icon: <FaServer size={24} />,
      title: "หลังบ้าน",
      description: (
        <>
          วิชา SA และ SE ทำให้ผมได้ลองพัฒนา Backend โดยเริ่มจากการสัมผ้สกับภาษา
          Go และ Gin เป็นเฟรมเวิร์ก Back-end ต่อมาก็ได้ลองใช้อย่างอื่นบ้าง
          ไม่ว่าจะเป็น Express.js ในวิชา Advanced Web Application, Java Spring
          boot ตอนเรียนรู้ด้วยตัวเอง และเฟรมเวิร์กอื่น ๆ ของ Go ได้แก่ Echo และ
          Fiber
        </>
      ),
      tech: backEndDevelopment,
    },
    {
      icon: <FaDatabase size={24} />,
      title: "ฐานข้อมูล",
      description: (
        <>
          ฐานข้อมูลตัวแรกที่ได้ลองเลยก็คือ <strong>MySQL</strong> และได้ลอง{" "}
          NoSQL อย่าง <strong>MongoDB</strong> และ <strong>Redis</strong> ด้วย
        </>
      ),
      tech: databases,
    },
    {
      icon: <FaTools size={24} />,
      title: "เครื่องมือ",
      tech: tools,
      description: (
        <>
          การควบคุมเวอร์ชันเป็นหนึ่งในสิ่งที่ผมรู้สึกว่า มันว้าวสุดๆ
          ที่ได้เรียนรู้ในสายซอฟต์แวร์เลย วิชา SA และ SE สอนให้ผมรู้จักการใช้{" "}
          <strong style={{ color: "#F05033" }}>Git</strong>{" "}
          มาดูแลซอร์สโค้ดของโปรเจกต์กับทีม ทำให้รู้จักวิธีจัดการ Branches,
          แก้ปัญหาโค้ดชนกัน แล้วก็ดูว่าโค้ดเราเปลี่ยนมายังไงบ้างจากคอมมิตเก่า ๆ
          ด้วย
        </>
      ),
    },
    {
      icon: <FaBookOpen size={24} />,
      title: "อื่น ๆ",
      tech: others,
      description: (
        <>
          จะบอกให้ว่าไม่ได้เป็นแค่เขียนโค้ดภาษาโปรแกรมนะค้าบ เคยลองใช้{" "}
          <strong>LaTeX</strong> ในการเขียน CV และใช้ <strong>Markdown</strong>{" "}
          ในการเขียน Document ด้วย มีช่วงหนึ่งระหว่างทำงาน
          รุ่นพี่ในที่ทำงานได้มอบหมายให้ผมทำการวิเคราะห์ข้อมูล
          ทำให้ได้มีประสบการณ์ในการใช้{" "}
          <strong style={{ color: "#20A7C9" }}>Apache Superset</strong>
        </>
      ),
    },
  ],
};

export default skillList;
