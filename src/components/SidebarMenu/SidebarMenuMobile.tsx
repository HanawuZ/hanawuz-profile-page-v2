import { AiFillExclamationCircle } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { FaBriefcase } from "react-icons/fa";
import { PiProjectorScreenChart } from "react-icons/pi";
import { BiSolidLike } from "react-icons/bi";
import { IoCodeSlashSharp } from "react-icons/io5";
import { MenuItem } from "./MenuItem";

const SidebarMenuMobile = () => {
  const pathname = usePathname();

  return (
    <div 
      className="md:hidden w-full flex justify-center" 
      style={{ 
        zIndex: 999,
        position: "absolute",
        bottom: 0
      }}>
      <div
        className="flex mt-2 gap-2 py-6"
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
