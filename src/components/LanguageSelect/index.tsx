import { useProfileContext } from "@/context/ProfileContext";
import { THFlag, USFlag } from "../Flag";
import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
const languageOptions = [
  { value: "en", icon: <USFlag /> },
  { value: "th", icon: <THFlag /> },
];

const flagMap: Record<string, JSX.Element> = {
  en: <USFlag />,
  th: <THFlag />,
};

const LanguageSelect = () => {
  const { language, changeLanguage } = useProfileContext();
  const [showOption, setShowOption] = useState<boolean>(false);

  return (
    <div className="relative my-3 me-4">
      <button
        className="flex gap-2 items-center"
        onClick={() => {
          setShowOption(!showOption);
        }}
      >
        {flagMap[language]}
        <IoMdArrowDropup
          color="#FFFFFF"
          size={25}
          style={{
            transform: showOption ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      <div
        className={`grid gap-3  bg-white rounded-md mt-2 shadow-lg border border-slate-300`}
        style={{
          transition: "opacity 0.1s ease-in-out",
          opacity: showOption ? 1 : 0,
          position: "absolute",
          top: "100%",
          right: 5,
          borderRadius: "5px",
          zIndex: 1,
        }}
      >
        {languageOptions.map((option) => (
          <div
            className="cursor-pointer hover:bg-slate-200 px-4 py-2 rounded-md flex gap-4 items-center"
            key={option.value}
            onClick={() => {
              changeLanguage(option.value);
              setShowOption(false);
            }}
          >
            {option.icon}
            <text className="uppercase text-2xl"> {option.value} </text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelect;
