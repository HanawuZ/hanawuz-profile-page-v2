import { MdEmail } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaPhoneAlt,
  FaBirthdayCake,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { WebHeader } from "@/components/WebHeader";
import Badge from "@/components/Badge";
import ListItem from "@/components/ui/Listing/ListItem";
import calculateAge from "@/utils/ageCalculator";
import PageLayout from "@/components/layout/PageLayout";
import { useProfileContext } from "@/context/ProfileContext";
import { aboutMeList } from "@/constants/locales/aboutMe/list";
import { education } from "@/constants/locales/aboutMe/education";
import { aboutMe } from "@/constants/locales/aboutMe";
import wordLocales from "@/constants/locales/word";
import themes from "@/theme";
import styles from "./styles.module.css";
import { MdOutlineDownload } from "react-icons/md";
import { FaUserClock } from "react-icons/fa6";

/**
 * The homepage of the website, rendering the main components of the website,
 * including the web header, personal information section, about me section,
 * education section, and a call-to-action section to contact the author.
 *
 * @returns {React.ReactElement} The JSX element representing the homepage.
 */
const Home = (): React.ReactElement => {
  return (
    <>
      <WebHeader title="Thanawut - My website" />
      <PageLayout title="THANAWUT TUAMPRAJAK">
        {/* <ImageSection /> */}
        <PersonalInfoSection />
        <AboutMeSection />
        <EducationSection />
        <LetsConnect />
      </PageLayout>
    </>
  );
};

const ImageSection = () => (
  <div className="items-center grid p-3 justify-items-center z-[2]">
    <Image src="/images/me/me-1.png" alt="image" width={300} height={300} />
  </div>
);

const PersonalInfoSection = () => {
  const { language, mode } = useProfileContext();
  return (
    <div
      id="personal-info-section"
      style={{
        color: themes[mode].primaryText,
      }}
    >
      <div className="max-md:text-sm mt-5 max-sm:mx-6 mx-8 break-all">
        <div className="flex flex-wrap gap-2 mt-2 w-full justify-center">
          <div className="flex items-center gap-3 p-1 px-3">
            <FaPhoneAlt size={20} />
            +66 99 434 5245
          </div>
          <div className="flex items-center gap-3 p-1 px-3">
            <FaBirthdayCake size={20} />
            <text> {aboutMe[language].birthDate}</text>
          </div>
          <div className="flex items-center gap-3 p-1 px-3">
            <FaUserClock size={20} />
            {calculateAge(new Date(2000, 11, 10))} {aboutMe[language].ageUnit}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <button
          className={`px-2 p-1 flex gap-2 items-center ${styles.downloadButton} opacity-40 pointer-events-none`}
          style={{
            borderColor: mode === "dark" ? "#f9f9f9" : "#000000",
            border: "1px solid",
            borderRadius: "2rem",
            transition: "all 0.15s ease-in-out",
          }}
        >
          <MdOutlineDownload size={20} />
          {language === "th" ? "CV ยังเขียนไม่เสร็จจ้า" : "CV not finished yet"}
        </button>
      </div>
    </div>
  );
};

const AboutMeSection = () => {
  const { language, mode } = useProfileContext();

  return (
    <div
      id="about-me"
      className="mt-8"
      style={{
        color: themes[mode].primaryText,
      }}
    >
      <div className="max-sm:ms-5 ms-8">
        <span className="uppercase font-bold text-2xl">
          {" "}
          {aboutMeList[language].title}{" "}
        </span>
        <div
          className="h-[3.5px] w-1/6 mt-1"
          style={{ background: mode === "dark" ? "#FFFFFF" : "#000000" }}
        />
      </div>
      <ul className="tracking-wide mt-3 list-disc mx-8 break-normal hyphens-auto sm:ms-16 ms-12">
        {language === "en" && (
          <>
            <ListItem className="leading-relaxed">
              Greeting visitors! I am &quot;Gop&quot;, currently working as{" "}
              <code
                className="p-[3px] rounded text-slate-600"
                style={{
                  background: mode === "dark" ? "#4e4e4e" : "#ececec",
                  color: themes[mode].primaryText,
                }}
              >
                Application Developer
              </code>{" "}
              at{" "}
              <Link
                className="text-blue-500 font-bold underline underline-offset-2 hover:text-blue-300"
                href="https://www.tcc-technology.com"
                style={{
                  transition: "all 0.15s",
                }}
              >
                T.C.C. Technology Co., Ltd.
              </Link>
            </ListItem>
            <ListItem className="leading-relaxed">
              I have 1 year experience in maintaining e-commerce 
              platform for wholesale and retail distribution of food and beverage products.
              My role mainly focused on refining for promotion calculation, sale target
              management, and warehousing.
            </ListItem>
            <ListItem className="leading-relaxed">
              Have a strong background in both front-end and back-end
              development. I am presently deep diving into back-end development
              by coding ♨️{" "}
              <text className="font-bold" style={{ color: "#ED8B00" }}>
                Java Spring Boot
              </text>{" "}
              and{" "}
              <text className="font-bold" style={{ color: "#00ADD8" }}>
                Golang
              </text>{" "}
              with widely-used web frameworks. Moreover, I am learning software
              development practices like Clean architecture, React design
              patterns and Behavior-driven development.
            </ListItem>
          </>
        )}
        {language === "th" && (
          <>
            <ListItem className="leading-relaxed">
              สวัสดีครับทุกคน ผมชื่อ &quot;ก๊อป&quot; ครับ
              ปัจจุบันทำงานในตำแหน่ง{" "}
              <code
                className="p-[3px] rounded text-slate-600"
                style={{
                  background: mode === "dark" ? "#4e4e4e" : "#ececec",
                  color: themes[mode].primaryText,
                }}
              >
                ผู้ช่วยนักพัฒนาแอพพลิเคชัน
              </code>{" "}
              ที่บริษัท{" "}
              <Link
                className="text-blue-500 font-bold underline underline-offset-2 hover:text-blue-300"
                href="https://www.tcc-technology.com"
                style={{
                  transition: "all 0.15s",
                }}
              >
                T.C.C. Technology Co., Ltd.
              </Link>
            </ListItem>
            <ListItem className="leading-relaxed">
              มีประสบการณ์ 1 ปีในการช่วยดูแลระบบ
              <text className="font-bold">
                {" "}
                จัดการการกระจายสินค้า &#40;DMS&#41;{" "}
              </text>
              โดยรับหน้าที่ในการปรับปรุงระบบคำนวนโปรโมชัน
              จัดการเป้ายอดขายของร้านค้า และจัดการสินค้าคงคลัง
            </ListItem>
            <ListItem className="leading-relaxed">
              สามารถเขียนโค๊ดแบบ Full stack ได้ ก็คือเขียนได้ทั้งหน้าบ้าน
              &#40;Frontend&#41; และหลังบ้าน &#40;Backend&#41; โดยฝั่ง Frontend
              จะเขียน <strong style={{ color: "#88dded" }}>React</strong>{" "}
              เป็นหลัก ส่วน Backend คุ้นเคยกับการเขียน
              <span className="font-bold" style={{ color: "#00ADD8" }}>
                {" "}
                ภาษา Go
              </span>{" "}
              ตอนนี้กำลังลงลึกการพัฒนา Backend ด้วย{" "}
              <text className="font-bold" style={{ color: "#8BC34A" }}>
                Java Spring Boot
              </text>{" "}
              นอกจากนี้กำลังศึกษาและนำแนวทางปฏิบัติเพิ่มเติมเกี่ยวกับการพัฒนาซอฟต์แวร์มาใช้ระหว่างทำงานด้วย
              เช่น Clean Architecture, React Design Patterns และ Behavior-driven
              Development.
            </ListItem>
          </>
        )}
        <ListItem className="leading-relaxed">
          💤 {aboutMeList[language].sleep}
        </ListItem>
      </ul>
    </div>
  );
};

