import { useProfileContext } from "@/context/ProfileContext";
import themes from "@/theme";
import styles from "./styles.module.css";
const LoadingScreen = () => {
  const { mode } = useProfileContext();
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 9999,
        alignItems: "center",
        backgroundColor: themes[mode].loadingScreenBackground,
      }}
    >
      <span className={styles.loader}></span>
    </div>
  );
};

export default LoadingScreen;
