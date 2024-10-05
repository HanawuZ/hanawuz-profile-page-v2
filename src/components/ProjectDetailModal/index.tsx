import { useProfileContext } from "@/context/ProfileContext";
import Link from "next/link";
import styles from "./styles.module.css";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";
import { CiGlobe } from "react-icons/ci";
import { SkillBadgeProps } from "@/components/SkillBadge/type";
import ListItem from "@/components/Listing/ListItem";
import PROJECTS from "@/context/ProfileContext/constant";
import { SkillBadge } from "@/components/SkillBadge";

const CloseButton = ({ className }: { className?: string }) => {
  const { setProjectKey } = useProfileContext();

  const closeProjectModal = () => {
    setProjectKey("");
  };

  return (
    <button className={className} onClick={closeProjectModal}>
      &#9587;
    </button>
  );
};

const FoodFinderBackend = () => (
  <div
    className={`md:w-[70vw] sm:border border-slate-700 container mx-auto ${styles.projectDetailModal}`}
  >
    <div className="w-full bg-slate-600">
      <CloseButton />
    </div>
    <div className="border w-full overflow-y-auto md:max-h-[70vh] max-h-[90vh] grid overflow-x-hidden bg-white">
      <div
        className={`mb-5  md:mx-10 mt-5 ${styles.projectCarouselContainer} `}
      >
        <Carousel
          className=""
          leftControl={<div className="text-3xl"> &#60; </div>}
          rightControl={<div className="text-3xl"> &#62; </div>}
          slideInterval={5000}
          indicators={false}
        >
          <img
            className="object-cover"
            src="images\projects\FoodFinder\food-1.jpg"
            alt="SE1"
          />
          <img
            className="object-cover"
            src="images\projects\FoodFinder\food-2.jpg"
            alt="SE1"
          />
        </Carousel>
      </div>
      <div className="w-full grid lg:grid-cols-2">
        <div className="md:py-2 max-lg:text-center lg:ms-24 text-2xl font-bold self-center">
          {" "}
          FOODFINDER BACKEND SYSTEM
        </div>
        <div className="lg:hidden self-center w-2/3 justify-self-center bg-slate-500 h-[1.5px]" />
        <div className="py-1 max-lg:text-center text-end lg:me-24 max-lg:text-base text-lg self-center">
          {" "}
          Back-end Development
        </div>
      </div>
      <div className="max-lg:hidden self-center lg:w-3/4 xl:w-4/5 justify-self-center bg-slate-500 h-[1.5px]" />
      <ul className="mt-4 ps-10 list-disc text-base max-lg:text-sm md:mx-20">
        <li>
          The back-end system for the LINE chatbot, a project of course Natural
          Language Processing.
        </li>
        <li>
          This system is developed using Node.js with the Express.js library,
          and it is connected to a MySQL Database
        </li>
      </ul>
      <div className="flex justify-center my-5">
        <Link
          className={`px-2 p-1 flex justify-center ${styles.viewProjectButton}`}
          href={"https://github.com/HanawuZ/foodfinder"}
        >
          <FaGithub size={30} className="self-center" />
          <text className="ms-2 self-center"> View Project</text>
        </Link>
      </div>
    </div>
  </div>
);

const SoftwareEngineering = () => {
  return (
    <div
      className={`md:w-[70vw] sm:border border-slate-700 container mx-auto ${styles.projectDetailModal}`}
    >
      <div className="w-full bg-slate-600">
        <CloseButton />
      </div>
      <div className="w-full overflow-y-auto md:max-h-[70vh] max-h-[90vh] grid overflow-x-hidden bg-white">
        <div
          className={`mb-5  md:mx-10 mt-5 ${styles.projectCarouselContainer} `}
        >
          <Carousel
            className="border border-slate-600 rounded-lg"
            leftControl={<div className="text-3xl"> &#60; </div>}
            rightControl={<div className="text-3xl"> &#62; </div>}
            slideInterval={5000}
            indicators={false}
          >
            <img
              className="object-cover"
              src="images\projects\SoftwareEngineering\Se0.png"
              alt="SE1"
            />
            <img
              className="object-cover"
              src="images\projects\SoftwareEngineering\Se1.png"
              alt="SE1"
            />
            <img
              className="object-cover"
              src="images\projects\SoftwareEngineering\Se2.png"
              alt="SE1"
            />
            <img
              className="object-cover"
              src="images\projects\SoftwareEngineering\Se3.png"
              alt="SE1"
            />
          </Carousel>
        </div>
        <div className="w-full grid lg:grid-cols-2">
          <div className="md:py-2 max-lg:text-center lg:ms-24 text-2xl font-bold self-center">
            {" "}
            REGISTRATION SYSTEM
          </div>
          <div className="lg:hidden self-center w-2/3 justify-self-center bg-slate-500 h-[1.5px]" />
          <div className="py-1 max-lg:text-center text-end lg:me-24 max-lg:text-base text-lg self-center">
            {" "}
            Full-stack Development
          </div>
        </div>
        <div className="max-lg:hidden self-center lg:w-3/4 xl:w-4/5 justify-self-center bg-slate-500 h-[1.5px]" />
        <ul className="mt-4 ps-10 list-disc text-base max-lg:text-sm md:mx-20">
          <li>
            I have collaborated with team to complete the registration system, a
            software engineering courses project.
          </li>
          <li>
            This project is developed with React and Typescript, along with the
            Golang Gin framework.
          </li>
          <li>
            The system employs JSON Web Tokens (JWT) for its authorization
            system, providing secure and efficient user authentication.
          </li>
        </ul>
        <div className="flex justify-center my-5">
          <Link
            className={`px-2 p-1 flex justify-center ${styles.viewProjectButton}`}
            href={"https://github.com/HanawuZ/team05"}
          >
            <FaGithub size={30} className="self-center" />
            <text className="ms-2 self-center"> View Project</text>
          </Link>
        </div>
      </div>
    </div>
  );
};

const PromptLabAI = () => {
  return (
    <div
      className={`md:w-[70vw] container mx-auto ${styles.projectDetailModal}`}
    >
      <div className="w-full bg-slate-600 rounded-t-lg">
        <CloseButton />
      </div>
      <div className="w-full overflow-y-auto grid overflow-x-hidden bg-white md:max-h-[86vh] max-h-[90vh]">
        {/* <div className="border w-full overflow-y-auto md:max-h-[70vh] max-h-[90vh] grid overflow-x-hidden bg-white"> */}
        <div className="md:mx-20 mt-8 mb-4 flex justify-center">
          <img
            className="object-cover border border-slate-600 mx-3 lg:mx-8"
            src="images\prompt-lab-overview.png"
            alt="Prompt Lab AI"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="w-full grid lg:grid-cols-2">
          <div className="md:py-2 max-lg:text-center lg:ms-24 text-2xl font-bold self-center">
            {" "}
            PROMPT LAB AI
          </div>
          <div className="lg:hidden self-center w-2/3 justify-self-center bg-slate-500 h-[1.5px]" />
          <div className="py-1 max-lg:text-center text-end lg:me-24 max-lg:text-base text-lg self-center">
            {" "}
            Front-end Development
          </div>
        </div>
        <div className="max-lg:hidden self-center lg:w-3/4 xl:w-4/5 justify-self-center bg-slate-500 h-[1.5px]" />
        <ul className="mt-4 ps-10 list-disc text-base max-lg:text-sm md:mx-20">
          <li>
            Prompt Lab is a website that unlocks your creativity with AI
            assistance for generating sales posts, creating idea contents,
            making article, creating video scripts and clickbait text.
          </li>
          <li>
            My role in this project involves front-end development, utilizing
            Next.js and Bootstrap frameworks.
          </li>
        </ul>
        <div></div>
        <div className="flex justify-end max-md:justify-center my-5 md:mx-20 gap-2">
          {/* <FaGithub className="text-5xl md:text-4xl" />
          <CiGlobe className="text-5xl md:text-4xl" /> */}
          {/* <Link className={`px-2 p-1 flex justify-center ${styles.viewProjectButton}`} href={"https://prompt.sutmeme.com/"}>
            <FaGithub size={30} className="self-center" />
            <text className="ms-2 self-center"> View Project</text>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

const value = [];

const ProjectDetailModal = () => {
  const { projectKey } = useProfileContext();
  const {
    name,
    role,
    projectTimeRange,
    projectUrl,
    githubUrl,
    description,
    techologies,
    imageUrls,
  } = PROJECTS[projectKey];
  return (
    <div
      className="backdrop-blur-md fixed top-0 w-full h-full flex justify-center items-center"
      style={{ zIndex: 999 }}
    >
      <div
        className={`md:w-[70vw] container mx-auto ${styles.projectDetailModal}`}
      >
        <div className="w-full bg-slate-600 rounded-t-lg">
          <div className="grid grid-cols-3 w-full pe-4 py-2">
            <div />
            <text className="text-white justify-self-center"> {name} </text>
            <CloseButton className="justify-self-end text-white" />
          </div>
        </div>
        <div className="w-full overflow-y-auto grid overflow-x-hidden bg-white md:max-h-[86vh] max-h-[90vh] pb-4">
          <div
            className={`mb-5  md:mx-10 mt-5 ${styles.projectCarouselContainer} `}
          >
            <Carousel
              className="border border-slate-600 rounded-lg"
              leftControl={<div className="text-3xl"> &#60; </div>}
              rightControl={<div className="text-3xl"> &#62; </div>}
              slideInterval={5000}
              indicators={false}
            >
              {imageUrls?.map((url, index) => (
                <img
                  key={index}
                  className="object-cover overflow-y-hidden h-full"
                  src={url}
                  alt={name}
                  style={{ borderRadius: "10px" }}
                />
              ))}
            </Carousel>
          </div>
          <div className="w-full grid lg:grid-cols-2">
            <div className="md:py-2 max-lg:text-center lg:ms-24 text-2xl font-bold self-center">
              {name.toUpperCase()}
            </div>
            <div className="lg:hidden self-center w-2/3 justify-self-center bg-slate-500 h-[1.5px]" />
            <div className="py-1 max-lg:text-center text-end lg:me-24 max-lg:text-base text-lg self-center">
              {role}
            </div>
          </div>
          <div className="max-lg:hidden self-center lg:w-3/4 xl:w-4/5 justify-self-center bg-slate-500 h-[1.5px]" />
          <div className="mt-4 md:mx-16 md:ps-10 gap-2 flex flex-wrap max-md:justify-center">
            {techologies?.map((tech, index) => (
              <SkillBadge key={`id-33-${index}`} {...tech} />
            ))}
          </div>
          <ul className="mt-4 ps-10 list-disc text-base max-lg:text-sm md:mx-20">
            {description?.map((desc, index) => (
              <ListItem key={`id-22-${index}`}>{desc}</ListItem>
            ))}
          </ul>

          <div className="max-md:hidden flex justify-end max-md:justify-center my-5 md:mx-20 gap-2">
            {githubUrl && (
              <Link className={styles.icon} href={githubUrl}>
                <FaGithub className="text-5xl md:text-4xl" />
              </Link>
            )}
            {projectUrl && (
              <Link className={styles.icon} href={projectUrl}>
                <CiGlobe className="text-5xl md:text-4xl" />
              </Link>
            )}
          </div>
          <div className="md:hidden flex justify-end max-md:justify-center my-5 md:mx-20 gap-2">
            {githubUrl && (
              <Link
                className={`px-2 p-1 flex justify-center ${styles.viewProjectButton}`}
                href={githubUrl}
              >
                <FaGithub size={30} className="text-5xl md:text-4xl" />
                <text className="ms-2 self-center"> View code</text>
              </Link>
            )}
            {projectUrl && (
              <Link
                className={`px-2 p-1 flex justify-center ${styles.viewProjectButton}`}
                href={projectUrl}
              >
                <CiGlobe size={30} className="self-center" />
                <text className="ms-2 self-center"> View project</text>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectDetailModal };
