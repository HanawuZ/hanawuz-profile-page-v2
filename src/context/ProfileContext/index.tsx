import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";

interface ProfileContextGlobalValues {
  language: string;
  screenWidth: number;
  screenHeight: number;
  modalShow: boolean;
  darkMode: boolean;
  setModalShow: (show: boolean) => void;
  projectKey: string;
  setProjectKey: (key: string) => void;
  changeLanguage: (selectLanguage: string) => void;
  changeTheme: () => void;
}

interface Props {
  children: ReactNode;
}

const initialValues: ProfileContextGlobalValues = {
  language: "en",
  screenWidth: 1280,
  screenHeight: 720,
  modalShow: false,
  darkMode: false,
  setModalShow: () => {},
  projectKey: "",
  setProjectKey: () => {},
  changeLanguage: () => {},
  changeTheme: () => {},
};

const ProfileContext = createContext<ProfileContextGlobalValues>(initialValues);

export function useProfileContext(): ProfileContextGlobalValues {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error(
      "useProfileContext must be used within a ProfileContextProvider",
    );
  }

  return context;
}

export function ProfileContextProvider({
  children,
}: Readonly<Props>): JSX.Element {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [projectKey, setProjectKey] = useState<string>("");
  const [windowSize, setWindowSize] = useState<number[]>([0, 0]);
  const [language, setLanguage] = useState<string>("en");
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const changeLanguage = (selectLanguage: string) => {
    if (selectLanguage === language) return;
    setLanguage(selectLanguage);
  };

  const changeTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const value = useMemo(
    () => ({
      language,
      screenWidth: windowSize[0] || 1280,
      screenHeight: windowSize[1] || 720,
      modalShow,
      setModalShow,
      projectKey,
      setProjectKey,
      changeLanguage,
      darkMode,
      changeTheme
    }),
    [projectKey, language, windowSize, modalShow, darkMode],
  );

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}
