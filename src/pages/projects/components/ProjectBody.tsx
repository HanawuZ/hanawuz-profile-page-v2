import { ProjectCard } from "./ProjectCard";
import { REACT, TYPESCRIPT, BOOTSTRAP, NEXT } from "@/constants/skills";
const ProjectBody = () => {
  return (
    <div className="h-90vh md:overflow-y-auto sm:px-8 max-sm:mt-6">
      <div
        className="grid md:grid-cols-5 lg:grid-cols-4 max-md:pb-20 "
        style={{
          zIndex: 100,
        }}
      >
        <div></div>
        <div className="w-full md:col-span-4 lg:col-span-3 min-h-[100vh] flex">
          <div className="w-full">
            <div className="text-2xl font-bold sm:mt-10 max-md:ms-3 text-center">
              PROJECTS
            </div>
            <div className="grid gap-3 p-4 mt-4">
              <div className="justify-self-center">
                <ProjectCard
                  index={1}
                  projectName="Prompt Lab AI"
                  imgUrl="images\prompt-lab.jpg"
                  projectTimeRange="2023 - Present"
                  description={`
                  Prompt Lab is a website that unlocks your creativity with AI assistance for generating sales posts. 
                  I collaborating with my friend to develop this site using Next.js with Bootstrap for CSS frameworks.
                `}
                  projectLink="https://promptlabai.com/"
                  skills={[REACT, NEXT, TYPESCRIPT, BOOTSTRAP]}
                />
                {/* <ProjectCard
                index={1}
                projectName="Prompt Lab AI"
                imgUrl="images\prompt-lab.jpg"
                projectTimeRange="2023 - Present"
                description={`
                  Prompt Lab is a website that unlocks your creativity with AI assistance for generating sales posts. 
                  I collaborating with my friend to develop this site using Next.js with Bootstrap for CSS frameworks.
                `}
                projectLink="https://promptlabai.com/"
                skills={[REACT, NEXT, TYPESCRIPT, BOOTSTRAP]}
              />
               <ProjectCard
                index={1}
                projectName="Prompt Lab AI"
                imgUrl="images\prompt-lab.jpg"
                projectTimeRange="2023 - Present"
                description={`
                  Prompt Lab is a website that unlocks your creativity with AI assistance for generating sales posts. 
                  I collaborating with my friend to develop this site using Next.js with Bootstrap for CSS frameworks.
                `}
                projectLink="https://promptlabai.com/"
                skills={[REACT, NEXT, TYPESCRIPT, BOOTSTRAP]}
              />
               <ProjectCard
                index={1}
                projectName="Prompt Lab AI"
                imgUrl="images\prompt-lab.jpg"
                projectTimeRange="2023 - Present"
                description={`
                  Prompt Lab is a website that unlocks your creativity with AI assistance for generating sales posts. 
                  I collaborating with my friend to develop this site using Next.js with Bootstrap for CSS frameworks.
                `}
                projectLink="https://promptlabai.com/"
                skills={[REACT, NEXT, TYPESCRIPT, BOOTSTRAP]}
              /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectBody };
