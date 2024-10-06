import { IoPerson } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { BsFillTelephoneFill, BsFillCake2Fill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WebHeader } from "@/components/WebHeader";
import Badge from "@/components/Badge";

const ImageSection = () => (
  <div className="items-center grid p-3 justify-items-center">
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
          <div className="w-full grid justify-self-center md:col-span-4 lg:col-span-3 min-h-[90vh]">
            <div className="md:self-center w-full px-2 max-md:mt-5 mt-10">
              <ImageSection />
              <AboutMe />
              <LetsConnect />
            </div>
          </div>
        </div>
      </div>
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
        👷‍♂️ I&apos;m currently working as Application developer associate at
        T.C.C. Technology Co., Ltd.
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
        <Badge
          // className="flex items-center gap-3 p-1 px-3 text-white bg-[#24292e]"
          icon={<FaGithub size={24} />}
          title="HanawuZ"
        />
        <Badge
          // className="flex items-center gap-3 p-1 px-3 text-white bg-[#0072b1]"
          icon={<FaLinkedin size={24} />}
          title="Thanawut Tuamprajak"
        />
        <Badge
          // className="flex items-center gap-3 p-1 px-3 text-white bg-[#d44638]"
          icon={<MdEmail size={24} />}
          title="thanawut.tuam@gmail.com"
        />
        <Badge
          // className="flex items-center gap-3 p-1 px-3 text-white bg-black"
          icon={<FaMedium size={24} />}
          title="Thanawut Tuamprajak"
        />
      </div>
    </div>
  </div>
);
export default Home;
