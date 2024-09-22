import { ReactNode } from "react";
import styles from "./styles.module.css";

interface ListItemProps {
    className?: string;
    children?: ReactNode;
}

const ListItem = ({ children, className }: ListItemProps) => (
  <li className={`${styles.triangularList} ${className}`}>{children}</li>
);

export default ListItem;

