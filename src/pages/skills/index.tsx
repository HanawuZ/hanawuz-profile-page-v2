import { WebHeader } from "@/components/WebHeader";
import { SkillsBody } from "./components/SkillsBody";
import PageLayout from "@/components/layout/PageLayout";
import { useProfileContext } from "@/context/ProfileContext";
import pageLocales from "@/constants/locales/page";
const Skills = () => {
  const { language } = useProfileContext();
  return (
    <>
      <WebHeader 
        title={`Thanawut - ${pageLocales[language].skills}`}
        description="This is my skills and proficiencies page"
      />
      <PageLayout title={pageLocales[language].skills} >
        <SkillsBody />
      </PageLayout>
    </>
  )
}

export default Skills