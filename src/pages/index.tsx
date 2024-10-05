import { IoPerson } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { BsFillTelephoneFill, BsFillCake2Fill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WebHeader } from "@/components/WebHeader";
import { SkillBadge } from "@/components/SkillBadge";
const ImageSection = () => (
  <div
    className="items-center slide-top grid p-3 justify-items-center"
  >
    <Image
      // className="rounded-full"
      src={"/images/portrait-dummy.png"}
      alt="image"
      width={300}
      height={300}
      style={{
        zIndex: 2,
        // clipPath:"polygon(0 0, 100% 0, 100% 85%, 75% 100%, 25% 100%, 0 85%)"
      }}
    />
    <div
      className="relative max-sm:w-[200px] w-[200px] h-[200px]"
      style={{
        background: "rgba(0, 0, 0, 0.15)",
        marginTop: "-30rem",
        zIndex: 0,
      }}
    ></div>
    <div
      className="relative w-[70px] h-[70px]"
      style={{
        background: "rgba(0, 0, 0, 0.15)",
        marginTop: "-10rem",
        marginLeft: "-4rem",
        zIndex: 0,
      }}
    ></div>
    <div
      className="relative w-[200px] h-[200px]"
      style={{
        background: "rgba(0, 0, 0, 0.15)",
        marginTop: "-40rem",
        marginLeft: "5rem",
        zIndex: 0,
      }}
    ></div>
    <div
      className="relative w-[100px] h-[100px]"
      style={{
        background: "rgba(0, 0, 0, 0.15)",
        marginTop: "-10rem",
        marginLeft: "12rem",
        zIndex: 0,
      }}
    ></div>
    <div
      className="relative w-[70px] h-[70px]"
      style={{
        background: "rgba(0, 0, 0, 0.15)",
        marginTop: "-60rem",
        marginLeft: "12rem",
        zIndex: 0,
      }}
    ></div>
    <div
      className="relative w-[40px] h-[40px]"
      style={{
        background: "rgba(0, 0, 0, 0.15)",
        marginTop: "-62rem",
        marginLeft: "5rem",
        zIndex: 0,
      }}
    ></div>
    <div
      className="relative w-[20px] h-[20px]"
      style={{
        background: "rgba(0, 0, 0, 0.15)",
        marginTop: "-65rem",
        marginLeft: "8rem",
        zIndex: 0,
      }}
    ></div>
  </div>
);
const InfoCard = ({
  icon,
  label,
  value,
  href,
}: {
  icon: JSX.Element;
  label: string;
  value: string;
  href: string;
}) => {
  return (
    <div className="w-full ps-5 flex items-center">
      <div className="me-2">{icon}</div>
      <div
        style={{
          marginRight: "0.5rem",
          width: "2px",
          height: "80%",
          background: "black",
        }}
      />
      <div className="grid">
        <span className="text-sm">{label}</span>
        {href ? (
          <Link
            className={`link`}
            href={href}
            // Add hover effeect
          >
            {value}
          </Link>
        ) : (
          <span className="text-sm text-slate-700">{value}</span>
        )}
      </div>
    </div>
  );
};

