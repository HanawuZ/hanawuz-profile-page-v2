import { useProfileContext } from "@/context/ProfileContext"
import { WebHeader } from "@/components/WebHeader"
import { ProjectBody } from "./components/ProjectBody"

const Projects = () => {
  return (
    <>
      <WebHeader title="Thanawut - Projects" />
      <ProjectBody />
    </>
  )
}

export default Projects