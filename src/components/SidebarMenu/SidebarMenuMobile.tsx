import { AiFillExclamationCircle } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { FaBriefcase } from "react-icons/fa";
import { PiProjectorScreenChart } from "react-icons/pi";
import { BiSolidLike } from "react-icons/bi";
import { IoCodeSlashSharp } from "react-icons/io5";
import { MenuItem } from "./MenuItem";
import themes from "@/theme";
import { useProfileContext } from "@/context/ProfileContext";

const SidebarMenuMobile = () => {
  const pathname = usePathname();
  const { mode } = useProfileContext();
  return (
    <div 
      className="md:hidden w-full flex justify-center" 
      style={{ 
        zIndex: 100,
        position: "absolute",
        bottom: 10
      }}>
      <div
        className="flex gap-2 p-3 rounded-xl border border-slate-400 shadow-xl"
        style={{
          backgroundColor: themes[mode].mobileMenuBackground,
          backdropFilter: "blur(10px)",
        }}
      >
        {" "}
        <MenuItem
          href="/"
          currentPath={pathname}
          className="mx-1"
          icon={<AiFillExclamationCircle size={35} />}
        />
        <MenuItem
          href="/skills"
          currentPath={pathname}
          className="mx-1"
          icon={<IoCodeSlashSharp size={35} />}
        />
        <MenuItem
          href="/experiences"
          currentPath={pathname}
          className="mx-1"
          icon={<FaBriefcase size={35} />}
        />
        <MenuItem
          href="/projects"
          currentPath={pathname}
          className="mx-1"
          icon={<PiProjectorScreenChart size={35} />}
        />
        <MenuItem
          href="/acknowledgement"
          currentPath={pathname}
          className="mx-1"
          icon={<BiSolidLike size={35} />}
        />
      </div>
    </div>
  );
};
export default SidebarMenuMobile;
