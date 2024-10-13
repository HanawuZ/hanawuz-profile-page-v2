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
import { Chakra_Petch } from "next/font/google"

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
  const { projectKey, language } = useProfileContext();
  const router = useRouter();
  const pageKey = router.asPath;
  const currentPath = router.pathname;
  const [direction, setDirection] = useState(0);
  const pageIndex = PAGE_INDEXES[currentPath]; // Get the current page's index
  const handlers = useSwipeable(
    projectKey === ""
      ? {
          onSwipedLeft: () => {
            // Swipe left should navigate to the next page
            const nextPage = Object.keys(PAGE_INDEXES).find(
              (key) => PAGE_INDEXES[key] === pageIndex + 1
            );
            if (nextPage) {
              router.push(nextPage);
            }
          },
          onSwipedRight: () => {
            // Swipe right should navigate to the previous page
            const prevPage = Object.keys(PAGE_INDEXES).find(
              (key) => PAGE_INDEXES[key] === pageIndex - 1
            );
            if (prevPage) {
              router.push(prevPage);
            }
          },
        }
      : {}
  );

  // Track changes in path and update direction
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const newDirection = getDirection(currentPath, url);
      setDirection(newDirection);
    };
    // Listen to route changes
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router, currentPath]);

  const usedFont = language === "th" ? chakraPetch : kodeMono;
  
  return (
    <div className={`${usedFont.className}`} {...handlers}>
      <ProjectDetailModal />
      <SidebarMenu />
      {/* <SidebarMenuMobile /> */}
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
            maxHeight: "100vh"
            // maxHeight: projectKey !== "" ? "100vh" : "auto",
          }}
        >
          <Component key={pageKey} {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/* 
 {/* {projectModalIndex !== -1 && <ProjectDetailModal />}
      <div style={bodyStyle}>
        <Component key={pageKey} {...pageProps} />
      </div> 
      {/* {projectModalIndex !== -1 && <ProjectDetailModal />}
      <div style={bodyStyle}>
        <AnimatePresence mode="wait">
          <Component key={pageKey} {...pageProps} />
        </AnimatePresence>
      </div>
      <svg className="h-full w-full fixed top-0" xmlns="http://www.w3.org/2000/svg" version="1.1" width="1920" height="1080" preserveAspectRatio="none" viewBox="0 0 1920 1080">
        <g mask="url(&quot;#SvgjsMask1534&quot;)" fill="none">
          <rect width="1920" height="1080" x="0" y="0" fill="url(&quot;#SvgjsLinearGradient1535&quot;)"></rect>
          <path d="M1920 0L1598.2 0L1920 147.78z" fill="rgba(255, 255, 255, .1)"></path>
          <path d="M1598.2 0L1920 147.78L1920 519.38L799.51 0z" fill="rgba(255, 255, 255, .075)"></path>
          <path d="M799.51 0L1920 519.38L1920 841.39L707.27 0z" fill="rgba(255, 255, 255, .05)"></path>
          <path d="M707.27 0L1920 841.39L1920 966.91L501.95 0z" fill="rgba(255, 255, 255, .025)"></path>
          <path d="M0 1080L627.2 1080L0 972.75z" fill="rgba(0, 0, 0, .1)"></path>
          <path d="M0 972.75L627.2 1080L1102.96 1080L0 483.71z" fill="rgba(0, 0, 0, .075)"></path>
          <path d="M0 483.71000000000004L1102.96 1080L1545.56 1080L0 339.18000000000006z" fill="rgba(0, 0, 0, .05)"></path>
          <path d="M0 339.18000000000006L1545.56 1080L1753.67 1080L0 149.34000000000006z" fill="rgba(0, 0, 0, .025)"></path>
        </g>
        <defs>
          <mask id="SvgjsMask1534">
            <rect width="1920" height="1080" fill="#ffffff"></rect>
          </mask>
          <linearGradient x1="10.94%" y1="119.44%" x2="89.06%" y2="-19.44%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1535">
            <stop stopColor="rgba(255, 255, 255, 1)" offset="0"></stop>
            <stop stopColor="rgba(255, 255, 255, 1)" offset="1"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div style={{ opacity: "0.1" }} className="flex justify-center items-center h-full w-full fixed top-0">
        <svg className="md:hidden" xmlns="http://www.w3.org/2000/svg" version="1.1" width="768" height="2000" preserveAspectRatio="none" viewBox="0 0 560 1440">
          <g mask="url(&quot;#SvgjsMask1350&quot;)" fill="none">
            <rect width="560" height="1440" x="0" y="0" fill="url(&quot;#SvgjsLinearGradient1351&quot;)"></rect>
            <path d="M578.9469475458362 680.1045945779172L448.9858106827047 675.5662516746343 444.4474677794219 805.5273885377658 574.4086046425533 810.0657314410487z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float1"></path>
            <path d="M465.53487648341564 596.0952176682589L367.25062784299985 687.7467622551516 557.1864210703084 694.3794663086746z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float2"></path>
            <path d="M414.1898181953333 1212.3458830725501L379.06815626158317 1110.0285071928363 315.7923764574504 1180.3033801288825z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float1"></path>
            <path d="M547.6550619569717 941.4750622387086L422.4871031552939 866.2665650307163 347.2786059473015 991.4345238323941 472.44656474897937 1066.6430210403864z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float3"></path>
            <path d="M530.5396364632844 1297.537517392361L412.1751844809315 1386.7315295718608 501.36919666043127 1505.0959815542137 619.7336486427841 1415.9019693747139z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float2"></path>
            <path d="M457.5907054556185 466.20882918172924L479.36880730345786 328.7073056531859 341.86728377491454 306.92920380534656 320.0891819270752 444.4307273338899z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float1"></path>
            <path d="M88.31563121844695 653.9982320453656L165.88719010062502 686.9254052449706 198.81436330023007 609.3538463627926 121.24280441805199 576.4266731631876z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float3"></path>
            <path d="M424.3067638217944 1541.8855819925989L489.5715110529346 1408.0730200248902 355.75894908522594 1342.80827279375 290.49420185408576 1476.6208347614586z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float1"></path>
            <path d="M-21.24550509492429 565.4545130663307L70.80413705618176 531.9511832484725 37.30080723832352 439.9015410973665-54.74883491278252 473.4048709152247z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float2"></path>
            <path d="M387.39293775958527 1240.0525820712019L440.8279831111328 1365.9376600805442 513.2780157689277 1186.6175367196543z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float2"></path>
          </g>
          <defs>
            <mask id="SvgjsMask1350">
              <rect width="560" height="1440" fill="#ffffff"></rect>
            </mask>
            <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1351">
              <stop stopColor="rgba(255, 255, 255, 1)" offset="0"></stop>
              <stop stopColor="rgba(255, 255, 255, 1)" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>
        <svg className="max-md:hidden" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scale(2.0)" }} width={screenWidth} version="1.1" preserveAspectRatio="none" viewBox={`0 0 1440 560`}>
          <g mask="url(&quot;#SvgjsMask1336&quot;)" fill="none">
            <rect width="1440" height="560" x="0" y="0" fill="url(&quot;#SvgjsLinearGradient1337&quot;)"></rect>
            <path d="M442.9211682822845 429.00787696369L483.7437905737965 337.55343114420964 396.52843100307996 345.18378639198454z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float1"></path>
            <path d="M615.1921925760081 448.8473602260208L704.618745106174 506.9216424725865 762.6930273527396 417.49508994242063 673.2664748225737 359.42080769585493z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float3"></path>
            <path d="M816.5810886573463 80.74679859374838L726.5301282301382 196.0067718635035 841.7901014998934 286.0577322907116 931.8410619271015 170.7977590209565z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float1"></path>
            <path d="M1118.4031234025367 106.42623516131303L1210.4544872474894 141.76144311734964 1245.789695203526 49.71007927239701 1153.7383313585733 14.374871316360384z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float1"></path>
            <path d="M267.98459274609945 389.182237846027L365.2439415304032 395.9832740382153 372.0449777225915 298.72392525391155 274.78562893828774 291.92288906172325z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float2"></path>
            <path d="M150.49056387093248 444.93091235335976L125.8525537629193 318.1793385066636-0.8990200837768612 342.8173486146768 23.738990024236315 469.56892246137295z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float1"></path>
            <path d="M1069.687208797147 71.4617750467664L996.3683585315614 130.83420932405303 1122.086435080284 211.1262675837879z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float1"></path>
            <path d="M575.3996170642271 87.83462858045071L654.9561318937747 55.691710153269895 622.8132134665939-23.864804676277686 543.2566986370463 8.278113750903131z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float2"></path>
            <path d="M1314.1294302132176 190.68906617585097L1408.2804562208773 302.8938896669104 1520.4852797119368 208.74286365925056 1426.334253704277 96.53804016819113z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float1"></path>
            <path d="M1376.9542543949674-7.631071646521717L1277.9274858185245-4.172980687551093 1332.6280065452017 142.63812669762808z" fill="rgba(0, 0, 0, 0.4)" className="triangle-float1"></path>
          </g>
          <defs>
            <mask id="SvgjsMask1336">
              <rect width="1440" height="560" fill="#ffffff"></rect>
            </mask>
            <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1337">
              <stop stopColor="rgba(255, 255, 255, 1)" offset="0"></stop>
              <stop stopColor="rgba(255, 255, 255, 1)" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
*/

export default App;
