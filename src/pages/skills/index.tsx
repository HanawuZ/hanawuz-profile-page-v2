import styles from "./styles.module.css"
import { motion, } from "framer-motion"
import { WebHeader } from "@/components/WebHeader";
import { SkillsBody } from "./components/SkillsBody";

const Skills = () => {
  // const { screenWidth } = useProfileContext()
  return (
    <>
      <WebHeader title="Skills"/>
      <SkillsBody />
    </>
  )
}

export default Skills