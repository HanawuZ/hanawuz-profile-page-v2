import LanguageSelect from "../LanguageSelect";
import { useProfileContext } from "@/context/ProfileContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const { darkMode, changeTheme } = useProfileContext();

  return (
    <div className="bg-slate-600 w-full absolute z-[500] flex gap-4 justify-end">
      <div className="flex items-center">
        <button
          className="hover:bg-slate-700 rounded-full p-1"
          onClick={changeTheme}
        >
          {darkMode ? (
            <MdOutlineLightMode color="#FFFFFF" size={25} />
          ) : (
            <MdOutlineDarkMode color="#FFFFFF" size={25} />
          )}
        </button>
      </div>
      <LanguageSelect />
    </div>
  );
};

export default Navbar;
