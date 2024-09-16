import { useProfileContext } from "@/context/ProfileContext";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import Head from "next/head";
import { ExperienceHeader } from "./components/ExperienceHeader";
import { ExperienceBody } from "./components/ExperienceBody";
const Experiences = () => {
  const { screenWidth } = useProfileContext();
  return (
    <div>
      <ExperienceHeader title="Experiences" />
      <ExperienceBody />
      {/* <div className="h-screen grid items-center pt-3">
        <div
          className="container mx-auto grid md:grid-cols-5 lg:grid-cols-4 pb-12"
          style={{
            zIndex: 1,
          }}
        >
          <div></div>
          <motion.div
            className={`w-full grid justify-self-center md:col-span-4 lg:col-span-3 ${
              screenWidth > 768 ? styles.experiencePage : ""
            }`}
            initial={screenWidth > 768 ? {} : { opacity: 0, x: -100 }}
            animate={screenWidth > 768 ? {} : { opacity: 1, x: 0 }}
            exit={screenWidth > 768 ? {} : { opacity: 0, x: 100 }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            <div className="ps-1 text-xl font-bold max-md:text-xl p-2">
              {" "}
              Experiences
            </div>
            <div className='md:overflow-y-auto md:h-[70vh] md:max-h-[720px] pb-4'>
            </div>
          </motion.div>
        </div>
      </div> */}
    </div>
  );
};

export default Experiences;
