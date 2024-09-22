import { useProfileContext } from "@/context/ProfileContext";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { WebHeader } from "@/components/WebHeader";
import { ExperienceBody } from "./components/ExperienceBody";
const Experiences = () => {
  const { screenWidth } = useProfileContext();
  return (
    <>
      <WebHeader title="Thanawut - Experiences" />
      <ExperienceBody />
    </>
  );
};

export default Experiences;
