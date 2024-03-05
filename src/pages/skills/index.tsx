import styles from "./styles.module.css"
import { FaServer } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdOutlineMonitor } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

const SkillCard = ({ imgSrc, title }: { imgSrc: string, title: string }) => (
  <div className={`py-5 grid justify-center ${styles.skillCard}`}>
    <div className="flex justify-center">
      <img className="max-md:p-3" width="80" height="80" src={imgSrc} alt="Icon" />
    </div>
    <div className="font-bold text-center text-sm"> {title} </div>
  </div>
)

const Detail = () => {
  return (
    <div className="h-screen grid items-center max-md:ms-2">
      <div className="container mx-auto grid md:grid-cols-5 lg:grid-cols-4"
        style={{
          zIndex: 1
        }}
      >
        <div className="max-md:h-[10vh]"></div>
        <div className={`w-full grid justify-self-center md:col-span-4 lg:col-span-3 border border-slate-700 ${styles.skillsPage}`}>
          <div
            className="ps-5 text-xl font-bold text-white p-2"
            style={{
              background: "rgba(0, 0, 0, 0.35)",
            }}
          > Skills </div>
          <div className='md:overflow-y-auto md:h-[70vh] md:max-h-[720px] pb-4' style={{ background: "rgb(255, 255, 255, 0.2)", }}>
            <div className="mt-3 mx-8">
              <div className="flex items-center my-3">
                <MdOutlineMonitor size={30} />
                <text className="ms-2 text-md"> Front-end development</text>
              </div>
              
              <div className={`border-2 border-slate-300 py-3 max-sm:px-4 md:px-3 lg:px-10 ${styles.skillsGrid}`}>
                <SkillCard imgSrc="images\icons\html5-icon.png" title="HTML" />
                <SkillCard imgSrc="images\icons\css-icon.png" title="CSS" />
                <SkillCard imgSrc="images\icons\react-icon.png" title="React" />
                <SkillCard imgSrc="images\icons\nextjs-icon.png" title="Next.js" />
                <SkillCard imgSrc="images\icons\typescript-icon.png" title="Typescript" />
                <SkillCard imgSrc="images\icons\tailwind-css-icon.png" title="Tailwind" />
                <SkillCard imgSrc="images\icons\vuejs-icon.png" title="Vue.js" />
                <SkillCard imgSrc="images\icons\angular-icon.png" title="Angular" />
                <SkillCard imgSrc="images\icons\bootstrap5-icon.png" title="Bootstrap 5" />
                <SkillCard imgSrc="images\icons\figma-icon.png" title="Figma" />
              </div>
            </div>
            <div className="mt-7 mx-8">
              <div className="flex items-center my-3">
                <FaServer size={30} />
                <text className="ms-2 text-lg"> Back-end development</text>
              </div>
              <div className={`border-2 border-slate-300 py-5 max-sm:px-4 md:px-3 lg:px-10 ${styles.skillsGrid}`}>
                <SkillCard imgSrc="images\icons\nodejs-icon.png" title="Node.js" />
                <SkillCard imgSrc="images\icons\expressjs-icon.png" title="Express.js" />
                <SkillCard imgSrc="images\icons\golang-icon.png" title="Golang" />
                <SkillCard imgSrc="images\icons\mysql-icon.png" title="MySQL" />
                <SkillCard imgSrc="images\icons\postgresql-icon.png" title="PostgreSQL" />
                <SkillCard imgSrc="images\icons\mongodb-icon.png" title="MongoDB" />
              </div>
            </div>
            <div className="mt-7 mx-8">
              <div className="flex items-center my-3">
                <FaCode size={30} />
                <text className="ms-2 text-lg"> Programming Languages</text>
              </div>
              <div className={`border-2 border-slate-300 py-5 max-sm:px-4 md:px-3 lg:px-10 ${styles.skillsGrid}`}>
                <SkillCard imgSrc="images\icons\cpp-icon.png" title="C/C++" />
                <SkillCard imgSrc="images\icons\javascript-icon.png" title="JavaScript" />
                <SkillCard imgSrc="images\icons\python-icon.png" title="Python" />
                <SkillCard imgSrc="images\icons\java-icon.png" title="Java" />
              </div>
            </div>
            <div className="mt-7 mx-8">
              <div className="flex items-center my-3">
                <IoIosMore size={30} />
                <text className="ms-2 text-lg"> Other Skills</text>
              </div>
              <div className={`border-2 border-slate-300 py-5 max-sm:px-4 md:px-3 lg:px-10 ${styles.skillsGrid}`}>
                <SkillCard imgSrc="images\icons\latex-icon.png" title="LaTeX" />
                <SkillCard imgSrc="images\icons\git-icon.png" title="Git Control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail