import PageLayout from "@/components/layout/PageLayout";
import { WebHeader } from "@/components/WebHeader";
import { useProfileContext } from "@/context/ProfileContext";
import themes from "@/theme";
import wordLocales from "@/constants/locales/word";
import { useState, useEffect } from "react";
/**
 * Page that renders when the user goes to a route that doesn't exist.
 * It displays a simple "Error" page with a WebHeader and a PageLayout.
 */

const emojis = ["🤨", "👀", "🧐"];

const Error404 = () => {
  const { mode, language } = useProfileContext();
  const [emoji, setEmoji] = useState(emojis[0]); // Default emoji

  useEffect(() => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(randomEmoji);
  }, []);

  return (
    <>
      <WebHeader title="Error" />
      <div
        className="h-screen w-full flex items-center justify-center"
        style={{
          backgroundColor: themes[mode].background,
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
              {wordLocales[language].pageNotFound}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
