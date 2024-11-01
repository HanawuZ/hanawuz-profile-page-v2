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
          including learning authentication with JWT, using Open
          authentication &#40;OAuth&#41; for GitHub and Google login and caching with{" "}
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
          During time in university, I learned various programming languages. As
          a freshman, Python was my first programming language, then followed by
          C++, Java, Go, JavaScript and TypeScript in sophomore year. My two
          favourite languages are{" "}
          <strong style={{ color: "#3776AB" }}>Python</strong> and{" "}
          <strong style={{ color: "#007ACC" }}>TypeScript</strong>
        </>
      ),
    },
    {
      icon: <MdOutlineMonitor size={24} />,
      title: "Front-end Development",
      tech: frontendDevelopment,
      description: (
        <>
          When entered 3<sup>rd</sup> year of university,{" "}
          <strong>System Analysis &amp; Design &#40;SA&#41;</strong> and{" "}
          <strong>Software Engineering &#40;SE&#41;</strong> introduced me the{" "}
          <strong style={{ color: "#88dded" }}>React Typescript</strong> as
          front-end library and{" "}
          <strong style={{ color: "#1FA6CA" }}>Material UI</strong> as CSS
          framework. After completing <strong>SE</strong> class, I decided to
          develop web project with senior using <strong>Next.js</strong> and{" "}
          <strong>Bootstrap.</strong>
        </>
      ),
    },
    {
      icon: <FaServer size={24} />,
      title: "Back-end Development",
      tech: backEndDevelopment,
      description: (
        <>
          <strong>SA</strong> and <strong>SE</strong> also led me into a realm
          of back-end development.{" "}
          <strong style={{ color: "#00ADD8" }}>Go with Gin</strong> becomes a
          first back-end framework I have touched. Subsequently, I learned{" "}
          <strong>Express.js</strong> from class Advanced Web Application,{" "}
          <strong style={{ color: "#8BC34A" }}>Java Spring Boot</strong> and
          other Go web frameworks such as <strong>Echo</strong> and{" "}
          <strong>Fiber</strong>.
        </>
      ),
    },
    {
      icon: <FaDatabase size={24} />,
      title: "Databases",
      description: (
        <>
          <strong style={{ color: "#4479A1" }}>MySQL</strong> is a first
          database I have learned. I practiced database management by doing
          small project in Database Design class and project in{" "}
          <strong>SA</strong> and <strong>SE</strong>. After that, I had a
          chance to explore <strong>NoSQL</strong> databases like{" "}
          <strong style={{ color: "#47A248" }}>MongoDB</strong>, and learned
          caching by utilizing{" "}
          <strong style={{ color: "#E33E2D" }}>Redis</strong>. Trying out
          different databases helped me understand their
          strengths and limitations, so now I know which type fits best in
          various scenarios.
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
          software development journey. <strong>SA</strong> and{" "}
          <strong>SE</strong> taught me how to use{" "}
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
          when a senior developer assigned me to perform data analysis, which gave me hands-on
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
          ในเวลาว่างอันน้อยนิด ผมกำลังลงลึกการพัฒนา Backend ด้วยการฝึกเขียน{" "}
          <strong style={{ color: "#8BC34A" }}>Java Spring Boot</strong> จาก
          Docs ต่าง ๆ โดยได้เรียนรู้เกี่ยวกับการยืนยันตัวตนด้วย JWT, ใช้ Open
          Authentication &#40;OAuth&#41; ทำล็อกอินด้วย GitHub และ Google
          และหัดทำ Caching ด้วย{" "}
          <strong style={{ color: "#E33E2D" }}>Redis</strong> สำหรับแคชข้อมูลจาก
          Database นอกจากนี้ผมลองใช้{" "}
          <strong style={{ color: "#0DB7ED" }}>Docker</strong> เพื่อลง Database
          แทนการติดตั้งลงเครื่องโดยตรง
        </>
      ),
      tech: currentlyLearning,
    },
    {
      icon: <LiaLaptopCodeSolid size={24} />,
      title: "ภาษาโปรแกรม",
      description: (
        <>
          ช่วงเรียนมหาวิทยาลัย เรียกได้ว่า ได้ลองหลายภาษาโปรแกรม เริ่มต้นจากปี 1
          ได้เรียน Python เป็นตัวแรก พอเข้าปี 2 ก็ได้เรียน C++, Java, JavaScript
          และ TypeScript ตามลำดับ ภาษาที่ผมชอบที่สุดมี 2 ตัว คือ เจ้างูเหลือม{" "}
          <strong style={{ color: "#3776AB" }}>Python</strong> และ{" "}
          <strong style={{ color: "#007ACC" }}>TypeScript</strong>
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
          เมื่อเข้าปีที่ 3 ผมได้ลองเขียนซอฟต์แวร์แบบจริงจังครั้งแรก ด้วยลองเขียน{" "}
          <strong>React</strong> <strong>TypeScript</strong> และ{" "}
          <strong>Material UI</strong> ในวิชา{" "}
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
          วิชา <strong>SA</strong> กับ <strong>SE</strong> ทำให้ผมได้ลองพัฒนา
          Backend เริ่มจากการได้ใช้ภาษา Go และเฟรมเวิร์ก Gin ก่อนเลย
          จากนั้นก็ได้ลองใช้เฟรมเวิร์กอื่น ๆ อย่าง <strong>Express.js</strong>{" "}
          ในวิชา Advanced Web Application แล้วก็ลอง{" "}
          <strong style={{ color: "#8BC34A" }}>Java Spring Boot</strong>{" "}
          ด้วยตัวเองบ้าง แล้วยังได้ลองเฟรมเวิร์กอื่นในภาษา Go อย่าง{" "}
          <strong>Echo</strong> กับ <strong>Fiber</strong> อีกด้วย
        </>
      ),
      tech: backEndDevelopment,
    },
    {
      icon: <FaDatabase size={24} />,
      title: "ฐานข้อมูล",
      description: (
        <>
          Database ตัวแรกที่ได้ลองใช้เลยคือ{" "}
          <strong style={{ color: "#4479A1" }}>MySQL</strong>{" "}
          เริ่มจากงานโปรเจกต์วิชา Database Design แล้วก็ค่อย ๆ
          คุ้นเคยกับการจัดการข้อมูลมากขึ้นตอนสร้างซอฟต์แวร์ในวิชา{" "}
          <strong>SA</strong> และ <strong>SE</strong>
          หลังจากนั้นก็ได้ลองฐานข้อมูลแบบ <strong>NoSQL</strong> อย่าง{" "}
          <strong style={{ color: "#47A248" }}>MongoDB</strong>{" "}
          ทำให้ผมได้ลองอะไรใหม่อย่างการเก็บข้อมูลแบบไม่ใช้โครงสร้างตาราง
          แถมยังได้สัมผัสกับ <strong style={{ color: "#E33E2D" }}>Redis</strong>{" "}
          เพื่อลองแคชข้อมูล พอได้ลองหลาย ๆ ตัวก็เริ่มเห็นข้อดีข้อเสียของแต่ละแบบ
          ทำให้รู้ว่าจะใช้ตัวไหนในสถานการณ์ไหน
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
