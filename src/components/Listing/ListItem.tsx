import { ReactNode } from "react";
import styles from "./styles.module.css";
import { useProfileContext } from "@/context/ProfileContext";
interface ListItemProps {
  className?: string;
  children?: ReactNode;
}

const ListItem = ({ children, className }: ListItemProps) => {
  const { darkMode } = useProfileContext();
  const listClass = darkMode ? styles.triangularListDarkMode : styles.triangularListLightMode;

  return (
    <li 
      className={`${styles.triangularList} ${className} ${listClass}`}
    >
      {children}
    </li>
  );
};

export default ListItem;
