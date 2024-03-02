import styles from "./styles.module.css"
import { FaServer } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdOutlineMonitor } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

const SkillCard = ({ imgSrc, title }: { imgSrc: string, title: string }) => (
  <div className={`py-5 grid justify-center ${styles.skillCard}`}>
    <div className="flex justify-center">
      <img className="" width="80" height="80" src={imgSrc} alt="Icon" />
    </div>
    <div className="font-bold text-center max-md:text-lg text-xl"> {title} </div>
  </div>
)

const Detail = () => {
  return (
    <div className="h-screen grid items-center">
      <div className="container mx-auto grid md:grid-cols-5">
        <div className=""> </div>
        <div 
          className="rounded-xl overflow-y-auto md:max-h-[80vh] md:px-10 px-5 w-full grid justify-self-center md:col-span-4"
          style={{
            background: "rgb(255, 255, 255, 0.2)",
          }}
        >
          <div className="my-5">
            <text className="text-4xl max-md:text-3xl font-bold"> Skills </text>
            <div className="mt-3">
              <div className="flex items-center my-3">
                <MdOutlineMonitor size={30} />
                <text className="ms-2 text-xl"> Front-end development</text>
              </div>
              <div className={`border-2 py-5 max-sm:px-4 md:px-3 lg:px-10 ${styles.skillsGrid}`}>
                <SkillCard imgSrc="images\icons\html5-icon.png" title="HTML" />
                <SkillCard imgSrc="images\icons\css-icon.png" title="CSS" />
                <SkillCard imgSrc="images\icons\react-icon.png" title="React" />
                <SkillCard imgSrc="images\icons\nextjs-icon.png" title="Next.js" />
                <SkillCard imgSrc="images\icons\typescript-icon.png" title="Typescript" />
                <SkillCard imgSrc="images\icons\tailwind-css-icon.png" title="Tailwind CSS" />
                <SkillCard imgSrc="images\icons\vuejs-icon.png" title="Vue.js" />
                <SkillCard imgSrc="images\icons\angular-icon.png" title="Angular" />
                <SkillCard imgSrc="images\icons\bootstrap5-icon.png" title="Bootstrap 5" />
                <SkillCard imgSrc="images\icons\figma-icon.png" title="Figma" />
              </div>
            </div>
            <div className="mt-7">
              <div className="flex items-center my-3">
                <FaServer size={30} />
                <text className="ms-2 text-xl"> Back-end development</text>
              </div>
              <div className={`border-2 py-5 max-sm:px-4 md:px-3 lg:px-10 ${styles.skillsGrid}`}>
                <SkillCard imgSrc="images\icons\nodejs-icon.png" title="Node.js" />
                <SkillCard imgSrc="images\icons\expressjs-icon.png" title="Express.js" />
                <SkillCard imgSrc="images\icons\golang-icon.png" title="Golang" />
                <SkillCard imgSrc="images\icons\mysql-icon.png" title="MySQL" />
                <SkillCard imgSrc="images\icons\postgresql-icon.png" title="PostgreSQL" />
                <SkillCard imgSrc="images\icons\mongodb-icon.png" title="MongoDB" />
              </div>
            </div>
            <div className="mt-7">
              <div className="flex items-center my-3">
                <FaCode size={30} />
                <text className="ms-2 text-xl"> Programming Languages</text>
              </div>
              <div className={`border-2 py-5 max-sm:px-4 md:px-3 lg:px-10 ${styles.skillsGrid}`}>
                <SkillCard imgSrc="images\icons\cpp-icon.png" title="C/C++" />
                <SkillCard imgSrc="images\icons\javascript-icon.png" title="JavaScript" />
                <SkillCard imgSrc="images\icons\python-icon.png" title="Python" />
                <SkillCard imgSrc="images\icons\java-icon.png" title="Java" />
              </div>
            </div>
            <div className="mt-7">
              <div className="flex items-center my-3">
                <IoIosMore size={30} />
                <text className="ms-2 text-xl"> Other Skills</text>
              </div>
              <div className={`border-2 py-5 max-sm:px-4 md:px-3 lg:px-10 ${styles.skillsGrid}`}>
                <SkillCard imgSrc="images\icons\latex-icon.png" title="LaTeX" />
                <SkillCard imgSrc="images\icons\git-icon.png" title="Git Control" />
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
        </div>
      </div>
    </div>
  )
}

export default Detail