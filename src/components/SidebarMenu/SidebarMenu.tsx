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
import { MenuItem } from "./MenuItem";

const SidebarMenu = () => {
  const pathname = usePathname();
  const { language } = useProfileContext();
  return (
    <div
      className="max-md:hidden fixed ms-5 flex h-full mt-5"
      style={{ zIndex: 100 }}
    >
      <div className="self-center lg:min-w-[250px] grid">
        {/* <div
          className="justify-self-center my-5 lg:hidden"
          style={{
            borderLeft: "2.5px solid rgba(0, 0, 0, 0.25)",
            height: "30vh",
          }}
        /> */}
        <div className={`grid gap-y-3`}>
          <MenuItem
            href="/"
            name={pageLocales[language].about}
            currentPath={pathname}
            icon={<AiFillExclamationCircle size={35} />}
          />
          <MenuItem
            href="/skills"
            name={pageLocales[language].skills}
            currentPath={pathname}
            icon={<IoCodeSlashSharp size={35} />}
          />
          <MenuItem
            href="/experiences"
            name={pageLocales[language].experiences}
            currentPath={pathname}
            icon={<FaBriefcase size={35} />}
          />
          <MenuItem
            href="/projects"
            name={pageLocales[language].projects}
            currentPath={pathname}
            icon={<PiProjectorScreenChart size={35} />}
          />
          <MenuItem
            href="/acknowledgement"
            name={pageLocales[language].acknowledgement}
            currentPath={pathname}
            icon={<BiSolidLike size={35} />}
          />
        </div>
        {/* <div
          className="justify-self-center my-5 lg:hidden"
          style={{
            borderLeft: "2.5px solid rgba(0, 0, 0, 0.25)",
            height: "30vh",
          }}
        /> */}
      </div>
    </div>
  );
};

export default SidebarMenu;

