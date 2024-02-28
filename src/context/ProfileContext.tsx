import { createContext, useContext, useEffect, useState } from 'react';

interface ProfileContextInterface {
  screenWidth: number;
  screenHeight: number;
  modalShow: boolean;
  setModalShow: (show: boolean) => void;
  projectModalIndex: number;
  setProjectModalIndex: (index: number) => void;
}

interface Props {
  children: React.ReactNode;
}

const ProfileContext = createContext<ProfileContextInterface | null>(null);

export function useProfileContext(): ProfileContextInterface {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error('useProfileContext must be used within a ProfileContextProvider');
  }

  return context;
}

export function ProfileContextProvider({ children }: Props) {
  const [modalShow, setModalShow] = useState(false);
  const [projectModalIndex, setProjectModalIndex] = useState<number>(-1);
  const [windowSize, setWindowSize] = useState([0, 0]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const profileContextValues: ProfileContextInterface = {
    screenWidth: windowSize[0] || 1280,
    screenHeight: windowSize[1] || 720,
    modalShow,
    setModalShow,
    projectModalIndex,
    setProjectModalIndex,
  };

  return <ProfileContext.Provider value={profileContextValues}>{children}</ProfileContext.Provider>;
}
