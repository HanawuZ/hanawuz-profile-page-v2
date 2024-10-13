import Link from "next/link";
import { AiFillExclamationCircle } from "react-icons/ai";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import { FaBriefcase } from "react-icons/fa";
import { PiProjectorScreenChart } from "react-icons/pi";
import { BiSolidLike } from "react-icons/bi";
import { IoCodeSlashSharp } from "react-icons/io5";
import { useProfileContext } from "@/context/ProfileContext";
import pageLocales from "@/constants/locales/page";

const SidebarMenu = () => {
  const pathname = usePathname();
  const { language } = useProfileContext();
  return (
    <div className="max-md:hidden fixed" style={{ zIndex: 100 }}>
      <div className={`ms-5 absolute flex h-lvh`}>
        <div className="self-center lg:min-w-[250px]">
          <div className={`grid gap-y-3`}>
            <Link href="/">
              <div
                className={`py-1 px-2 flex items-center  ${styles.sidebarMenu}`}
                style={{
                  background:
                    pathname === "/"
                      ? "linear-gradient(45deg, #e52e71, #ff8a00)"
                      : "",
                  transform: pathname === "/" ? "scale(1.05)" : "",
                  color: pathname === "/" ? "white" : "",
                  transition: "0.2s",
                }}
              >
                <AiFillExclamationCircle size={40} />
                <div
                  className={`ms-3 flex items-center ${styles.sidebarMenuLabel}`}
                >
                  {pageLocales[language].about}
                </div>
              </div>
            </Link>
            <Link href="/skills">
              <div
                className={`py-1 px-2 flex items-center ${styles.sidebarMenu}`}
                style={{
                  background:
                    pathname === "/skills"
                      ? "linear-gradient(45deg, #e52e71, #ff8a00)"
                      : "",
                  transform: pathname === "/skills" ? "scale(1.05)" : "",
                  color: pathname === "/skills" ? "white" : "",
                  transition: "0.2s",
                }}
              >
                <IoCodeSlashSharp size={40} />
                <div
                  className={`ms-3 flex items-center ${styles.sidebarMenuLabel}`}
                >
                  {pageLocales[language].skills}
                </div>
              </div>
            </Link>
            <Link href="/experiences">
              <div
                className={`py-1 px-2 flex items-center ${styles.sidebarMenu}`}
                style={{
                  background:
                    pathname === "/experiences"
                      ? "linear-gradient(45deg, #e52e71, #ff8a00)"
                      : "",
                  transform: pathname === "/experiences" ? "scale(1.05)" : "",
                  color: pathname === "/experiences" ? "white" : "",
                  transition: "0.2s",
                }}
              >
                <FaBriefcase size={40} />
                <div
                  className={`ms-3 flex items-center ${styles.sidebarMenuLabel}`}
                >
                  {pageLocales[language].experiences}
                </div>
              </div>
            </Link>
            <Link href="/projects">
              <div
                className={`py-1 px-2 flex items-center ${styles.sidebarMenu}`}
                style={{
                  background:
                    pathname === "/projects"
                      ? "linear-gradient(45deg, #e52e71, #ff8a00)"
                      : "",
                  transform: pathname === "/projects" ? "scale(1.05)" : "",
                  color: pathname === "/projects" ? "white" : "",
                  transition: "0.2s",
                }}
              >
                <PiProjectorScreenChart size={40} />
                <div
                  className={`ms-3 flex items-center ${styles.sidebarMenuLabel}`}
                >
                  {pageLocales[language].projects}
                </div>
              </div>
            </Link>
            <Link href="/acknowledgement">
              <div
                className={`py-1 px-2 flex items-center ${styles.sidebarMenu}`}
                style={{
                  background:
                    pathname === "/acknowledgement"
                      ? "linear-gradient(45deg, #e52e71, #ff8a00)"
                      : "",
                  transform:
                    pathname === "/acknowledgement" ? "scale(1.05)" : "",
                  color: pathname === "/acknowledgement" ? "white" : "",
                  transition: "0.2s",
                }}
              >
                <BiSolidLike size={40} />
                <div
                  className={`ms-3 flex items-center ${styles.sidebarMenuLabel}`}
                >
                  {pageLocales[language].acknowledgement}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
