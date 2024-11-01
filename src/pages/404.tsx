import { WebHeader } from "@/components/WebHeader";
import { useProfileContext } from "@/context/ProfileContext";
import themes from "@/theme";
import wordLocales from "@/constants/locales/word";
import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { FaHome } from "react-icons/fa";
/**
 * Page that renders when the user goes to a route that doesn't exist.
 * It displays a simple "Error" page with a WebHeader and a PageLayout.
 */

const emojis = ["🤨", "👀", "🧐"];

const Error404 = () => {
  const { mode, language } = useProfileContext();
  const [emoji, setEmoji] = useState(emojis[0]); // Default emoji
  const [textIndex, setTextIndex] = useState<number>(0);
  const arrSize = wordLocales[language].pageNotFound.length;

  useEffect(() => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(randomEmoji);
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * arrSize);
    setTextIndex(randomIndex);
  }, [language]);

  return (
    <>
      <WebHeader title="Error" />
      <div
        className="h-[calc(100vh-57px)] w-full flex items-center justify-center"
        style={{
          backgroundColor: themes[mode].background,
          backgroundImage: "url('/images/pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <div className="text-center text-[10rem]">{emoji}</div>
          <div className="grid gap-3">
            <div
              className="text-6xl text-center font-bold"
              style={{
                color: themes[mode].primaryText,
              }}
            >
              {wordLocales[language].oops}
            </div>
            <div
              className="text-3xl text-center mt-4"
              style={{
                color: themes[mode].primaryText,
              }}
            >
              {wordLocales[language].pageNotFound[textIndex]}{" "}
            </div>
          </div>
          <div className="w-full flex justify-center mt-6">
            <button
              className={`${styles.goHomeButton} flex gap-4 items-center leading-relaxed tracking-wide text-xl py-1`}
              onClick={() => {window.location.href = "/"}}
              style={{
                color: themes[mode].primaryText,
                borderColor: mode === "dark" ? "#f9f9f9" : "#000000",
                border: "1px solid",
                borderRadius: "2rem",
                transition: "all 0.15s ease-in-out",
              }}
            >
              <FaHome size={20}/>
              {language === "en" && " Go Home"}
              {language === "th" && " กลับสู่หน้าหลัก"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
