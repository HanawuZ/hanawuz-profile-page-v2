import styles from "./styles.module.css"
import { useProfileContext } from "@/context/ProfileContext"

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
    <div className="m-2 border border-slate-800 flex justify-center">
      <div className="p-4 flex flex-col">
        <img
          className="justify-self-center"
          src={imgUrl}
          alt="Project Image"
        />
        <div className="text-center pt-3">
          <text className="text-lg font-bold p"> {projectName} </text>
          <div className="text-sm text-slate-500"> {projectTimeRange} </div>
          <p className="mt-4 text-justify h-48 overflow-y-auto">
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
  return (
    <div className="h-screen grid items-center" >
      <div className="container mx-auto grid md:grid-cols-5 lg:grid-cols-4" style={{ zIndex: 1 }}>
        <div className="max-sm:h-[10vh]"></div>
        <div className='w-full grid justify-self-center md:col-span-4 lg:col-span-3 border border-slate-700'>
          <div
            className="ps-5 text-xl font-bold max-md:text-xl text-white p-2"
            style={{
              background: "rgba(0, 0, 0, 0.35)",
            }}
          > Projects </div>
          <div className='md:overflow-y-auto md:h-[70vh] pb-4' style={{ background: "rgb(255, 255, 255, 0.2)", }}>
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
              {/* 
              <ProjectCard
                index={4}
                projectName="Project 4"
                imgUrl="https://dummyimage.com/400x400/000/fff"
                projectTimeRange="2021 - 2022"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex elit, hendrerit eget diam nec, ultrices malesuada ligula. , ultrices malesuada ligula. Proin ullamcorper nibh et turpis m"
                projectLink=""
              />
              <ProjectCard
                index={5}
                projectName="Project 5"
                imgUrl="https://dummyimage.com/400x400/000/fff"
                projectTimeRange="2021 - 2022"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex elit, hendrerit eget diam nec, ultrices malesuada ligula. , ultrices malesuada ligula. Proin ullamcorper nibh et turpis m"
                projectLink=""
              /> */}
            </div>
          </div>
        </div>
        {/* <div className="overflow-y-auto md:max-h-[80vh] md:px-10 px-5 border border-slate-700 w-full grid justify-self-center md:col-span-5">
          <div className="my-5">
            <text className="text-3xl"> Projects </text>
            <div className="mt-3 border border-slate-500 grid lg:grid-cols-3 md:grid-cols-2">
              <ProjectCard
                index={1}
                projectName="Project 1"
                imgUrl="https://dummyimage.com/400x400/000/fff"
                projectTimeRange="2021 - 2022"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex elit, hendrerit eget diam nec, ultrices malesuada ligula. Proin ullamcorper nibh et turpis molestie, dignissim varius dolor porttitor. Praesent sagittis ligula risus, id aliquet sem tristique eget. Duis hendrerit felis a ante sollicitudin, sit amet placerat nisi consectetur."
                projectLink=""
              />
              <ProjectCard
                index={2}
                projectName="Project 2"
                imgUrl="https://dummyimage.com/400x400/000/fff"
                projectTimeRange="2021 - 2022"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex elit, hendrerit eget diam nec, ultrices malesuada ligula."
                projectLink=""
              />
              <ProjectCard
                index={3}
                projectName="Project 3"
                imgUrl="https://dummyimage.com/400x400/000/fff"
                projectTimeRange="2021 - 2022"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex elit, hendrerit eget diam nec, ultrices malesuada ligula. , ultrices malesuada ligula. Proin ullamcorper nibh et turpis m"
                projectLink=""
              />
              <ProjectCard
                index={4}
                projectName="Project 4"
                imgUrl="https://dummyimage.com/400x400/000/fff"
                projectTimeRange="2021 - 2022"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex elit, hendrerit eget diam nec, ultrices malesuada ligula. , ultrices malesuada ligula. Proin ullamcorper nibh et turpis m"
                projectLink=""
              />
              <ProjectCard
                index={5}
                projectName="Project 5"
                imgUrl="https://dummyimage.com/400x400/000/fff"
                projectTimeRange="2021 - 2022"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex elit, hendrerit eget diam nec, ultrices malesuada ligula. , ultrices malesuada ligula. Proin ullamcorper nibh et turpis m"
                projectLink=""
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Projects