import { motion, useAnimation } from "framer-motion"
import { useProfileContext } from "@/context/ProfileContext";
import styles from "./modal.module.css"
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs"
import { IoMdMail } from "react-icons/io"
const variants = {
  visible: { opacity: 1, scale: 1, y: 0 },
  hidden: {
    opacity: 0,
    scale: 0.65,
    y: 50
  }
};

// Animated Scroll
// Ref : 
// https://egghead.io/blog/how-to-animate-elements-when-in-view-on-scroll-with-framer-motion

const Introduction = () => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className="detail-modal-desc">
      <motion.div
        className="border border-white-700"
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={control}
      >
        <div className="min-[768px]:flex w-full">
          <div className="p-10">
            <b className="detail-modal-name text-5xl"> THANAWUT TUAMPRAJAK </b>
            <div className="py-2">
              <div className="text-white ps-2 bg-[#2B2B2B]">
                Student
              </div>
            </div>
            <div className="intoduction">
              <div className="pb-10">
                Greeting. I&apos;m Thanawut Tuamprajak, currently studying in Bachelor&apos;s
                degree in Computer Engineering at Suranaree University of Technology,
                with a focus on becoming a versatile and skilled software engineer and
                full-stack developer.
              </div>

              <div className="pb-10">
                One of my key strengths is my exceptional problem-solving ability.
                I&apos;m also a dedicated learner, constantly seeking opportunities to enhance my knowledge and skills in
                the field of Software engineering.
              </div>

              <div className="">
                I&apos;m a diligent individual who excels in both collaborative team
                environments and working independently. I&apos;m motivated by setting personal goals and
                ensuring their successful completion. Whether collaborating with others or working autonomously,
                I thrive on the satisfaction of achieving my objectives.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

}

const Contacts = () => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });


  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <div className="h-full detail-modal-desc py-5">

      <motion.div
        className="border border-white-700"
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={control}
      >
        <div className="grid">
          <div className="flex justify-center">
            <hr className="title-line-left" />
            <div className="rotate-block me-4" />
            <div className="text-4xl py-5 font-bold">CONTACTS</div>
            <div className="rotate-block ms-4" />
            <hr className="title-line-right" />

          </div>
          <div className="text-center">You can connect with me by these following contacts</div>
          <div className="container grid justify-center py-2">
            <div className="grid  content-center">
              <div className="flex w-2/3 link py-1">
                <div className="px-2 pe-5"> <BsFillTelephoneFill size={33} /> </div>
                <div> +669-9434-5245</div>
              </div>

              <div className="flex w-2/3 link py-1">
                <div className="px-2 pe-5"> <IoMdMail size={33} /> </div>
                <div>  thanawut.tuam@gmail.com</div>
              </div>

              <a href="https://github.com/HanawuZ" rel="noreferrer" target="_blank" className="flex w-2/3 link py-1">
                <div className="px-2 pe-5"> <BsGithub size={33} /> </div>
                <div>  HanawuZ</div>
              </a>

              <a className="flex link py-1" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/thanawut-tuamprajak-479144262/">
                <div className="px-2 pe-5"> <BsLinkedin size={33} /> </div>
                <div> Thanawut Tuamprajak </div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const Interests = () => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const InterestCard = (props: any) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };
    return (
      <>
        <div className=" interest-card max-w-x pb-5 grid"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
          {isHovering ?
            <div className=" fade-in-text flex px-5 mx-3 h-full">
              <div className="self-center text-center"> {props.desc} </div>
            </div>
            :
            <>
              <div className="h-2/3 pt-10 px-10 flex  items-center justify-center ">
                <img
                  className="relative select-none pointer-events-none"
                  src={props.imgSrc}
                  alt=""
                  width={115}
                />
              </div>
              <div className="relative flex justify-center px-6 pb-6 mt-1">
                <div className="text-center mb-2 select-none">{props.title}</div>
              </div>
            </>
          }
        </div>
      </>
    )
  }

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    // else {
    //    control.start("hidden");
    // }
  }, [control, inView]);

  return (
    <div className="detail-modal-desc">

      <motion.div
        className="border border-white-700"
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={control}
      >
        <div className="grid">

          <div className="flex justify-center">
            <hr className="title-line-left" />
            <div className="rotate-block me-4" />
            <div className="text-4xl py-5 font-bold">INTERESTS</div>
            <div className="rotate-block ms-4" />
            <hr className="title-line-right" />

          </div>
          <div className=" py-8 ">
            <div className=" px-5 grid gap-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <InterestCard imgSrc="./icons/icons8-ui-100-white.png"
                title="UI/UX DESIGN"
                desc="I'm using my UX/UI skills to design the Prompt Lab AI website interface with Bootstrap 5." />
              <InterestCard imgSrc="./icons/icons8-fullstack-developer-100-white.png"
                title="FULL-STACK DEVELOPMENT"
                desc="I'm refining my full-stack skills by using them to build my Software Engineering course project's website." />
              <InterestCard imgSrc="./icons/icons8-backend-100-white.png" title="BACKEND DEVELOPMENT"
                desc="I've been acquiring backend skills, such as Gin and Express.js, to develop my backend development skill." />
              <InterestCard imgSrc="./icons/icons8-frontend-white.png" title="FRONTEND DEVELOPMENT"
                desc="I've applied my frontend development skills to create this attractive portfolio website." />
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}


const DetailModal = () => {
  const profileContext = useProfileContext();

  const CloseButton = () => (
    <div className="z-40 fixed flex justify-end w-full p-3">
      <button
        className="close-button bg-transparent  text-2xl"
        onClick={() => profileContext?.setModalShow(false)}
      >
        &#9587;
      </button>
    </div>
  )
  return (
    <>
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.05 } }}
          className="backdrop-blur-md fixed h-full w-full z-30"
        >
          <CloseButton />
          <div id="detail-modal" className="h-screen grid justify-items-center content-center">

            <div className="border w-full container mx-auto">
              <div>
                Hello World
              </div>
              {/* <div className="text-white">
                <Introduction />
              </div> */}
              {/* <div className="py-4 text-white">
                <Contacts />
              </div>
              <div className="py-4 text-white">
                <Interests />
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}


export { DetailModal };
