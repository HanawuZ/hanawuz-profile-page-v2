import Image from "next/image";
import { IoPerson } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import { useProfileContext } from "@/context/ProfileContext";
import Link from "next/link";
const InfoRecord = ({ icon, label, value }: { icon: JSX.Element, label: string, value: string }) => {
  return (
    <div className="grid grid-cols-2">
      <span className="flex items-center">
        {icon}
        <span className="ms-2 text-lg">{label}</span>
      </span>
      <p className="justify-self-end text-lg">{value}</p>
    </div>
  );
};


const Home = () => {
  const { screenWidth } = useProfileContext()
  const [showBio, setShowBio] = useState<boolean>(true)
  const [showAboutMe, setShowAboutMe] = useState<boolean>(false)

  function toggleBio() {
    setShowBio(!showBio)
    setShowAboutMe(false)
  }
  function toggleAboutMe() {
    setShowAboutMe(!showAboutMe)
    setShowBio(false)
  }


  return (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="md:h-lvh w-full grid max-[768px]:grid-cols-1 min-[900px]:grid-cols-12 min-[768px]:grid-cols-9">
          <div className="min-[900px]:col-span-2 min-[768px]:col-span-1"></div>
          <div className="min-[900px]:col-span-9 mt-10 mb-10 min-[768px]:col-span-8 mx-5 sm:mx-16 lg:my-20 my-2 grid rounded-3xl md:grid-cols-9">
            <div className="md:col-span-4 grid items-center border bg-slate-400">
              <Image
                className="justify-self-center rounded-full"
                src={"/images/portrait-dummy.png"}
                alt="image"
                width={300}
                height={300}
              >
              </Image>
            </div>
            <div className="md:col-span-5 w-full  border my-5 bg-slate-500">
              {screenWidth > 768 ?
                <div className={`border flex flex-col h-full`}>
                  <div className={`border mt-5 w-full lg:mt-16 ${974 < screenWidth && screenWidth < 1024 ? 'mt-24' : 'mt-10'}`}>
                    <div className="md:mx-5 text-3xl font-bold">Thanawut Tuamprajak</div>
                    <div className="md:mx-5 text-xl">Intern</div>
                  </div>
                  <div className="border w-full md:px-4 rounded-2xl grid grid-cols-2 gap-2">
                    <button
                      className="linkButton"
                      onClick={toggleBio}
                      style={{
                        background: showBio
                          ? 'linear-gradient(45deg, #e52e71, #ff8a00)'
                          : 'linear-gradient(45deg, #ff8a00, #e52e71)',
                        color: showBio ? 'white' : '',
                        transform: !showBio ? 'translateX(100%)' : 'translateX(0)',
                        transition: 'background 0.3s ease, transform 0.3s ease',
                      }}
                    >
                      {showBio ? 'Link1' : 'Link2'}
                    </button>
                    <button
                      onClick={toggleBio}
                      style={{
                        width: "100%", fontSize: "18px",
                        transform: !showBio ? 'translateX(-100%)' : 'translateX(0)',
                      }}
                    >
                      {showBio ? 'Link2' : 'Link1'}
                    </button>
                  </div>
                  <div className="text-lg w-full md:px-0 border mt-5">
                    {showBio ?
                      <div id="personal-info" className="md:mx-5 about-me-desc pt-2">
                        <InfoRecord icon={<IoPerson />} label="Age" value="12" />
                        <InfoRecord icon={<FaBookOpen />} label="Education" value="Bachelor degree" />
                        <InfoRecord icon={<BsFillTelephoneFill />} label="Phone" value="+669-9434-5245" />
                        <InfoRecord icon={<IoPerson />} label="Age" value="12" />
                        <InfoRecord icon={<IoPerson />} label="Age" value="12" />
                        <InfoRecord icon={<IoPerson />} label="Age" value="12" />
                      </div>
                      :
                      <div id="about-me" className="pt-2 px-5 text-justify">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ac leo ac tempus. Aenean dictum eget massa at finibus. Phasellus nisl arcu, rutrum quis egestas euismod, bibendum id massa. Quisque at mi non sapien imperdiet eleifend id ac felis.
                          imperdiet eleifend id ac felis.
                        </p>
                      </div>
                    }

                  </div>
                </div>
                :
                <div className={`border grid h-96`}>
                  <div className="border mt-5 w-full lg:mt-12">
                    <div className="md:mx-5 text-3xl font-bold">Thanawut Tuamprajak</div>
                    <div className="md:mx-5 text-xl">Intern</div>
                    <div className="border w-full mt-3 md:px-4 rounded-2xl grid grid-cols-2 gap-2">
                      <button
                        className="linkButton"
                        onClick={toggleBio}
                        style={{
                          background: showBio
                            ? 'linear-gradient(45deg, #e52e71, #ff8a00)'
                            : 'linear-gradient(45deg, #ff8a00, #e52e71)',
                          color: showBio ? 'white' : '',
                          transform: !showBio ? 'translateX(100%)' : 'translateX(0)',
                          transition: 'background 0.3s ease, transform 0.3s ease',
                        }}
                      >
                        {showBio ? 'Link1' : 'Link2'}
                      </button>
                      <button
                        onClick={toggleBio}
                        style={{
                          width: "100%", fontSize: "18px",
                          transform: !showBio ? 'translateX(-100%)' : 'translateX(0)',
                        }}
                      >
                        {showBio ? 'Link2' : 'Link1'}
                      </button>
                    </div>
                    <div className="text-lg w-full md:px-0 border mt-5">
                      {showBio ?
                        <div id="personal-info" className="md:mx-5 about-me-desc pt-2">
                          <InfoRecord icon={<IoPerson />} label="Age" value="12" />
                          <InfoRecord icon={<FaBookOpen />} label="Education" value="Bachelor degree" />
                          <InfoRecord icon={<BsFillTelephoneFill />} label="Phone" value="+669-9434-5245" />
                          <InfoRecord icon={<IoPerson />} label="Age" value="12" />
                          <InfoRecord icon={<IoPerson />} label="Age" value="12" />
                          <InfoRecord icon={<IoPerson />} label="Age" value="12" />
                        </div>
                        :
                        <div id="about-me" className="pt-2 px-5 text-justify">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ac leo ac tempus. Aenean dictum eget massa at finibus. Phasellus nisl arcu, rutrum quis egestas euismod, bibendum id massa. Quisque at mi non sapien imperdiet eleifend id ac felis.
                            imperdiet eleifend id ac felis.
                          </p>
                        </div>
                      }

                    </div>
                  </div>
                </div>
              }

            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Home