const EducationSection = () => {
  const { language, mode } = useProfileContext();
  return (
    <div
      id="education-info-section"
      className="mt-12"
      style={{
        color: themes[mode].primaryText,
      }}
    >
      <div className="max-sm:ms-5 ms-8">
        <span className="uppercase font-bold text-2xl">
          {" "}
          {education[language].title}{" "}
        </span>
        <div
          className="h-[3.5px] w-1/6 mt-1"
          style={{ background: mode === "dark" ? "#FFFFFF" : "#000000" }}
        />
      </div>
      <div className="tracking-wide mt-5 max-sm:mx-6 mx-8 break-normal hyphens-auto">
        {language === "en" && (
          <div className="leading-relaxed">
            I graduated from{" "}
            <text className={styles.gradientText}>
              {education[language].university}
            </text>{" "}
            with
            <text
              style={{ fontStyle: "italic", color: themes[mode].secondaryText }}
            >
              {" "}
              Bachelor&#39;s degree in Computer Engineering
            </text>
            , completing my studies in{" "}
            <text> {education[language].graduatedDate}.</text>
          </div>
        )}
        {language === "th" && (
          <div className="leading-relaxed">
            จบการศึกษาในระดับ{" "}
            <text
              className="italic"
              style={{ color: themes[mode].secondaryText }}
            >
              {education[language].degree}, {education[language].major}
            </text>{" "}
            จาก{" "}
            <text className={styles.gradientText}>
              {" "}
              {education[language].university}{" "}
            </text>
            เมื่อเดิอน <text> {education[language].graduatedDate} </text>
          </div>
        )}
      </div>

      <div className="tracking-wide  mt-5 max-sm:mx-6 mx-8 break-normal hyphens-auto">
        <text className="font-bold">
          {education[language].relevantCourse.title}:
        </text>
        <ul className=" list-disc max-sm:mx-6 mx-8">
          {education[language].relevantCourse.list?.map((course, index) => {
            return (
              <ListItem
                key={index}
                className="break-normal hyphens-auto leading-relaxed"
              >
                <text className="italic me-1" lang="en">
                  {course?.name}&#58;{" "}
                </text>
                {course?.description}
              </ListItem>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const LetsConnect = () => {
  const { language, mode } = useProfileContext();
  return (
    <div
      className="mt-12"
      id="lets-connect"
      style={{
        color: themes[mode].primaryText,
      }}
    >
      <div className="max-sm:ms-5 ms-8">
        <span className="uppercase font-bold text-2xl">
          {" "}
          {wordLocales[language].letConnect}{" "}
        </span>
        <div
          className="h-[3.5px] w-1/6 mt-1"
          style={{ background: mode === "dark" ? "#FFFFFF" : "#000000" }}
        />
      </div>
      <div className="flex justify-center m-5 mt-8">
        <div className="grid gap-3 max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3">
          <Badge
            icon={<FaGithub color="#FFFFFF" size={24} />}
            title="HanawuZ"
            backgroundColor="#2b3137"
            textColor="#FFFFFF"
            link="https://github.com/HanawuZ"
            border="none"
          />
          <Badge
            icon={<FaLinkedin color="#FFFFFF" size={24} />}
            title="Thanawut Tuamprajak"
            backgroundColor="#0077B5"
            textColor="#FFFFFF"
            link="https://linkedin.com/in/thanawut-tuamprajak-479144262"
            border="none"
          />
          <Badge
            icon={<MdEmail color="#FFFFFF" size={24} />}
            backgroundColor="#d44638"
            textColor="#FFFFFF"
            title="thanawut.tuam@gmail.com"
            link="mailto:thanawut.tuam@gmail.com"
            border="none"
          />
          <Badge
            icon={<FaMedium color="#FFFFFF" size={24} />}
            title="Thanawut Tuamprajak"
            backgroundColor="#24292e"
            textColor="#FFFFFF"
            border="none"
            link="https://medium.com/@thanawut.tuam"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
