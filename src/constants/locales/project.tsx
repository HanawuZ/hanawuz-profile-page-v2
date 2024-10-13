import * as Tech from "@/constants/badge";
import { ProjectDetailModalProps } from "@/context/ProfileContext/type";

const promptLab: Record<string, ProjectDetailModalProps> = {
  th: {
    name: "Prompt Lab AI",
    role: "Front-end Development",
    projectTimeRange: "มีนาคม 2023 - ตอนนี้",
    projectCardImageUrl: "images\\prompt-lab.jpg",
    imageUrls: ["images\\prompt-lab-overview.png"],
    overview: `Prompt Lab เป็นเว็บไซต์ที่ช่วยปลดล็อกความคิดสร้างสรรค์ของคุณด้วยความช่วยเหลือจาก AI ในการสร้างโพสต์ขายของ เรากำลังร่วมมือกับเพื่อนเพื่อพัฒนาเว็บไซต์นี้โดยใช้ Next.js และ Bootstrap เป็นเฟรมเวิร์กสำหรับการจัดการ CSS`,
    description: [
      `Prompt Lab เป็นเว็บไซต์ที่ช่วยปลดล็อกความคิดสร้างสรรค์ของคุณด้วยความช่วยเหลือจาก AI สำหรับการสร้างโพสต์ขาย สร้างเนื้อหาไอเดีย เขียนบทความ สร้างสคริปต์วิดีโอ และข้อความดึงดูดความสนใจ`,
      `บทบาทของฉันในโปรเจกต์นี้คือการพัฒนา Front-end โดยใช้เฟรมเวิร์ก Next.js และ Bootstrap`,
    ],
    techologies: [Tech.TYPESCRIPT, Tech.REACT, Tech.NEXT, Tech.BOOTSTRAP],
    projectUrl: "https://promptlabai.com/th/",
    githubUrl: "https://github.com/promptlabth/promptlab-fe",
  },
  en: {
    name: "Prompt Lab AI",
    role: "Front-end Development",
    projectTimeRange: "March 2023 - Present",
    projectCardImageUrl: "images\\prompt-lab.jpg",
    imageUrls: ["images\\prompt-lab-overview.png"],
    overview: ` Prompt Lab is a website that unlocks your creativity with AI assistance for generating sales posts. 
                I collaborating with my friend to develop this site using Next.js with Bootstrap for CSS frameworks.`,
    description: [
      ` Prompt Lab is a website that unlocks your creativity with AI assistance for generating sales posts, 
        creating idea contents, making article, creating video scripts and clickbait text.`,
      ` My role in this project involves front-end development, utilizing Next.js and Bootstrap frameworks.`,
    ],
    techologies: [Tech.TYPESCRIPT, Tech.REACT, Tech.NEXT, Tech.BOOTSTRAP],
    projectUrl: "https://promptlabai.com/th/",
    githubUrl: "https://github.com/promptlabth/promptlab-fe",
  },
};

const softwareEngineeringProject: Record<string, ProjectDetailModalProps> = {
  en: {
    name: "Registration System",
    role: "Full-stack Development",
    projectTimeRange: "December 2022 - Febuary 2023",
    projectCardImageUrl: "images\\projects\\SoftwareEngineering\\Se0.png",
    imageUrls: [
      "images\\projects\\SoftwareEngineering\\Se0.png",
      "images\\projects\\SoftwareEngineering\\Se1.png",
      "images\\projects\\SoftwareEngineering\\Se2.png",
      "images\\projects\\SoftwareEngineering\\Se3.png",
    ],
    overview: `A software engineering courses project. This project is developed with React and Typescript, along with the Golang Gin framework`,
    description: [
      `I have collaborated with team to complete the registration system, a software engineering courses project.`,
      `This project is developed with React and Typescript, along with the Golang Gin framework.`,
      `The system employs JSON Web Tokens (JWT) for its authorization system, providing secure and efficient user authentication.`,
    ],
    techologies: [Tech.TYPESCRIPT, Tech.REACT, Tech.MUI, Tech.GO, Tech.GIN],
    githubUrl: "https://github.com/HanawuZ/team05",
  },
  th: {
    name: "ระบบลงทะเบียนเรียน",
    role: "Full-stack Development",
    projectTimeRange: "ธันวาคม 2022 - กุมพาพันธ์ 2023",
    projectCardImageUrl: "images\\projects\\SoftwareEngineering\\Se0.png",
    imageUrls: [
      "images\\projects\\SoftwareEngineering\\Se0.png",
      "images\\projects\\SoftwareEngineering\\Se1.png",
      "images\\projects\\SoftwareEngineering\\Se2.png",
      "images\\projects\\SoftwareEngineering\\Se3.png",
    ],
    overview: `โปรเจครายวิชาวิศวกรรมซอฟต์แวร์ พัฒนาด้วย React Typescript และภาษา Go ใช้ Gin framework`,
    description: [
      `ช่วยกับเพื่อนในทีมในการพัฒนาระบบลงทะเบียนเรียน`,
      `พัฒนาด้วย React Typescript และภาษา Go ใช้ Gin framework`,
      `ตัวระบบใช้ JSON Web Tokens (JWT) สำหรับการ authorization`
    ],
    techologies: [Tech.TYPESCRIPT, Tech.REACT, Tech.MUI, Tech.GO, Tech.GIN],
    githubUrl: "https://github.com/HanawuZ/team05",
  },
};

const PROJECTS: Record<string, Record<string, ProjectDetailModalProps>> = {
  "prompt-lab": promptLab,
  "se-project": softwareEngineeringProject,
};

export default PROJECTS;
