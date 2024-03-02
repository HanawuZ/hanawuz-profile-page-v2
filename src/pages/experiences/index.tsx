import styles from './styles.module.css'

// TODO fixed
const Experiences = () => {
  return (
    <div className="h-screen grid items-center">
      <div className="container mx-auto grid md:grid-cols-5">
        <div className=""> </div>
        <div className="overflow-y-auto md:max-h-[80vh] md:px-10 px-5 border border-slate-700 w-full grid justify-self-center md:col-span-4">
          <div className="my-5">
            <text className="text-3xl"> Experiences </text>
            <div className="mt-3 grid gap-y-5">
              <div className="border border-slate-700">
                <div className="text-2xl max-md:text-xl text-white bg-neutral-600 ps-2"> Cooperative Operation </div>
                <div className='border mx-2 grid md:grid-cols-2'>
                  <text className="text-lg"> T.C.C. Technology Co. Ltd, Bangkok, Thailand </text>
                  <text className="max-sm:text-sm text-lg text-slate-600 md:text-end"> 13<sup>th</sup> November 2023 -- 1<sup>st</sup> March 2024 </text>
                </div>
                <ul className="list-disc text-lg ps-10 text-justify pe-5">
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

              <div className="border border-slate-700">
                <div className="text-2xl max-md:text-xl text-white bg-neutral-600 ps-2"> Research Assistant </div>
                <div className='border mx-2 grid md:grid-cols-2'>
                  <text className="text-lg"> School of Physics, Suranaree University of Technology, Nakhon Ratchasima, Thailand </text>
                  <text className="max-sm:text-sm text-lg text-slate-600 md:text-end"> September 2022 –- October 2023 </text>
                </div>
                <ul className="list-disc text-lg ps-10 text-justify pe-5">
                  <li>
                    Collaborated with Physics associate professor on researching, developing a user-friendly GUI for capillary refill
                    evaluation and visualizing results in line graphs.
                  </li>
                  <li>
                    Responsible for designing and developing the GUI using python Tkinter.
                  </li>
                </ul>
              </div>


              {/* <div className="grid md:grid-cols-2 justify-between">
                  <text className="max-sm:text-sm text-lg text-slate-600"> 13<sup>th</sup> November 2023 -- 1<sup>st</sup> March 2024 </text>
                </div> */}
              {/* <text className="text-lg"> T.C.C. Technology Co. Ltd, Bangkok, Thailand </text>
                <ul className="list-disc text-lg ml-5 text-justify">
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
                </ul> */}
              {/* 
              <div className="border border-slate-700 mt-5">
                <div className="flex justify-between">
                  <text className="text-xl"> Research Assistant</text>
                  <text className="text-xl text-slate-600">September 2022 –- October 2023</text>
                </div>
                <text className="text-lg"> School of Physics, Suranaree University of Technology, Nakhon Ratchasima, Thailand </text>
                <ul className="list-disc text-lg ml-5 text-justify">
                  <li>
                    Collaborated with Physics associate professor on researching, developing a user-friendly GUI for capillary refill
                    evaluation and visualizing results in line graphs.
                  </li>
                  <li>
                    Responsible for designing and developing the GUI using python Tkinter.
                  </li>
                </ul>
              </div> 
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences