import { WebHeader } from "@/components/WebHeader"
import { ProjectBody } from "./components/ProjectBody"
import PageLayout from "@/components/layout/PageLayout"
const Projects = () => {
  return (
    <>
      <WebHeader title="Thanawut - Projects" />
      <PageLayout title="PROJECTS">
        <ProjectBody />
      </PageLayout>
    </>
  )
}

export default Projects