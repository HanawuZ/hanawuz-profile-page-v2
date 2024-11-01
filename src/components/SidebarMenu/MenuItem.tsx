import Link from "next/link";
import styles from "./styles.module.css";
import { useProfileContext } from "@/context/ProfileContext";

interface MenuItemProps {
  href: string;
  name?: string;
  currentPath: string;
  className?: string;
  icon: JSX.Element;
}

const MenuItem = (props: MenuItemProps) => {
  const { mode } = useProfileContext();
  const hoverStyle = mode === "dark" ? styles.sidebarMenuDarkMode : styles.sidebarMenuLightMode;
  const textColor = mode === "dark" ? "#000000" : "#FFFFFF";
  const { href, currentPath, className, icon, name } = props;
  return (
    <Link 
      href={href} 
      className={className} 
      style={{
        pointerEvents: currentPath === href ? "none" : "auto",
      }}
    >
      <div
        className={`p-2 flex items-center rounded-xl ${styles.sidebarMenu} ${hoverStyle}`}
        style={{
          background:
            currentPath === href
              ? "linear-gradient(45deg, #e52e71, #ff8a00)"
              : "",
          transform: currentPath === href ? "scale(1.05)" : "",
          color: currentPath === href ? textColor : "",
          transition: "0.2s",
        }}
      >
        {icon}
        <div className={`ms-3 flex items-center max-lg:hidden`}>{name}</div>
      </div>
    </Link>
  );
};

export { MenuItem };
