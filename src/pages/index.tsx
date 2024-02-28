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
  const { modalShow, setModalShow } = useProfileContext()
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
    <div className="bg-slate-600 w-full">
      <div className="flex items-center justify-center">
        <div className="md:h-lvh w-full grid max-[768px]:grid-cols-1 min-[900px]:grid-cols-12 min-[768px]:grid-cols-9">
          <div className="min-[900px]:col-span-2 min-[768px]:col-span-1"></div>
          <div className="min-[900px]:col-span-9  min-[768px]:col-span-8 mx-5 sm:mx-16 lg:my-20 my-2 grid border rounded-3xl bg-slate-400 md:grid-cols-8">
            <div className="md:col-span-3 grid items-center">
              <Image
                className="justify-self-center rounded-full"
                src={"/images/portrait-dummy.png"}
                alt="image"
                width={300}
                height={300}
              >
              </Image>
            </div>
            <div className="md:col-span-5 border w-full"> Grif2 </div>
          </div>
          {/* 
            <div className="flex items-center col-span-3 justify-center py-2 border h-full">
              <Image
                className="justify-self-center rounded-full"
                src={"/images/portrait-dummy.png"}
                alt="image"
                width={300}
                height={300}
              >
              </Image>
            </div>
            <div className="col-span-4 p-5 flex">
              <div className="w-full">
                <div className=" p-6 md:pt-20 w-full h-full max-sm:mx-1">
                  <div className="text-3xl font-bold">Thanawut Tuamprajak</div>
                  <div>Intern</div>
                  <div className="my-2 rounded-2xl grid grid-cols-2 gap-2">
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
                        transform: !showBio ? 'translateX(-105%)' : 'translateX(0)',
                      }}
                    >
                      {showBio ? 'Link2' : 'Link1'}
                    </button>
                  </div>
                  {showBio ?
                    <div id="personal-info" className="about-me-desc pt-2">
                      <InfoRecord icon={<IoPerson />} label="Age" value="12" />
                      <InfoRecord icon={<FaBookOpen />} label="Education" value="Bachelor degree" />
                      <InfoRecord icon={<BsFillTelephoneFill />} label="Phone" value="+669-9434-5245" />
                      <InfoRecord icon={<IoPerson />} label="Age" value="12" />
                    </div>
                    :
                    <div id="about-me" className="pt-2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ac leo ac tempus. Aenean dictum eget massa at finibus. Phasellus nisl arcu, rutrum quis egestas euismod, bibendum id massa. Quisque at mi non sapien imperdiet eleifend id ac felis.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ac leo ac tempus. Aenean dictum eget massa at finibus. Phasellus nisl arcu, rutrum quis egestas euismod, bibendum id massa. Quisque at mi non sapien imperdiet eleifend id ac felis.
                      </p>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div> 
          */}
        </div>
      </div>
    </div >
  );
}

export default Home
