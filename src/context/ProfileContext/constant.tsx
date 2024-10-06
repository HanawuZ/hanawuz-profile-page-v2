import { ProjectDetailModalProps } from "./type";
import * as Tech from "@/constants/skills"

type ProjectDetailMap = {
  [key: string]: ProjectDetailModalProps;
};

const PROJECTS: ProjectDetailMap = {
  "prompt-lab": {
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
      ` My role in this project involves front-end development, utilizing Next.js and Bootstrap frameworks.`
    ],
    techologies: [Tech.TYPESCRIPT, Tech.REACT, Tech.NEXT, Tech.BOOTSTRAP],
    projectUrl: "https://promptlabai.com/th/",
    githubUrl: "https://github.com/promptlabth/promptlab-fe"
  },
  "se-project": {
    name: "Registration System",
    role: "Full-stack Development",
    projectTimeRange: "December 2022 - Febuary 2023",
    projectCardImageUrl:"images\\projects\\SoftwareEngineering\\Se0.png",
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
      `The system employs JSON Web Tokens (JWT) for its authorization system, providing secure and efficient user authentication.`
    ],
    techologies: [Tech.TYPESCRIPT, Tech.REACT, Tech.MUI, Tech.GO, Tech.GIN],
    githubUrl: "https://github.com/HanawuZ/team05",
  }
};


export default PROJECTS;