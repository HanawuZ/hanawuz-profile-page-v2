import * as badge from "@/constants/badge";
import { BadgeProps } from "@/components/Badge";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { HiLightBulb } from "react-icons/hi";
import { MdOutlineMonitor } from "react-icons/md";
import { FaServer } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

type SkillList = {
  icon: JSX.Element;
  title: string;
  description: string;
  tech: BadgeProps[];
};

type Skill = {
  title: string;
  skillList: SkillList[];
}

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
  badge.MONGODB,
  badge.REDIS,
  badge.MYSQL,
  badge.EXPRESSJS,
  badge.POSTGRESQL,
  badge.SEQUELIZE,
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
      description:
        "I'm currently spending little free time to learn Java spring boot by learning its official site. Things I've learned including Basic REST API implemention, Authentication with JWT, Open authentication (OAuth) and Caching with Redis. Furthermore, I trying Docker to containize database without installing it on my machine.",
      tech: currentlyLearning,
    },
    {
      icon: <LiaLaptopCodeSolid size={24} />,
      title: "Programming Languages",
      description:
        "During time in university, Python is a first programming language I've learned, and then followed by C, Java, Go, JavaScript and TypeScript, respectively. At this time TypeScript is now my favorite.",
      tech: programmingLanguages,
    },
    {
      icon: <MdOutlineMonitor size={24} />,
      title: "Front-end Development",
      description:
        "When entered 3rd year of university, System Analysis & Design and Software Engineering (SE) introduced me the React TypeScript as front-end library and Material UI as CSS framework. After completing SE course, I decided to develop web project with senior using Next.js and Bootstrap.",
      tech: frontendDevelopment,
    },
    {
      icon: <FaServer size={24} />,
      title: "Back-end Development",
      description:
        "SA and SE also led me into a realm of back-end development. Go with Gin becomes a first back-end framework I've touched. Subsequently, I'learned Express.js and MongoDB in Advanced web application course.",
      tech: backEndDevelopment,
    },
    {
      icon: <FaTools size={24} />,
      title: "Tools",
      description:
        "Version control is one of most interesting things I've learned in software development journey. SA and SE taught me how to use Git to maintain a source code of project with a team such as managing branches, resolving code conflicts, tracking changes from previous commits and so on.",
      tech: tools,
    },
    {
      icon: <FaBookOpen size={24} />,
      title: "Others",
      description:
        "Since internship, I'm also experienced in utilizing Apache Superset as senior developer assigned me tasks about Data analytics.",
      tech: others,
    },
  ],
  th: [
    {
      icon: <HiLightBulb size={24} />,
      title: "กำลังเรียนรู้อยู่",
      description:
        "ตอนนี้ในเวลาว่างนิด ๆ หน่อย ๆ ก็ใช้ไปกับการเรียนรู้ Java Spring Boot จากเว็บทางการของมัน สิ่งที่ได้เรียนมามีทั้งการทำ REST API เบื้องต้น, การยืนยันตัวตนด้วย JWT, Open Authentication (OAuth), แล้วก็การทำ Caching ด้วย Redis นอกจากนี้ยังลองใช้ Docker เพื่อคอนเทนเนอร์ฐานข้อมูลแทนการติดตั้งลงเครื่องโดยตรงด้วย",
      tech: currentlyLearning,
    },
    {
      icon: <LiaLaptopCodeSolid size={24} />,
      title: "ภาษาโปรแกรม",
      description:
        "สมัยเรียนมหาวิทยาลัย ภาษาโปรแกรมแรกที่ได้เรียนคือ Python ตามมาด้วย C, Java, Go, JavaScript และ TypeScript แบบเรียงลำดับ ตอนนี้ TypeScript กลายเป็นภาษาที่ชอบที่สุดแล้ว!",
      tech: programmingLanguages,
    },
    {
      icon: <MdOutlineMonitor size={24} />,
      title: "หน้าบ้าน",
      description:
        "พอเข้าปี 3 ที่มหาวิทยาลัย วิชา System Analysis & Design และ Software Engineering (SE) ทำให้ได้รู้จัก React TypeScript เป็นไลบรารีสำหรับฝั่ง Front-end และ Material UI เป็นเฟรมเวิร์ก CSS หลังจากเรียนจบวิชา SE ก็เลยตัดสินใจพัฒนาโปรเจกต์เว็บกับรุ่นพี่ โดยใช้ Next.js และ Bootstrap เป็นเครื่องมือ!",
      tech: frontendDevelopment,
    },
    {
      icon: <FaServer size={24} />,
      title: "หลังบ้าน",
      description:
        "วิชา System Analysis (SA) และ Software Engineering (SE) ก็ทำให้ได้เข้าไปในโลกของการพัฒนา Back-end ด้วยเหมือนกัน โดยได้ลองใช้ Go กับ Gin เป็นเฟรมเวิร์ก Back-end ตัวแรกที่ได้สัมผัส ต่อจากนั้นก็เรียนรู้ Express.js และ MongoDB ในวิชา Advanced Web Application!",
      tech: backEndDevelopment,
    },
    {
      icon: <FaTools size={24} />,
      title: "เครื่องมือ",
      description:
        "การควบคุมเวอร์ชันเป็นหนึ่งในสิ่งที่น่าสนใจที่สุดที่ได้เรียนรู้ในเส้นทางการพัฒนาซอฟต์แวร์เลยล่ะ วิชา SA และ SE สอนให้รู้จักการใช้ Git เพื่อดูแลซอร์สโค้ดของโปรเจกต์กับทีม เช่น การจัดการสาขา, แก้ไขปัญหาความขัดแย้งในโค้ด, และติดตามการเปลี่ยนแปลงจากคอมมิตก่อนหน้า เป็นต้น!",
      tech: tools,
    },
    {
      icon: <FaBookOpen size={24} />,
      title: "อื่น ๆ",
      description:
        "ตั้งแต่ช่วงฝึกงานก็ได้ประสบการณ์ในการใช้ Apache Superset ด้วย เพราะรุ่นพี่ให้ทำงานเกี่ยวกับการวิเคราะห์ข้อมูลนั่นเอง!",
      tech: others,
    },
  ],
};

export default skillList;
