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


const InfoCard = ({ icon, label, value }: { icon: JSX.Element, label: string, value: string }) => {
  return (
    <div className="w-full ps-5 flex items-center">
      <div className="me-2">
        {icon}
      </div>
      <div
        style={{
          marginRight: "0.5rem",
          width: "2px",
          height: "80%",
          background: 'black',
        }}
      />
      <div className="grid">
        <span>{label}</span>
        <span className="text-sm text-slate-700">{value}</span>
      </div>
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

  /*
  <div className="pt-5 px-5 xl:pe-10 sm:pe-0 sm:ps-0 pb-5 h-full">
            <div className="bg-slate-300 h-full border-2 rounded-lg border-slate-800">
              <div className={`w-full pt-5`}>
                <div className="lg:text-4xl text-3xl font-bold bg-slate-400 p-2 px-4">
                  Thanawut
                  Tuamprajak
                </div>
                <div className="text-2xl px-4">Intern</div>
              </div>
              <div className="mt-4 w-full md:px-4 px-3">
                <div className="border border-slate-400 rounded-2xl grid grid-cols-2 gap-2">
                  <button
                    className="linkButton"
                    onClick={toggleBio}
                    style={{
                      background: showBio
                        ? 'linear-gradient(45deg, #e52e71, #ff8a00)'
                        : 'linear-gradient(45deg, #ff8a00, #e52e71)',
                      color: showBio ? 'white' : '',
                      transform: !showBio ? 'translateX(105%)' : 'translateX(0)',
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
              </div>
              <div className="text-lg w-full md:px-4 px-5 mt-5 mb-5">
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
                  <div id="about-me" className="py-2 px-5 text-justify">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ac leo ac tempus. Aenean dictum eget massa at finibus. Phasellus nisl arcu, rutrum quis egestas euismod, bibendum id massa. Quisque at mi non sapien imperdiet eleifend id ac felis.
                      imperdiet eleifend id ac felis.
                    </p>
                  </div>
                }
              </div>
            </div>
          </div>
  
  */

  return (
    <div className="z-10 h-screen grid items-center">
      <div className="container mx-auto grid md:grid-cols-6">
        <div className=""> </div>
        <div className="grid justify-self-center md:col-span-2">
          <div className="items-center grid p-3"
            style={{
              marginTop: "1rem",
              marginBottom: "1rem"
            }}
          >
            <Image
              className="rounded-full"
              src={"/images/portrait-dummy.png"}
              alt="image"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className=" md:col-span-3 border-slate-500">
          <div className="">
            <div className="flex mt-5 justify-between px-4 bg-slate-300 py-1">
              <text className="text-3xl"> Thanawut </text>
              <div className="text-sm text-slate-400 font-bold">
                <div>BIRTHDATE</div>
                <div>MM/DD</div>
              </div>
            </div>
            <div className="mt-2">
              <div className="text-xl px-4 flex">
                <span> Position:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span> Intern</span>
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
                      // transition: 'background 0.3s ease, transform 0.3s ease',
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
              </div>
            </div>
            {showBio ?
              <div className="h-80">
                <div className="mt-5">
                  <div className="grid md:grid-cols-2 justify-items-center">
                    <InfoCard icon={<IoPerson size={30} />} label="Age" value="10111" />
                    <InfoCard icon={<FaBookOpen size={30} />} label="Education" value="Bachelor degree" />
                    <InfoCard icon={<BsFillTelephoneFill size={30} />} label="Phone" value="+669-9434-5245" />
                    <InfoCard icon={<IoPerson size={30} />} label="Age" value="12" />
                    <InfoCard icon={<IoPerson size={30} />} label="Age" value="12" />
                    <InfoCard icon={<IoPerson size={30} />} label="Age" value="12" />
                    <InfoCard icon={<IoPerson size={30} />} label="Age" value="12" />
                    <InfoCard icon={<IoPerson size={30} />} label="Age" value="12" />
                  </div>
                </div>
                <div className="mt-5">
                  <text className="ps-3 font-bold text-2xl"> Links </text>
                  <div className="grid md:grid-cols-2 justify-items-center">
                    <InfoCard icon={<IoPerson size={30} />} label="Age" value="10111" />
                    <InfoCard icon={<FaBookOpen size={30} />} label="Education" value="Bachelor degree" />
                    <InfoCard icon={<BsFillTelephoneFill size={30} />} label="Phone" value="+669-9434-5245" />
                    <InfoCard icon={<IoPerson size={30} />} label="Age" value="12" />
                  </div>
                </div>
              </div>
              :
              <div id="about-me" className="h-80 py-5 px-5 text-justify">
                <text className="font-bold text-2xl"> About me </text>
                <p
                  className="p-2 mt-2 py-3"
                  style={{
                    background: 'rgba(255, 255, 255, 0.3)',
                    clipPath: "polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)"
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ac leo ac tempus. Aenean dictum eget massa at finibus. Phasellus nisl arcu, rutrum quis egestas euismod, bibendum id massa. Quisque at mi non sapien imperdiet eleifend id ac felis.
                  <br></br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ac leo ac tempus. Aenean dictum eget massa at finibus. Phasellus nisl arcu, rutrum quis egestas euismod, bibendum id massa. Quisque at mi non sapien imperdiet eleifend id ac felis.
                  imperdiet eleifend id ac felis.
                </p>
              </div>
            }
          </div>
        </div>
      </div>
    </div >
  );
}

export default Home
