import styles from "./styles.module.css"
import { useProfileContext } from "@/context/ProfileContext"
import { motion, } from "framer-motion"

type ProjectCardProbs = {
  index: number;
  projectName: string;
  imgUrl?: string;
  projectTimeRange?: string
  description: string;
  projectLink: string;
}

const ProjectCard = ({ index, imgUrl, projectName, projectTimeRange, description, projectLink }: ProjectCardProbs) => {
  const { setProjectModalIndex } = useProfileContext();
  return (
    <div className="m-2 border border-slate-800 flex max-md:mx-5 justify-center"
      style={{
        background: "rgb(208, 208, 208, 0.2)",
      }}
    >
      <div className="p-4 flex flex-col">
        <div className="w-full   flex justify-center">
          <img
            className="justify-self-center max-md:w-[50vw] w-[15vw]"
            src={imgUrl}
            alt="Project Image"
          />
        </div>
        <div className="text-center pt-3">
          <text className="text-lg font-bold p"> {projectName} </text>
          <div className="text-sm text-slate-500"> {projectTimeRange} </div>
          <p className="mt-4 h-48 overflow-y-auto">
            {description}
          </p>
        </div>
        <div className="p-3 w-full">
          <button
            onClick={() => setProjectModalIndex(index)}
            className={styles.linkButton}
            style={{
              border: 'solid 1px',
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const { screenWidth } = useProfileContext()

  return (
    <div className="h-screen grid items-center max-md:ms-2 pt-3" >
      <div className="container mx-auto grid md:grid-cols-5 lg:grid-cols-4" style={{ zIndex: 1 }}>
        <div className="max-md:h-[10vh]"></div>
        <motion.div
          className={`w-full grid justify-self-center md:col-span-4 lg:col-span-3 border border-slate-700 ${screenWidth > 768 ? styles.projectPage : ''}`}
          initial={screenWidth > 768 ? {} : { opacity: 0, x: -100 }}
          animate={screenWidth > 768 ? {} : { opacity: 1, x: 0 }}
          exit={screenWidth > 768 ? {} : { opacity: 0, x: 100 }}
          transition={{ type: 'tween', duration: 0.25 }}
        >
          <div
            className="ps-5 text-xl font-bold max-md:text-xl text-white p-2"
            style={{
              background: "rgba(0, 0, 0, 0.35)",
            }}
          > Projects </div>
          <div className='md:overflow-y-auto md:h-[70vh] md:max-h-[720px] pb-4' style={{ background: "rgb(255, 255, 255, 0.2)", }}>
            <div className="mt-2 mx-2 grid lg:grid-cols-3 md:grid-cols-2">
              <ProjectCard
                index={1}
                projectName="Prompt Lab AI"
                imgUrl="images\prompt-lab.jpg"
                projectTimeRange="2023 - Present"
                description="Prompt Lab is a website that unlocks your creativity with AI assistance for generating sales posts. I'm using Next.js with Bootstrap for CSS frameworks."
                projectLink="https://promptlabai.com/"
              />
              <ProjectCard
                index={2}
                projectName="Registration System"
                imgUrl="images\se-pic.png"
                projectTimeRange="Dec 6, 2022 - Feb 24, 2023"
                description="A software engineering courses project. This project is developed with React and Typescript, along with the Golang Gin framework"
                projectLink=""
              />
              <ProjectCard
                index={3}
                projectName="FoodFinder Backend"
                imgUrl="images\food-image.jpg"
                projectTimeRange="May 2023 - June 2023"
                description="The back-end system for the LINE chatbot, which involves Natural Language Processing, is developed using Node.js with the Express.js. This system is connected to a MySQL Database."
                projectLink=""
              />
            </div>
          </div>
        </motion.div>
        {/* <div className={`w-full grid justify-self-center md:col-span-4 lg:col-span-3 border border-slate-700 ${styles.projectPage}`}>
          
        </div> */}
      </div>
    </div>)
}

export default Projects