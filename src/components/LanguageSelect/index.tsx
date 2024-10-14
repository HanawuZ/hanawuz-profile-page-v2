import { useProfileContext } from "@/context/ProfileContext";
import { THFlag, USFlag } from "../Flag";
import { useState, useRef, useEffect } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import themes from "@/theme";

const languageOptions = [
  { value: "en", icon: <USFlag /> },
  { value: "th", icon: <THFlag /> },
];

const flagMap: Record<string, JSX.Element> = {
  en: <USFlag />,
  th: <THFlag />,
};

const LanguageSelect = () => {
  const { language, changeLanguage, mode } = useProfileContext();
  const [showOption, setShowOption] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Create a ref for the dropdown

    // Handle click outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setShowOption(false); // Close the dropdown when clicking outside
        }
      };
  
      // Add event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside); // Cleanup listener
      };
    }, [dropdownRef]);

  return (
    <div className="relative my-2 me-4" ref={dropdownRef}>
      <button
        className="flex gap-2 items-center"
        onClick={() => setShowOption(!showOption)}
      >
        {flagMap[language]}
        <IoMdArrowDropup
          size={25}
          color={themes[mode].primaryText}
          style={{
            transform: showOption ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.15s",
          }}
        />
      </button>
      <div
        className={`grid gap-3 py-2 rounded-md mt-2 shadow-lg border border-slate-300`}
        style={{
          transition: "opacity 0.1s ease-in-out",
          display: showOption ? "block" : "none",
          position: "absolute",
          top: "100%",
          right: 5,
          borderRadius: "5px",
          zIndex: 1,
          backgroundColor: mode === "dark" ? "#2b3137" : "#FFFFFF",
        }}
      >
        {languageOptions.map((option) => (
          <div
            className="cursor-pointer hover:bg-slate-600 px-4 py-2 flex gap-4 items-center"
            key={option.value}
            onClick={() => {
              changeLanguage(option.value);
              setShowOption(false);
            }}
            style={{
              transition: "0.15s",
            }}
          >
            {option.icon}
            <text 
              className="uppercase text-lg"
              style={{
                color: themes[mode].primaryText,
              }}
            > 
              {option.value} 
            </text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelect;
