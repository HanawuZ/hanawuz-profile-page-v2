import { WebHeader } from "@/components/WebHeader";
import { SkillsBody } from "./components/SkillsBody";
import PageLayout from "@/components/layout/PageLayout";
const Skills = () => {
  return (
    <>
      <WebHeader title="Skills"/>
      <PageLayout title="SKILLS & PROFICIENCIES" >
        <SkillsBody />
      </PageLayout>
    </>
  )
}

export default Skills