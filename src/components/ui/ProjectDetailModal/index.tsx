import { useProfileContext } from "@/context/ProfileContext";
import Link from "next/link";
import styles from "./styles.module.css";
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Carousel } from "flowbite-react";
import { CiGlobe } from "react-icons/ci";
import ListItem from "@/components/ui/Listing/ListItem";
import PROJECTS from "@/constants/locales/project";
import Badge from "@/components/Badge";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import wordLocales from "@/constants/locales/word";
import themes from "@/theme";

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
  const { projectKey, language, mode } = useProfileContext();
  const project = PROJECTS[projectKey]?.[language] || {};
  const {
    name,
    role,
    projectUrl,
    githubUrl,
    description,
    techologies,
    imageUrls,
  } = project;
  const backgroundColor = mode === "dark" ? "#2b3137" : "#f9f9f9";

  return (
    <AnimatePresence>
      {projectKey !== "" && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeVariants}
          onClick={(event) => event.stopPropagation()} // Prevent closing when clicking on content
          transition={{ duration: 0.1 }} // Adjust the timing for fade-in/out
          className="backdrop-blur-md fixed top-0 w-full h-full flex justify-center items-center"
          style={{ zIndex: 999 }}
        >
          <motion.div
            variants={fadeVariants}
            transition={{ duration: 0.1 }} // Smooth fade animation
            onClick={(event) => event.stopPropagation()} // Prevent closing when clicking on content
            className={`md:w-[80vw] container mx-auto ${
              styles.projectDetailModal
            } ${
              projectKey === "" && styles.disappearProjectDetailModal
            } shadow-lg`}
          >
            <div className="w-full bg-slate-600 rounded-t-lg py-2 px-3">
              <div className="grid grid-cols-2  text-white">
                <text className="ms-2 text-xl font-bold "> {name} </text>
                <CloseButton className="justify-self-end" />
              </div>
            </div>
            <div
              className="w-full overflow-y-auto grid overflow-x-hidden md:max-h-[86vh] max-h-[90vh] pb-4"
              style={{
                backgroundColor: backgroundColor,
              }}
            >
              <div
                className={`mb-5  md:mx-10 mt-5 ${styles.projectCarouselContainer} `}
              >
                <Carousel
                  className="rounded-lg"
                  // leftControl={
                  //   <FaArrowLeft color="#ececec" size={30}/>
                  // }
                  // rightControl={
                  //   <FaArrowRight color="#ececec" size={30}/>
                  // }
                  leftControl={
                    imageUrls && imageUrls?.length > 1 ? (
                      <FaArrowLeft  size={30} />
                    ) : (
                      <></>
                    )
                  }
                  rightControl={
                    imageUrls && imageUrls?.length > 1 ? (
                      <FaArrowRight size={30} />
                    ) : (
                      <></>
                    )
                  }
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
                <div
                  className="md:py-2 max-lg:text-center lg:ms-12 text-2xl font-bold self-center"
                  style={{
                    color: themes[mode].primaryText,
                  }}
                >
                  {name?.toUpperCase()}
                </div>
                <div className="max-lg:mx-[2rem] lg:hidden my-1">
                  <div className="self-center w-full justify-self-center bg-slate-500 h-[1px]" />
                </div>
                <div
                  className="py-1 max-lg:text-center text-end lg:me-12 max-lg:text-base text-lg self-center"
                  style={{
                    color: themes[mode].secondaryText,
                  }}
                >
                  {role}
                </div>
              </div>
              <div className="lg:mx-[3rem] max-lg:hidden">
                <div className="self-center w-full justify-self-center bg-slate-500 h-[1px]" />
              </div>
              <div className="flex justify-center mx-3 mt-3">
                <div className="flex flex-wrap gap-2 max-md:grid max-sm:grid-cols-2 max-md:grid-cols-3">
                  {techologies?.map((tech, index) => (
                    <Badge key={`id-33-${index}`} {...tech} />
                  ))}
                </div>
              </div>
              <div
                className="flex w-full mt-4 sm:px-5 md:px-10"
                style={{
                  color: themes[mode].secondaryText,
                }}
              >
                <ul className="mx-10 list-disc text-base max-lg:text-sm">
                  {description?.map((desc, index) => (
                    <ListItem
                      className="leading-relaxed tracking-wide break-normal hyphens-auto"
                      key={`id-22-${index}`}
                    >
                      {desc}
                    </ListItem>
                  ))}
                </ul>
              </div>

              <div
                className="max-md:hidden flex justify-end max-md:justify-center my-5 md:mx-10 gap-2 mt-8"
                style={{
                  color: themes[mode].secondaryText,
                }}
              >
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
              <div
                className="md:hidden flex justify-end max-md:justify-center my-5 md:mx-20 gap-2 mt-8"
                style={{
                  color: themes[mode].secondaryText,
                }}
              >
                {githubUrl && (
                  <Link
                    className={`px-2 p-1 flex justify-center ${styles.viewProjectButton}`}
                    href={githubUrl}
                    style={{
                      borderColor: mode === "dark" ? "#f9f9f9" : "#000000",
                      border: "1px solid",
                    }}
                  >
                    <FaGithub size={30} className="text-5xl md:text-4xl" />
                    <text className="ms-2 self-center">
                      {" "}
                      {wordLocales[language].viewCode}
                    </text>
                  </Link>
                )}
                {projectUrl && (
                  <Link
                    className={`px-2 p-1 flex justify-center ${styles.viewProjectButton}`}
                    href={projectUrl}
                    style={{
                      borderColor: mode === "dark" ? "#f9f9f9" : "#000000",
                      border: "1px solid",
                    }}
                  >
                    <CiGlobe size={30} className="self-center" />
                    <text className="ms-2 self-center">
                      {" "}
                      {wordLocales[language].viewProject}
                    </text>
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
