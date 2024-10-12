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

const Home = () => {
  return (
    <>
      <WebHeader title="Thanawut - My website" />
      <PageLayout title="THANAWUT TUAMPRAJAK">
        <ImageSection />
        <PersonalInfoSection />
        <OverviewSection />
        <AboutMe />
        <EducationSection />
        <LetsConnect />
      </PageLayout>
    </>
  );
};

const ImageSection = () => (
  <div className="items-center grid p-3 justify-items-center">
    <Image
      src={"/images/portrait-dummy.png"}
      alt="image"
      width={300}
      height={300}
      style={{
        zIndex: 2,
      }}
    />
  </div>
);

const PersonalInfoSection = () => {
  return (
    <div id="personal-info-section">
      <div className="max-md:text-sm mt-8 max-sm:mx-6 mx-10 break-all">
        <div className="flex flex-wrap gap-2 mt-2 w-full justify-center">
          <div className="flex items-center gap-3 p-1 px-3">
            <FaPhoneAlt size={20} color="#000" />
            +66 99 434 5245
          </div>
          <div className="flex items-center gap-3 p-1 px-3">
            <FaBirthdayCake size={20} color="#000" />
            <text>
              10<sup>th</sup> November
            </text>
          </div>
          <div className="flex items-center gap-3 p-1 px-3">
            <span> AGE: </span>
            {calculateAge(new Date(2000, 11, 10))}
          </div>
        </div>
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview-section">
      <p className="max-md:text-sm mt-8 max-sm:mx-6 mx-10 break-normal hyphens-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        tempus lorem mi, sit amet vulputate elit scelerisque non. Sed sit amet
        libero id tortor vehicula rutrum. Proin vitae est eu lacus aliquet
        condimentum sit amet ac sapien. Nunc fermentum, felis in efficitur
        tempor, erat nisl interdum nunc, et aliquam lorem metus at felis. In
        posuere urna id molestie egestas. Suspendisse potenti.
      </p>
    </div>
  );
};

const AboutMe = () => (
  <div id="about-me" className="mt-8">
    <div className="font-bold flex gap-3 text-2xl text-center font-bold sm:mt-10 max-sm:ms-5 ms-10">
      <FaRegSmile size={30} />
      <span> ABOUT ME </span>
    </div>
    <ul className="max-md:text-sm mt-3 list-disc mx-10 break-all sm:ms-16 ms-12">
      <ListItem className="break-normal hyphens-auto">
        👷‍♂️ I&apos;m currently working as Application developer associate at
        <Link
          className="text-blue-500 underline underline-offset-2"
          href="https://www.tcc-technology.com"
        >
          {" "}
          T.C.C. Technology Co., Ltd.{" "}
        </Link>
      </ListItem>
      <ListItem className="break-normal hyphens-auto">
        🤓 Presently learning back-end development with various languages such
        as ♨️ Java spring boot, and learning software development design such as
        Clean architecture, React design patterns.
      </ListItem>
      <ListItem className="break-normal hyphens-auto">
        💤 I want 69 hours for sleeping.
      </ListItem>
    </ul>
  </div>
);

const EducationSection = () => {
  return (
    <div id="education-info-section" className="mt-8">
      <div className="font-bold flex gap-3 text-2xl text-center font-bold sm:mt-10 max-sm:ms-5 ms-10">
        <MdSchool size={30} />
        <span> EDUCATION </span>
      </div>
      <div className="max-md:text-sm mt-3 max-sm:mx-6 mx-10 break-all">
        <div className="lg:flex max-md:mx-2 mt-2">
          <div className="w-full">
            <div className="font-bold">Suranaree University of Technology</div>
            <div className="italic sm:flex lg:grid">
              <div> Bachelor of Engineering </div>
              <div>
                {" "}
                <span className="max-sm:hidden lg:hidden">,</span> Computer
                Engineering{" "}
              </div>
            </div>
          </div>
          <div className="w-full lg:text-end max-lg:mt-2">
            <div> Nakhon Ratchasima, Thailand </div>
            <div> May 2024 </div>
          </div>
        </div>
        {/* Relevant courses: Software Engineering, System Analysis and Design,
          Software Testing, Operating System, Web Application, Object-oriented
          Programming, Data structure and Algorithm. */}
      </div>

      <div className="max-md:text-sm mt-5 max-sm:mx-6 mx-10 break-all">
        <text className="max-md:text-sm font-bold max-md:ms-2">
          {" "}
          Relevant courses:{" "}
        </text>
        <ul className="max-md:text-sm list-disc mx-10 break-all">
          <ListItem className="break-normal hyphens-auto">
            <text className="italic me-1" lang="en">
              Software Engineering:{" "}
            </text>
            Learned the processes of software development via a{" "}
            <Link
              href={""}
              className="text-blue-500 underline underline-offset-2"
            >
              {" "}
              course project.{" "}
            </Link>
          </ListItem>
          <ListItem className="break-normal hyphens-auto">
            <text className="italic me-1"> System Analysis & Design: </text>
            Gathered knownledge of the fundamental concepts of system analysis
            like analyzing user requirement or software design
          </ListItem>
          <ListItem className="break-normal hyphens-auto">
            <text className="italic me-1"> Software Testing: </text> Studied
            various types of software testing.
          </ListItem>
          <ListItem>Operating System</ListItem>
          <ListItem className="break-normal hyphens-auto">
            <text className="italic me-1"> Web Application: </text> Learned the
            fundamental concepts of web application and commonly-found web
            framework such as Angular, Vue, and React.
          </ListItem>
          <ListItem className="break-normal hyphens-auto">
            <text className="italic me-1"> Object-oriented Programming: </text>{" "}
            Learned the fundamental concepts of object-oriented programming with
            ♨️ Java
          </ListItem>
        </ul>
      </div>
    </div>
  );
};

const LetsConnect = () => (
  <div className="mt-10" id="lets-connect">
    <text className="text-2xl text-center font-bold sm:mt-10 max-sm:ms-5 ms-10">
      LET&apos;S CONNECT{" "}
    </text>
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
export default Home;
