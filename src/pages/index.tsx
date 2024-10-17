import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { WebHeader } from "@/components/WebHeader";
import Badge from "@/components/Badge";
import ListItem from "@/components/Listing/ListItem";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import calculateAge from "@/utils/ageCalculator";
import { MdSchool } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import PageLayout from "@/components/layout/PageLayout";
import { useProfileContext } from "@/context/ProfileContext";
import { aboutMeList } from "@/constants/locales/aboutMe/list";
import { education } from "@/constants/locales/aboutMe/education";
import { aboutMe } from "@/constants/locales/aboutMe";
import wordLocales from "@/constants/locales/word";
import { AiOutlineGlobal } from "react-icons/ai";
import themes from "@/theme";

const Home = () => {
  return (
    <>
      <WebHeader title="Thanawut - My website" />
      <PageLayout title="THANAWUT TUAMPRAJAK">
        <ImageSection />
        <PersonalInfoSection />
        <OverviewSection />
        <AboutMeSection />
        <EducationSection />
        <LetsConnect />
      </PageLayout>
    </>
  );
};

const ImageSection = () => (
  <div className="items-center grid p-3 justify-items-center z-[2]">
    <Image
      src="/images/me/me-1.png"
      alt="image"
      width={300}
      height={300}
    />
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
      <div className="max-md:text-sm mt-5 max-sm:mx-6 mx-10 break-all">
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
            <span> {aboutMe[language].age}: </span>
            {calculateAge(new Date(2000, 11, 10))} {aboutMe[language].ageUnit}
          </div>
        </div>
      </div>
    </div>
  );
};

const OverviewSection = () => {
  const { language, mode } = useProfileContext();
  return (
    <div
      id="overview-section"
      style={{
        color: themes[mode].primaryText,
      }}
    >
      <p className="max-md:text-sm mt-8 max-sm:mx-6 mx-12 break-normal hyphens-auto">
        {aboutMe[language].overview}
      </p>
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
      <div className="font-bold flex gap-3 text-2xl text-center font-bold max-sm:ms-5 ms-8">
        <FaRegSmile size={30} />
        <span className="uppercase"> {aboutMeList[language].title} </span>
      </div>
      <ul className="max-md:text-sm mt-3 list-disc mx-10 break-all sm:ms-16 ms-12">
        <ListItem className="break-normal hyphens-auto">
          👷‍♂️ {aboutMeList[language].presentJob}{" "}
          <Link
            className="text-blue-500 underline underline-offset-2 hover:text-blue-300"
            href="https://www.tcc-technology.com"
            style={{
              transition: "all 0.15s",
            }}
          >
            T.C.C. Technology Co., Ltd.
          </Link>
        </ListItem>
        <ListItem className="break-normal hyphens-auto">
          {aboutMeList[language].doing}
        </ListItem>
        <ListItem className="break-normal hyphens-auto">
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
      className="mt-8"
      style={{
        color: themes[mode].primaryText,
      }}
    >
      <div className="font-bold flex gap-3 text-2xl text-center font-bold max-sm:ms-5 ms-8">
        <MdSchool size={30} />
        <span className="uppercase "> {education[language].title} </span>
      </div>
      <div className="max-md:text-sm mt-3 max-sm:mx-6 mx-12 break-all">
        <div className="lg:flex max-md:mx-2 mt-2">
          <div className="w-full">
            <div className="font-bold">{education[language].university}</div>
            <div
              className="italic flex flex-wrap"
              style={{
                color: themes[mode].secondaryText,
              }}
            >
              <div> {education[language].degree} </div>
              <div>
                {" "}
                <span>, </span>
                {education[language].major}{" "}
              </div>
            </div>
          </div>
          <div className="w-full lg:text-end max-lg:mt-2">
            <div> {education[language].location} </div>
            <div> {education[language].graduatedDate} </div>
          </div>
        </div>
      </div>

      <div className="max-md:text-sm mt-5 max-sm:mx-6 mx-12 break-all">
        <text className="max-md:text-sm font-bold max-md:ms-2">
          {education[language].relevantCourse.title}:
        </text>
        <ul className="max-md:text-sm list-disc mx-10 break-all">
          {education[language].relevantCourse.list?.map((course, index) => {
            return (
              <ListItem key={index} className="break-normal hyphens-auto">
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
    <div className="mt-10" id="lets-connect">
      <div 
        className="font-bold flex gap-3 text-2xl text-center font-bold max-sm:ms-5 ms-8"
        style={{
          color: themes[mode].primaryText,
        }}
      >
        <AiOutlineGlobal size={30} />
        <span className="uppercase">{wordLocales[language].letConnect}</span>
      </div>
      <div className="flex justify-center m-5">
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
