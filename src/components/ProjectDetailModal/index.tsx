import { useProfileContext } from "@/context/ProfileContext";
import Link from "next/link";
import styles from "./styles.module.css"
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { IoMdMail } from "react-icons/io"

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

const PromptLabAI = () => {
  return (
    <div className="md:w-[70vw] sm:border border-slate-700 container mx-auto">
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
        {/* <div className="self-center justify-self-center pt-3">
          <div className="py-2 text-center max-md:text-xl text-3xl font-bold  self-center justify-self-center"> PROMPT LAB AI</div>
          <div className="self-center w-full justify-self-center bg-slate-500 h-[2px]" />
          <div className="py-2 text-center max-md:text-base	text-xl self-center justify-self-center"> Front-end Development</div>
        </div> */}
        <div className="w-full grid md:grid-cols-2">
          <div className="mb-1 md:py-2 md:ms-28 max-md:text-center max-md:text-2xl text-4xl font-bold self-center"> PROMPT LAB AI</div>
          <div className="md:hidden self-center w-2/3 justify-self-center bg-slate-500 h-[1.5px]" />
          <div className="py-1 max-md:text-center text-end md:me-28 max-md:text-base text-xl self-center"> Front-end Development</div>
        </div>
        <ul className="mx-4 md:ps-16 ps-8 list-disc text-lg max-md:text-sm md:mx-20">
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
  const { projectModalIndex, setProjectModalIndex } = useProfileContext();


  return (
    <div className="backdrop-blur-md fixed w-full h-full flex justify-center items-center"
      style={{ zIndex: 30 }}
    >
      {projectModalIndex === 1 && <PromptLabAI />}
    </div>
  )
}


export { ProjectDetailModal };
