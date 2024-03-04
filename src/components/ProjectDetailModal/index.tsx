import { useProfileContext } from "@/context/ProfileContext";
import Link from "next/link";
import styles from "./styles.module.css"
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { IoMdMail } from "react-icons/io"
import { Carousel } from 'flowbite-react';
import { Button } from 'flowbite-react';

const CloseButton = () => {
  const { setProjectModalIndex } = useProfileContext();

  const closeProjectModal = () => {
    setProjectModalIndex(-1);
  }

  return (
    <div className="flex justify-end w-full pe-4 py-1">
      <button className="text-white bg-transparent text-2xl" onClick={closeProjectModal} >
        &#9587;
      </button>
    </div>
  )
}

const FoodFinderBackend = () => (
  <div className={`md:w-[70vw] sm:border border-slate-700 container mx-auto ${styles.projectDetailModal}`}>
    <div className="w-full bg-slate-600">
      <CloseButton />
    </div>
    <div className="border w-full overflow-y-auto md:max-h-[70vh] max-h-[90vh] grid overflow-x-hidden bg-white">
      <div className={`mb-5  md:mx-10 mt-5 ${styles.projectCarouselContainer} `}>
        <Carousel
          className="border border-slate-700"
          leftControl={<div className="text-3xl"> &#60; </div>}
          rightControl={<div className="text-3xl"> &#62; </div>}
          slideInterval={5000}
          indicators={false}
        >
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div>
      <div className="w-full grid lg:grid-cols-2">
        <div className="md:py-2 max-lg:text-center lg:ms-24 text-2xl font-bold self-center"> FOODFINDER BACKEND SYSTEM</div>
        <div className="lg:hidden self-center w-2/3 justify-self-center bg-slate-500 h-[1.5px]" />
        <div className="py-1 max-lg:text-center text-end lg:me-24 max-lg:text-base text-lg self-center"> Back-end Development</div>
      </div>
      <div className="max-lg:hidden self-center lg:w-3/4 xl:w-4/5 justify-self-center bg-slate-500 h-[1.5px]" />
      <ul className="mt-4 ps-10 list-disc text-base max-lg:text-sm md:mx-20">
        <li>
          The back-end system for the LINE chatbot, a project of course Natural Language Processing.
        </li>
        <li>
          This system is developed using Node.js with the Express.js library, and it is connected to a MySQL Database
        </li>
      </ul>
      <div className="flex justify-center my-5">
        <Link className={`px-2 p-1 flex justify-center ${styles.viewProjectButton}`} href={"https://github.com/HanawuZ/foodfinder"}>
          <FaGithub size={30} className="self-center" />
          <text className="ms-2 self-center"> View Project</text>
        </Link>
      </div>
    </div>
  </div>
)

const SoftwareEngineering = () => {
  return (
    <div className={`md:w-[70vw] sm:border border-slate-700 container mx-auto ${styles.projectDetailModal}`}>
      <div className="w-full bg-slate-600">
        <CloseButton />
      </div>
      <div className="w-full overflow-y-auto md:max-h-[70vh] max-h-[90vh] grid overflow-x-hidden bg-white">
        <div className={`mb-5  md:mx-10 mt-5 ${styles.projectCarouselContainer} `}>
          <Carousel
            className="border border-slate-700"
            leftControl={<div className="text-3xl"> &#60; </div>}
            rightControl={<div className="text-3xl"> &#62; </div>}
            slideInterval={5000}
            indicators={false}
          >
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
            {/*
            <img
              className="object-cover px-3 lg:px-8"
              src="images\se-pic-1.png"
              alt="SE1"
            />
            <img
              className="object-cover px-3 lg:px-8"
              src="images\se-pic-1.png"
              alt="SE1"
            />
            <img
              className="object-cover px-3 lg:px-8"
              src="images\se-pic-1.png"
              alt="SE1"
            /> */}
          </Carousel>
        </div>
        <div className="w-full grid lg:grid-cols-2">
          <div className="md:py-2 max-lg:text-center lg:ms-24 text-2xl font-bold self-center"> REGISTRATION SYSTEM</div>
          <div className="lg:hidden self-center w-2/3 justify-self-center bg-slate-500 h-[1.5px]" />
          <div className="py-1 max-lg:text-center text-end lg:me-24 max-lg:text-base text-lg self-center"> Full-stack Development</div>
        </div>
        <div className="max-lg:hidden self-center lg:w-3/4 xl:w-4/5 justify-self-center bg-slate-500 h-[1.5px]" />
        <ul className="mt-4 ps-10 list-disc text-base max-lg:text-sm md:mx-20">
          <li>
            I have collaborated with team to complete the registration system, a software engineering courses project.
          </li>
          <li>
            This project is developed with React and Typescript, along with the Golang Gin framework.
          </li>
          <li>
            The system employs JSON Web Tokens (JWT) for its authorization system, providing secure and efficient user authentication.
          </li>
        </ul>
        <div className="flex justify-center my-5">
          <Link className={`px-2 p-1 flex justify-center ${styles.viewProjectButton}`} href={"https://github.com/HanawuZ/team05"}>
            <FaGithub size={30} className="self-center" />
            <text className="ms-2 self-center"> View Project</text>
          </Link>
        </div>
      </div>
    </div>
  )
}

const PromptLabAI = () => {
  return (
    <div className={`md:w-[70vw] sm:border border-slate-700 container mx-auto ${styles.projectDetailModal}`}>
      <div className="w-full bg-slate-600">
        <CloseButton />
      </div>
      <div className="border w-full overflow-y-auto md:max-h-[70vh] max-h-[90vh] grid overflow-x-hidden bg-white">
        <div className="md:mx-20 mt-8 mb-4 flex justify-center">
          <img
            className="object-cover px-3 lg:px-8"
            src="images\prompt-lab-overview.png"
            alt="Prompt Lab AI"
          />
        </div>
        <div className="w-full grid lg:grid-cols-2">
          <div className="md:py-2 max-lg:text-center lg:ms-24 text-2xl font-bold self-center"> PROMPT LAB AI</div>
          <div className="lg:hidden self-center w-2/3 justify-self-center bg-slate-500 h-[1.5px]" />
          <div className="py-1 max-lg:text-center text-end lg:me-24 max-lg:text-base text-lg self-center"> Front-end Development</div>
        </div>
        <div className="max-lg:hidden self-center lg:w-3/4 xl:w-4/5 justify-self-center bg-slate-500 h-[1.5px]" />
        <ul className="mt-4 ps-10 list-disc text-base max-lg:text-sm md:mx-20">
          <li>
            Prompt Lab is a website that unlocks your creativity with AI assistance for generating sales posts, creating idea contents, making article, creating video scripts and clickbait text.
          </li>
          <li>
            My role in this project involves front-end development, utilizing Next.js and Bootstrap frameworks.
          </li>
        </ul>
        <div className="flex justify-center my-5">
          <Link className={`px-2 p-1 flex justify-center ${styles.viewProjectButton}`} href={"https://prompt.sutmeme.com/"}>
            <FaGithub size={30} className="self-center" />
            <text className="ms-2 self-center"> View Project</text>
          </Link>
        </div>
      </div>
    </div>
  )
}

const ProjectDetailModal = () => {
  const { projectModalIndex } = useProfileContext();
  return (
    <div className="backdrop-blur-md fixed w-full h-full flex justify-center items-center"
      style={{ zIndex: 30 }}
    >
      {projectModalIndex === 1 && <PromptLabAI />}
      {projectModalIndex === 2 && <SoftwareEngineering />}
      {projectModalIndex === 3 && <FoodFinderBackend />}
    </div>
  )
}


export { ProjectDetailModal };
