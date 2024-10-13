import { WebHeader } from "@/components/WebHeader"
import { ProjectBody } from "./components/ProjectBody"
import PageLayout from "@/components/layout/PageLayout"
import { useProfileContext } from "@/context/ProfileContext"
import pageLocales from "@/constants/locales/page"
const Projects = () => {
  const { language } = useProfileContext();
  return (
    <>
      <WebHeader title={`Thanawut - ${pageLocales[language].projects}`} />
      <PageLayout title={pageLocales[language].projects}>
        <ProjectBody />
      </PageLayout>
    </>
  )
}

export default Projects