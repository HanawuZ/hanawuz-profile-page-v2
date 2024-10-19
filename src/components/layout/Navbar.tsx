import LanguageSelect from "../LanguageSelect";
import { useProfileContext } from "@/context/ProfileContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import themes from "@/theme";
const Navbar = () => {
  const { mode, changeTheme } = useProfileContext();

  return (
    <div 
      className="w-full sticky flex gap-4 justify-end"
      style={{
        backgroundColor: mode === "dark" ? "#000000" : "#FFFFFF",
      }}
    >
      <div className="flex items-center">
        <button
          className="hover:bg-slate-700 rounded-full p"
          onClick={changeTheme}
        >
          {mode === "dark" ? (
            <MdOutlineLightMode color={themes[mode].primaryText} size={25} />
          ) : (
            <MdOutlineDarkMode color={themes[mode].primaryText} size={25} />
          )}
        </button>
      </div>
      <LanguageSelect />
    </div>
  );
};

export default Navbar;
