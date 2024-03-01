import styles from "./styles.module.css"

const Detail = () => {
  return (
    <div className="h-screen grid items-center">
      <div className="border border-sky-500 container mx-auto grid md:grid-cols-6">
        <div className="border border-cyan-500"> Sidebar </div>
        <div className="overflow-y-auto md:max-h-[80vh] md:px-10 px-5 border border-slate-700 w-full grid justify-self-center md:col-span-5">
          <div className="my-5">
            <text className="text-3xl"> Skills </text>
            <div className="border md:px-2 py-10 mt-3  gap-y-3 grid lg:grid-cols-3 md:grid-cols-2">
              <div className={`py-12 border border-blue-500 grid justify-center ${styles.skillCard}`}>
                <img width="96" height="96" src="https://img.icons8.com/color/96/python--v1.png" alt="python--v1" />
                <div className="border text-center text-xl"> Grid </div>
              </div>
              <div className={`py-12 border border-blue-500 grid justify-center ${styles.skillCard}`}>
                <img width="96" height="96" src="https://img.icons8.com/color/96/python--v1.png" alt="python--v1" />
                <div className="border text-center text-xl"> Grid </div>
              </div>
              <div className={`py-12 border border-blue-500 grid justify-center ${styles.skillCard}`}>
                <img width="96" height="96" src="https://img.icons8.com/color/96/python--v1.png" alt="python--v1" />
                <div className="border text-center text-xl"> Grid </div>
              </div>
              
            </div>
            {/* 
            <div className="mt-3">
              <text className="text-xl"> Front-end development</text>
              <div className="ml-5">
                <ul className="list-disc text-lg">
                  <li> Experienced in UI development using popular front-end frameworks such as React, Angular, Vue, and Next.js. </li>
                  <li> Skilled in designing intuitive UI/UX experiences using Figma. </li>
                </ul>
              </div>
            </div>

            <div className="mt-3">
              <text className="text-xl"> Back-end development</text>
              <div className="ml-5">
                <ul className="list-disc text-lg">
                  <li> Proficient in analyzing user requirements and designing APIs.</li>
                  <li>
                    Skilled in developing server-side applications using Golang with Gin and Fiber framework, Node.js with Express.js,
                    and Java Spring Boot.
                  </li>
                  <li>
                    Experienced in database design, including NoSQL databases like MongoDB and SQL databases such as MySQL,
                    PostgreSQL, and SQLite
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-3">
              <text className="text-xl"> Software Testing</text>
              <div className="ml-5">
                <ul className="list-disc text-lg">
                  <li>
                    Familiar with designing test codes by utilizing behavior driven development process.
                  </li>
                  <li>
                    Experience in providing unit test to DMS backend system and integration test to back-office website.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-3">
              <text className="text-xl"> Problem-solving-skills </text>
              <div className="ml-5">
                <ul className="list-disc text-lg">
                  <li> I am proficient in applying problem–solving skills to address complex challenges. Notable experience includes analyzing and designing the logic for the promotion system in DMS (Distribution Management System).</li>
                </ul>

              </div>
            </div> 
            */}
          </div>

          {/* <div className="my-5">
            <text className="text-3xl"> Work Experiences</text>
            <div className="mt-3">
              <div className="border border-slate-700">
                <div className="flex justify-between">
                  <text className="text-xl"> Cooperative Operation </text>
                  <text className="text-xl text-slate-600"> 13<sup>th</sup> November 2023 -- 1<sup>st</sup> March 2024 </text>
                </div>
                <text className="text-lg"> T.C.C. Technology Co. Ltd, Bangkok, Thailand </text>
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
                </ul>
              </div>
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
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Detail