import { WebHeader } from "@/components/WebHeader";
import { SkillsBody } from "./components/SkillsBody";
import PageLayout from "@/components/layout/PageLayout";
const Skills = () => {
  return (
    <>
      <WebHeader 
        title="Thanawut - Skills & Proficiencies"
        description="This is my skills and proficiencies page"
      />
      <PageLayout title="SKILLS & PROFICIENCIES" >
        <SkillsBody />
      </PageLayout>
    </>
  )
}

export default Skills