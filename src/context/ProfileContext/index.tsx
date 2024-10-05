import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";

interface ProfileContextGlobalValues {
  screenWidth: number;
  screenHeight: number;
  modalShow: boolean;
  setModalShow: (show: boolean) => void;
  projectKey: string;
  setProjectKey: (key: string) => void;
}

interface Props {
  children: ReactNode;
}

const ProfileContext = createContext<ProfileContextGlobalValues | null>(null);

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

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const value = useMemo(() => ({
      screenWidth: windowSize[0] || 1280,
      screenHeight: windowSize[1] || 720,
      modalShow,
      setModalShow,
      projectKey,
      setProjectKey,
  }), [projectKey]);

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}
