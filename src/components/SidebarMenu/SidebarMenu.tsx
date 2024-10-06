import Link from "next/link";
import { AiFillExclamationCircle } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useProfileContext } from "@/context/ProfileContext";
import styles from "./styles.module.css";
import { FaBriefcase } from "react-icons/fa";
import { PiProjectorScreenChart } from "react-icons/pi";
import { BiSolidLike } from "react-icons/bi";
import { IoCodeSlashSharp } from "react-icons/io5";

const SidebarMenu = () => {
  const pathname = usePathname();
  const { screenWidth } = useProfileContext();
  return (
    <div className="max-md:hidden fixed" style={{ zIndex: 999 }}>
      <div className={`ps-5 w-1/5 absolute h-lvh`}>
        <div className="mt-20">
          <div className={`grid gap-y-3`}>
            <Link
              href="/"
              // className={`${
              //   screenWidth > 980
              //     ? `${styles.sidebarMenu}`
              //     : "grid justify-center"
              // }`}
            >
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
                  About me
                </div>
              </div>
            </Link>
            <Link
              href="/skills"
              // className={`${
              //   screenWidth > 980
              //     ? `${styles.sidebarMenu}`
              //     : "grid justify-center"
              // }`}
            >
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
                  Skills
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
                  Experiences
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
                  Projects
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
                  Acknowledgement
                </div>
              </div>
            </Link>
            {/* 
            <Link
              href="/experiences"
              className={`${
                screenWidth > 980
                  ? `${styles.sidebarMenu}`
                  : "grid justify-center"
              }`}
            >
              <div
                className={`py-1 px-2 flex items-center ${styles.sidebarMenu}`}
                style={{
                  background:
                    pathname === "/experiences"
                      ? "linear-gradient(45deg, #e52e71, #ff8a00)"
                      : "",
                  transform: pathname === "/experiences" ? "scale(1.05)" : "",
                  color: pathname === "/experiences" ? "white" : "",
                  pointerEvents: "none",
                  transition: "0.2s",
                }}
              >
                <FaBriefcase size={40} />
                <div
                  className={`ms-3 flex items-center ${styles.sidebarMenuLabel}`}
                >
                  Experiences
                </div>
              </div>
            </Link>
            <Link
              href="/projects"
              className={`${
                screenWidth > 980
                  ? `${styles.sidebarMenu}`
                  : "grid justify-center"
              }`}
            >
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
                  Projects
                </div>
              </div>
            </Link>
            <Link
              href="/acknowledgement"
              className={`${
                screenWidth > 980
                  ? `${styles.sidebarMenu}`
                  : "grid justify-center"
              }`}
            >
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
                  Acknowledgement
                </div>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
