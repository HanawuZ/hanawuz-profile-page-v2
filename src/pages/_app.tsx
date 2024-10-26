import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ProfileContextProvider } from "@/context/ProfileContext";
import { useProfileContext } from "@/context/ProfileContext";
import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";
import SidebarMenuMobile from "@/components/SidebarMenu/SidebarMenuMobile";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import localFont from "next/font/local";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { NextComponentType, NextPageContext } from "next";
import { PAGE_INDEXES } from "@/constants/pageIndex";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Chakra_Petch } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import themes from "@/theme";
import LoadingScreen from "@/components/ui/LoadingScreen";
const kodeMono = localFont({
  src: [
    {
      path: "../../public/fonts/KodeMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

// Define the direction based on page index differences
const getDirection = (currentPage: string, nextPage: string) => {
  return PAGE_INDEXES[nextPage] - PAGE_INDEXES[currentPage];
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ProfileContextProvider>
      <Layout Component={Component} pageProps={pageProps} />
    </ProfileContextProvider>
  );
};

const Layout = ({
  Component,
  pageProps,
}: {
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: any;
}) => {
  const { projectKey, language, mode } = useProfileContext();
  const router = useRouter();
  const pageKey = router.asPath;
  const currentPath = router.pathname;
  const [direction, setDirection] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const pageIndex = PAGE_INDEXES[currentPath]; // Get the current page's index
  const handlers = useSwipeable(
    projectKey === ""
      ? {
          onSwipedLeft: () => {
            // Swipe left should navigate to the next page
            const nextPage = Object.keys(PAGE_INDEXES).find(
              (key) => PAGE_INDEXES[key] === pageIndex + 1,
            );
            if (nextPage) {
              router.push(nextPage);
            }
          },
          onSwipedRight: () => {
            // Swipe right should navigate to the previous page
            const prevPage = Object.keys(PAGE_INDEXES).find(
              (key) => PAGE_INDEXES[key] === pageIndex - 1,
            );
            if (prevPage) {
              router.push(prevPage);
            }
          },
          delta: 100,
        }
      : {},
  );

  // Track changes in path and update direction
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const newDirection = getDirection(currentPath, url);
      setDirection(newDirection);
      setLoading(true);
    };
    // Listen to route changes
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", () => {
        setLoading(false);
      });
    };
  }, [router, currentPath]);

  const usedFont = chakraPetch;
  const pageFound = Object.keys(PAGE_INDEXES).includes(currentPath);

  return (
    <div
      className={`${usedFont.className}`}
      {...handlers}
      style={{
        backgroundColor: themes[mode].background,
        transition: "0.15s",
        backgroundImage: "url('/images/pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {pageFound && (
        <>
          <ProjectDetailModal />
          <SidebarMenu />
          <SidebarMenuMobile />
        </>
      )}
      {loading && <LoadingScreen />}
      <Navbar />
      <AnimatePresence mode="popLayout">
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          variants={{
            initialState: {
              opacity: 0,
              x: direction > 0 ? 100 : -100,
              transition: {
                delay: 0.1,
              },
            },
            animateState: {
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.1,
              },
            },
            exitState: {
              opacity: 0,
              x: direction > 0 ? -100 : 100,
              transition: {
                delay: 0.1,
              },
            },
          }}
          style={{
            overflow: projectKey !== "" ? "hidden" : "auto",
            maxHeight: "100vh",
          }}
        >
          <Component key={pageKey} {...pageProps} />
        </motion.div>
      </AnimatePresence>
      {/* <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none flex justify-center items-center">
        <img className="object-cover" src="/images/pattern.png" alt="pattern" />
      </div> */}
    </div>
  );
};

export default App;
