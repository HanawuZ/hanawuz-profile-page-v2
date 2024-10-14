import LanguageSelect from "../LanguageSelect";

const Navbar = () => {
  return (
    <div className="bg-slate-600 w-full absolute z-[999] flex justify-end">
      <LanguageSelect />
    </div>
  );
};

export default Navbar;
