import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useProfileContext } from "@/context/ProfileContext";
import styles from "./styles.module.css";
import { motion } from "framer-motion"
import Head from 'next/head'

const Acknowledgement = () => {
  const { screenWidth } = useProfileContext()
  return (
    <>
      <Head>
        <title>Thanawut - Acknowledgement</title>
      </Head>
      <div className="h-screen grid items-center max-md:mx-2 pt-3 max-md:ps-2">
        {/* <div className="container mx-auto grid md:grid-cols-5 lg:grid-cols-4" style={{ zIndex: 1 }}>
          <div className="max-md:h-[10vh]"></div>
          <motion.div
            className={`w-full grid justify-self-center md:col-span-4 lg:col-span-3 border border-slate-700 ${screenWidth > 768 ? styles.acknowledgementPage : ''}`}
            initial={screenWidth > 768 ? {} : { opacity: 0, x: -100 }}
            animate={screenWidth > 768 ? {} : { opacity: 1, x: 0 }}
            exit={screenWidth > 768 ? {} : { opacity: 0, x: 100 }}
            transition={{ type: 'tween', duration: 0.25 }}
          >
            <div
              className="ps-5 text-xl max-md:text-xl font-bold max-md:text-xl text-white p-2"
              style={{
                background: "rgba(0, 0, 0, 0.35)",
              }}
            > Acknowledgements </div>
            <div className='md:overflow-y-auto md:h-[70vh] md:max-h-[720px] pb-4' style={{ background: "rgb(255, 255, 255, 0.5)", }}>
              <div className="mt-3">
                <div className="grid p-5">
                  <FaQuoteLeft color="#7e7e7e" size={20} />
                  <p className="text-center text-md md:mx-14">
                  🌟 Special Thanks - I would like to take a moment to express my heartfelt gratitude to all those who have contributed, inspired, or supported me along the journey. Your encouragement, feedback, and shared enthusiasm have been invaluable.
                   Many thanks to my mentor for their invaluable guidance and feedback throughout this journey. Lastly, thank you to my family for believing in me, even when I doubted myself.
                  </p>
                  <div className="flex justify-end">
                    <FaQuoteRight color="#7e7e7e" size={20} />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end pt-4 pe-10">
                <div className="text-center">
                  <div className="text-lg"> Thanawut Tuamprajak </div>
                  <text className="">Best sincerely </text>
                </div>
              </div>
            </div>
          </motion.div>
        </div> */}
      </div>
    </>
  )
}

export default Acknowledgement