import { useProfileContext } from '@/context/ProfileContext'
import styles from './styles.module.css'
import { motion } from "framer-motion"

const Experiences = () => {
  const { screenWidth } = useProfileContext()
  return (
    <div className="h-screen grid items-center max-md:ms-2 pt-3">
      <div className="container mx-auto grid md:grid-cols-5 lg:grid-cols-4"
        style={{
          zIndex: 1
        }}
      >
        <div className="max-md:h-[10vh]"></div>
        <motion.div
          className={`w-full grid justify-self-center md:col-span-4 lg:col-span-3 border border-slate-700 ${screenWidth > 768 ? styles.experiencePage : ''}`}
          initial={screenWidth > 768 ? {} : { opacity: 0, x: -100 }}
          animate={screenWidth > 768 ? {} : { opacity: 1, x: 0 }}
          exit={screenWidth > 768 ? {} : { opacity: 0, x: 100 }}
          transition={{ type: 'tween', duration: 0.25 }}
        >
          <div
            className="ps-5 text-xl font-bold max-md:text-xl text-white p-2"
            style={{
              background: "rgba(0, 0, 0, 0.35)",
            }}
          > Experiences </div>
          <div className='md:overflow-y-auto md:h-[70vh] md:max-h-[720px] pb-4' style={{ background: "rgb(255, 255, 255, 0.2)", }}>
            <div className="mx-4 md:mx-8 my-4 border border-slate-700">
              <div className="text-xl max-md:text-lg text-white bg-neutral-600 ps-2"> Cooperative Operation </div>
              <div className=' mx-2 mt-2 grid md:grid-cols-2'>
                <text className=""> T.C.C. Technology Co. Ltd, Bangkok, Thailand </text>
                <text className="max-sm:text-sm text-slate-600 md:text-end"> 13<sup>th</sup> November 2023 - 1<sup>st</sup> March 2024 </text>
              </div>
              <ul className="mt-3 list-disc  ps-10 pe-5 mb-4">
                <li>
                  Cooperative operation as Back-end developer.
                </li>
                <li>
                  Develop back-end application for DMS system utilizing Golang with Fiber framework.
                </li>
                <li>
                  Responsible for analyzing, designing, developing and testing back-end system.
                </li>
                <li>
                  Unit test the DMS backend system using Ginkgo library.
                </li>
                <li>
                  Create DMS Web backoffice frontend unit test using Jest and React testing library by implementing BDD practice.
                </li>
              </ul>
            </div>

            <div className="mx-4 md:mx-8 my-4 border border-slate-700">
              <div className="text-xl max-md:text-lg text-white bg-neutral-600 ps-2"> Research Assistant </div>
              <div className='mx-2 mt-2 grid md:grid-cols-2'>
                <text className=""> School of Physics, Suranaree University of Technology, Nakhon Ratchasima, Thailand </text>
                <text className="max-sm:text-sm text-slate-600 md:text-end"> September 2022 – October 2023 </text>
              </div>
              <ul className="mt-3 list-disc  ps-10 pe-5 mb-4">
                <li>
                  Collaborated with Physics associate professor on researching, developing a user-friendly GUI for capillary refill
                  evaluation and visualizing results in line graphs.
                </li>
                <li>
                  Responsible for designing and developing the GUI using python Tkinter.
                </li>
              </ul>
            </div>

            {/* <div className="mx-4 md:mx-8 my-4  h-[30vh] flex items-center justify-center"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
              }}
            >
              <text className='text-2xl text-neutral-400 max-md:text-xl text-center'> Waiting for more experiences.</text>
            </div> */}
          </div>
        </motion.div>
        <div >

        </div>
      </div>
    </div>
  )
}

export default Experiences