const Home = () => {
  const [showBio, setShowBio] = useState<boolean>(true);

  function toggleBio() {
    setShowBio(!showBio);
  }

  return (
    <>
      <WebHeader title="Thanawut - My website" />
      <div className="h-90vh md:overflow-y-auto sm:px-8 max-sm:mt-6">
        <div
          className="grid md:grid-cols-5 lg:grid-cols-4 max-md:pb-20 border border-slate-300"
          style={{
            zIndex: 100,
          }}
        >
          <div></div>
          <div className="w-full grid justify-self-center md:col-span-4 lg:col-span-3 border border-slate-600">
            <div className="md:self-center w-full px-2">
              <ImageSection />
              <AboutMe />
              <LetsConnect />
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="max-md:mt-5 z-10 h-screen grid items-center">
        <div className="container mx-auto grid md:grid-cols-6"
          style={{
            zIndex: 1
          }}
        >
          <div className=""> </div>
          <div className="justify-self-center md:col-span-2">
            <ImageSection />
          </div>
          <div className="homePage md:col-span-3 ms-2" style={{ zIndex: 1 }}>
            <div className="">
              <div className="flex mt-5 justify-between px-4 py-1"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.15)",
                }}
              >
                <text className="text-2xl self-center"> Thanawut Tuamprajak</text>
                <div className="text-sm text-gray-400 font-bold">
                  <div>BIRTHDATE</div>
                  <div className="flex w-full justify-end">11/10</div>
                </div>
              </div>
              <div className="mt-2">
                <div className="text-xl px-4 flex">
                  <span> Position:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span> N/A </span>
                </div>
              </div>
              <div>
                <div className="mt-4 w-full md:px-4 px-3">
                  <div className="border border-slate-500 rounded-2xl grid grid-cols-2 gap-2">
                    <button
                      className="linkButton"
                      style={{
                        pointerEvents: "none",
                        background: showBio
                          ? 'linear-gradient(45deg, #e52e71, #ff8a00)'
                          : 'linear-gradient(45deg, #ff8a00, #e52e71)',
                        color: 'white',
                        transform: !showBio ? 'translateX(105%)' : 'translateX(0)',
                      }}
                    >
                      {showBio ? 'Personal Info' : 'About Me'}
                    </button>
                    <button
                      onClick={toggleBio}
                      style={{
                        width: "100%", fontSize: "16px",
                        transform: !showBio ? 'translateX(-100%)' : 'translateX(0)',
                      }}
                    >
                      {showBio ? 'About Me' : 'Personal Info'}
                    </button>
                  </div>
                </div>
              </div>
              {showBio ?
                <div className="h-80">
                  <div className="mt-5">
                    <div className="grid md:grid-cols-2 justify-items-center">
                      <InfoCard icon={<IoPerson size={30} />} label="Age" value="10111" href="" />
                      <InfoCard icon={<FaBookOpen size={30} />} label="Education" value="Computer Engineering" href="" />
                      <InfoCard icon={<BsFillTelephoneFill size={30} />} label="Phone" value="+669-9434-5245" href="" />
                      <InfoCard icon={<BsFillCake2Fill size={30} />} label="Date of birth" value="10/11/2000" href="" />
                      <InfoCard icon={<MdEmail size={30} />} label="Email" value="thanawut.tuam@gmail.com" href="" />
                    </div>
                  </div>
                  <div className="mt-5 max-md:pb-5">
                    <text className="ps-3 font-bold text-2xl"> Links </text>
                    <div className="grid md:grid-cols-2 justify-items-center">
                      <InfoCard icon={<FaGithub size={30} />} label="Github" value="HanawuZ" href="https://github.com/HanawuZ" />
                      <InfoCard icon={<FaLinkedin size={30} />} label="Linkedin" value="Thanawut Tuamprajak" href="www.linkedin.com/in/thanawut-tuamprajak-479144262" />
                      <InfoCard icon={<FaMedium size={30} />} label="Medium" value="Thanawut Tuamprajak" href="https://medium.com/@thanawut.tuam" />
                    </div>
                  </div>
                </div>
                :
                <div id="about-me" className="h-80 mt-5 px-5 text-justify">
                  <text className="font-bold text-2xl"> About me </text>
                  <p
                    className="p-2 mt-2 py-3"
                    style={{
                      background: 'rgba(255, 255, 255, 0.3)',
                      clipPath: "polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)"
                    }}
                  >
                    As a novice developer with experience in the agile development process, I possess knowledge of software design,
                    development, and testing. Proficient in implementing complex backend systems and creating intuitive, responsive
                    websites, I am seeking for a back-end developer position which encompasses developing back-end application
                    using Golang.
                  </p>
                </div>
              }
            </div>
          </div>
      </div >
        </div> */}
    </>
  );
};

const AboutMe = () => (
  <div id="about-me">
    <text className="text-2xl text-center font-bold sm:mt-10 max-md:ms-3">
      ABOUT ME{" "}
    </text>
    <ul className="max-md:text-sm mt-3 list-disc mx-10 break-all">
      <li>
        👷‍♂️ I&apos;m currently working as Application developer associate at T.C.C.
        Technology Co., Ltd.
      </li>
      <li>
        🤓 Presently learning back-end development with various languages such
        as ♨️ Java spring boot, and learning software development design such as
        Clean architecture, React design patterns.
      </li>
    </ul>
  </div>
);

const LetsConnect = () => (
  <div className="mt-10" id="lets-connect">
    <text className="text-2xl text-center font-bold sm:mt-10 max-md:ms-3">
      LET&apos;S CONNECT{" "}
    </text>
    <div className="flex justify-center m-5">
      <div className="grid gap-3 max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3">        
        <div className="flex items-center gap-3 p-1 px-3 text-white bg-[#24292e]">
          <FaGithub size={24} />
          <span className="text-sm"> HanawuZ </span>
        </div>
        <div className="flex items-center gap-3 p-1 px-3 text-white bg-[#0072b1]">
          <FaLinkedin size={24} />
          <span className="text-sm"> Thanawut Tuamprajak </span>
        </div>
        <div className="flex items-center gap-3 p-1 px-3 text-white bg-[#d44638]">
          <MdEmail size={24} />
          <span className="text-sm"> thanawut.tuam@gmail.com </span>
        </div>
        <div className="flex items-center gap-3 p-1 px-3 text-white bg-black">
          <FaMedium size={24} />
          <span className="text-sm"> Thanawut Tuamprajak </span>
        </div>
      </div>
    </div>
  </div>
);
export default Home;
