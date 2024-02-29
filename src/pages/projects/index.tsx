type ProjectCardProbs = {
  index: number;
  projectName: string;
  imgUrl?: string;
  projectTimeRange?: string
  description: string;
  projectLink: string;
}

const ProjectCard = ({ imgUrl, projectName, projectTimeRange, description, projectLink }: ProjectCardProbs) => {
  return (
    <div className="m-3 border border-slate-800 flex justify-center">
      <div className="p-4 flex flex-col">
        <img
          className="justify-self-center"
          src={imgUrl}
        />
        <div className="border text-center">
          <text className="text-xl font-bold"> {projectName} </text>
          <div className="text-sm text-slate-500"> {projectTimeRange} </div>
          <p className="text-justify h-48 overflow-y-auto">
            {description}
          </p>
        </div>
        <div className="p-3 border w-full">
          <button
            className="linkButton"
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
    <div className="h-screen grid items-center">
      <div className="border border-sky-500 container mx-auto grid md:grid-cols-6">
        <div className="border border-cyan-500"> Sidebar </div>
        <div className="overflow-y-auto md:max-h-[80vh] md:px-10 px-5 border border-slate-700 w-full grid justify-self-center md:col-span-5">
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
        </div>
      </div>
    </div>
  )
}

export default Projects