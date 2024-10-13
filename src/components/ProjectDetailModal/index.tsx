import { useProfileContext } from "@/context/ProfileContext";
import Link from "next/link";
import styles from "./styles.module.css";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { Carousel } from "flowbite-react";
import { CiGlobe } from "react-icons/ci";
import ListItem from "@/components/Listing/ListItem";
import PROJECTS from "@/constants/locales/project";
import Badge from "../Badge";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
const CloseButton = ({ className }: { className?: string }) => {
  const { setProjectKey } = useProfileContext();

  const closeProjectModal = () => {
    setProjectKey("");
  };

  return (
    <button className={className} onClick={closeProjectModal}>
      &#9587;
    </button>
  );
};

const fadeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

const ProjectDetailModal = () => {
  const { projectKey, language } = useProfileContext();
  const project = PROJECTS[projectKey] || {};
  const {
    name,
    role,
    projectUrl,
    githubUrl,
    description,
    techologies,
    imageUrls,
  } = project[language] ? project[language] : {};
  return (
    <AnimatePresence>
      {projectKey !== "" && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeVariants}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on content
          transition={{ duration: 0.1 }} // Adjust the timing for fade-in/out
          className="backdrop-blur-md fixed top-0 w-full h-full flex justify-center items-center"
          style={{ zIndex: 999 }}
        >
          <motion.div
            variants={fadeVariants}
            transition={{ duration: 0.1 }} // Smooth fade animation
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on content
            className={`md:w-[70vw] container mx-auto ${
              styles.projectDetailModal
            } ${projectKey === "" && styles.disappearProjectDetailModal}`}
          >
            <div className="w-full bg-slate-600 rounded-t-lg py-2 px-3">
              <div className="grid grid-cols-2">
                <text className="ms-2 text-white"> {name} </text>
                <CloseButton className="justify-self-end text-white" />
              </div>
            </div>
            <div className="w-full overflow-y-auto grid overflow-x-hidden bg-white md:max-h-[86vh] max-h-[90vh] pb-4">
              <div
                className={`mb-5  md:mx-10 mt-5 ${styles.projectCarouselContainer} `}
              >
                <Carousel
                  className="rounded-lg"
                  leftControl={<div className="text-3xl"> &#60; </div>}
                  rightControl={<div className="text-3xl"> &#62; </div>}
                  slideInterval={5000}
                  indicators={false}
                >
                  {imageUrls?.map((url, index) => (
                    <img
                      key={index}
                      className="object-cover overflow-y-hidden h-full"
                      src={url}
                      alt={name}
                      style={{ borderRadius: "10px" }}
                    />
                  ))}
                </Carousel>
              </div>
              <div className="w-full grid lg:grid-cols-2">
                <div className="md:py-2 max-lg:text-center lg:ms-12 text-2xl font-bold self-center">
                  {name?.toUpperCase()}
                </div>
                <div className="max-lg:mx-[2rem] lg:hidden">
                  <div className="self-center w-full justify-self-center bg-slate-500 h-[1.25px]" />
                </div>
                <div className="py-1 max-lg:text-center text-end lg:me-12 max-lg:text-base text-lg self-center">
                  {role}
                </div>
              </div>
              <div className="lg:mx-[3rem] max-lg:hidden">
                <div className="self-center w-full justify-self-center bg-slate-500 h-[1.25px]" />
              </div>
              <div className="flex justify-center mx-3 mt-3">
                <div className="flex flex-wrap gap-2 max-md:grid max-sm:grid-cols-2 max-md:grid-cols-3">
                  {techologies?.map((tech, index) => (
                    <Badge key={`id-33-${index}`} {...tech} />
                  ))}
                </div>
              </div>
              <div className="flex justify-center w-full">
                <ul className="mt-4 mx-10 list-disc text-base max-lg:text-sm ">
                  {description?.map((desc, index) => (
                    <ListItem
                      className="break-normal hyphens-auto"
                      key={`id-22-${index}`}
                    >
                      {desc}
                    </ListItem>
                  ))}
                </ul>
              </div>

              <div className="max-md:hidden flex justify-end max-md:justify-center my-5 md:mx-10 gap-2">
                {githubUrl && (
                  <Link className={styles.icon} href={githubUrl}>
                    <FaGithub className="text-5xl md:text-4xl" />
                  </Link>
                )}
                {projectUrl && (
                  <Link className={styles.icon} href={projectUrl}>
                    <CiGlobe className="text-5xl md:text-4xl" />
                  </Link>
                )}
              </div>
              <div className="md:hidden flex justify-end max-md:justify-center my-5 md:mx-20 gap-2">
                {githubUrl && (
                  <Link
                    className={`px-2 p-1 flex justify-center ${styles.viewProjectButton}`}
                    href={githubUrl}
                  >
                    <FaGithub size={30} className="text-5xl md:text-4xl" />
                    <text className="ms-2 self-center"> View code</text>
                  </Link>
                )}
                {projectUrl && (
                  <Link
                    className={`px-2 p-1 flex justify-center ${styles.viewProjectButton}`}
                    href={projectUrl}
                  >
                    <CiGlobe size={30} className="self-center" />
                    <text className="ms-2 self-center"> View project</text>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { ProjectDetailModal };
