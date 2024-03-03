import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ProfileContextProvider } from "@/context/ProfileContext";
import { useProfileContext } from "@/context/ProfileContext";
import { Barlow } from "next/font/google";
import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";
import { Header } from "@/components/Header";
import { DetailModal } from "@/components/DetailModal";
import localFont from 'next/font/local'

const barlow = Barlow({ subsets: ["latin"], weight: "400", })
const kodeMono = localFont({
  src: [
    {
      path: '../../public/fonts/KodeMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    // {
    //   path: './Roboto-Italic.woff2',
    //   weight: '400',
    //   style: 'italic',
    // },
    // {
    //   path: './Roboto-Bold.woff2',
    //   weight: '700',
    //   style: 'normal',
    // },
    // {
    //   path: './Roboto-BoldItalic.woff2',
    //   weight: '700',
    //   style: 'italic',
    // },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProfileContextProvider>
      <div className={`${kodeMono.className}  h-full w-full`}>
        <div className="max-md:hidden">
          <SidebarMenu />
        </div>
        <div className="md:hidden absolute border border-slate-700 w-full flex justify-center">
          Sidebar Menu Mobile here
        </div>
        <Layout Component={Component} pageProps={pageProps} />
        {/* <Component {...pageProps} /> */}
        {/* 
        <div className="grid-bg h-full overflow-auto w-full fixed top-0"/>
        <div className="background overflow-auto h-full w-full fixed top-0"
          style={{ zIndex: -1 }}
        /> 
        */}
      </div>
    </ProfileContextProvider>
  )

}


function Layout({ Component, pageProps }: any) {
  const { screenWidth, screenHeight } = useProfileContext()
  return (
    <>
      {/* <Header /> */}
      {/* <div
        style={{
          backgroundImage: `url(images/dummy-wallpaper.jpg)`,
          backgroundSize: "cover",
          height:"100%",
          width:"100%",
          position: "fixed",
          top: 0,
          opacity: 0.5,
          filter: "blur(0.5rem)",
        }}
      /> */}
      <Component {...pageProps} />
      {/* <Backgroud1 screenWidth={screenWidth} screenHeight={screenHeight} /> */}
      {/* <div className="background overflow-auto h-full w-full fixed top-0" style={{ zIndex: -1 }} /> */}
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
              <stop stop-color="rgba(255, 255, 255, 1)" offset="0"></stop>
              <stop stop-color="rgba(255, 255, 255, 1)" offset="1"></stop>
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
              <stop stop-color="rgba(255, 255, 255, 1)" offset="0"></stop>
              <stop stop-color="rgba(255, 255, 255, 1)" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  )
}

const Backgroud1 = ({ screenWidth, screenHeight }: { screenWidth: number, screenHeight: number }) => (
  <svg className="top-0 fixed" style={{ opacity: 0.075 }} xmlns="http://www.w3.org/2000/svg" version="1.1" width={screenWidth} height={screenHeight} preserveAspectRatio="none" viewBox="0 0 1440 560">
    <g mask="url(&quot;#SvgjsMask1012&quot;)" fill="none">
      <rect width="1440" height="560" x="0" y="0" fill="url(&quot;#SvgjsLinearGradient1013&quot;)"></rect>
      <path d="M-102.24 344.67L-102.24 344.67" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M-102.24 344.67L69.05 380.09" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M-102.24 344.67L-40.72 516.32" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M-102.24 344.67L64.44 556.09" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M-102.24 344.67L233.33 345.65" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M-40.72 516.32L-40.72 516.32" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M-40.72 516.32L64.44 556.09" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M-96.41 708.39L-96.41 708.39" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M-96.41 708.39L-40.72 516.32" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M-96.41 708.39L111.94 652.54" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M-96.41 708.39L64.44 556.09" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M-96.41 708.39L207.09 680.59" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M-96.41 708.39L-102.24 344.67" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M69.05 380.09L69.05 380.09" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M69.05 380.09L233.33 345.65" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M69.05 380.09L-40.72 516.32" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M69.05 380.09L64.44 556.09" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M69.05 380.09L234.3 497.45" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M69.05 380.09L111.94 652.54" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M64.44 556.09L64.44 556.09" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M64.44 556.09L111.94 652.54" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M111.94 652.54L111.94 652.54" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M111.94 652.54L207.09 680.59" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M233.33 345.65L233.33 345.65" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M233.33 345.65L234.3 497.45" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M233.33 345.65L395.21 364.69" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M233.33 345.65L410.83 533.43" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M233.33 345.65L64.44 556.09" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M234.3 497.45L234.3 497.45" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M234.3 497.45L64.44 556.09" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M234.3 497.45L410.83 533.43" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M234.3 497.45L207.09 680.59" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M234.3 497.45L111.94 652.54" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M207.09 680.59L207.09 680.59" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M207.09 680.59L64.44 556.09" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M207.09 680.59L396.95 659.91" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M207.09 680.59L410.83 533.43" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M207.09 680.59L-40.72 516.32" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M395.21 364.69L395.21 364.69" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M395.21 364.69L528.27 337.98" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M395.21 364.69L410.83 533.43" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M395.21 364.69L530.12 496.31" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M395.21 364.69L234.3 497.45" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M395.21 364.69L661.22 337.71" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M410.83 533.43L410.83 533.43" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M410.83 533.43L530.12 496.31" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M410.83 533.43L396.95 659.91" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M396.95 659.91L396.95 659.91" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M396.95 659.91L562.31 706.82" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M396.95 659.91L530.12 496.31" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M396.95 659.91L234.3 497.45" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M528.27 337.98L528.27 337.98" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M528.27 337.98L661.22 337.71" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M528.27 337.98L530.12 496.31" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M528.27 337.98L696.65 250.16" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M530.12 496.31L530.12 496.31" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M530.12 496.31L693.64 548.36" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M530.12 496.31L649.81 655.6" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M562.31 706.82L562.31 706.82" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M562.31 706.82L649.81 655.6" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M696.65 250.16L696.65 250.16" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M696.65 250.16L661.22 337.71" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M696.65 250.16L852.79 217.77" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M696.65 250.16L845.98 402.43" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M661.22 337.71L661.22 337.71" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M661.22 337.71L845.98 402.43" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M661.22 337.71L530.12 496.31" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M693.64 548.36L693.64 548.36" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M693.64 548.36L649.81 655.6" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M693.64 548.36L840.19 493.46" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M649.81 655.6L649.81 655.6" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M852.79 217.77L852.79 217.77" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M852.79 217.77L1005.28 243.92" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M852.79 217.77L985.67 106.26" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M852.79 217.77L845.98 402.43" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M845.98 402.43L845.98 402.43" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M845.98 402.43L840.19 493.46" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M845.98 402.43L986.06 383.41" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M845.98 402.43L976.29 529.13" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M840.19 493.46L840.19 493.46" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M840.19 493.46L976.29 529.13" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M840.19 493.46L986.06 383.41" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M840.19 493.46L661.22 337.71" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M840.19 493.46L649.81 655.6" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1007.22 -63.61L1007.22 -63.61" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1007.22 -63.61L1143.68 -43.84" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1007.22 -63.61L985.67 106.26" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M985.67 106.26L985.67 106.26" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M985.67 106.26L1005.28 243.92" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1005.28 243.92L1005.28 243.92" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1005.28 243.92L1103.1 242.03" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M986.06 383.41L986.06 383.41" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M986.06 383.41L1005.28 243.92" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M986.06 383.41L976.29 529.13" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M986.06 383.41L1132 409.69" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M986.06 383.41L1103.1 242.03" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M976.29 529.13L976.29 529.13" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M976.29 529.13L1132 409.69" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M976.29 529.13L1125.58 661.56" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M976.29 529.13L693.64 548.36" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1143.68 -43.84L1143.68 -43.84" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1143.68 -43.84L1248.93 -102.71" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1143.68 -43.84L1301.86 96.17" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1143.68 -43.84L985.67 106.26" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1103.1 242.03L1103.1 242.03" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1103.1 242.03L1132 409.69" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1132 409.69L1132 409.69" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1125.58 661.56L1125.58 661.56" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1125.58 661.56L1292.14 669.67" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1125.58 661.56L1308.23 500.63" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1248.93 -102.71L1248.93 -102.71" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1248.93 -102.71L1427.15 -79.2" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1248.93 -102.71L1301.86 96.17" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1248.93 -102.71L1007.22 -63.61" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1301.86 96.17L1301.86 96.17" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1301.86 96.17L1301.55 258.8" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1301.86 96.17L1441.6 248.61" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1301.86 96.17L1427.15 -79.2" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1301.86 96.17L1103.1 242.03" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1301.55 258.8L1301.55 258.8" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1301.55 258.8L1441.6 248.61" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1301.55 258.8L1427.57 395.85" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1301.55 258.8L1103.1 242.03" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1308.23 500.63L1308.23 500.63" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1308.23 500.63L1427.57 395.85" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1308.23 500.63L1457.48 555.97" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1292.14 669.67L1292.14 669.67" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1292.14 669.67L1394.96 659.34" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1427.15 -79.2L1427.15 -79.2" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1427.15 -79.2L1562.48 -62.78" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1427.15 -79.2L1572.86 110.94" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1427.15 -79.2L1143.68 -43.84" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1427.15 -79.2L1563.81 199.79" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1441.6 248.61L1441.6 248.61" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1441.6 248.61L1563.81 199.79" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1441.6 248.61L1427.57 395.85" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1441.6 248.61L1572.86 110.94" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1427.57 395.85L1427.57 395.85" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1427.57 395.85L1587.87 370.87" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1457.48 555.97L1457.48 555.97" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1457.48 555.97L1394.96 659.34" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1394.96 659.34L1394.96 659.34" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1394.96 659.34L1574.61 664.34" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1394.96 659.34L1308.23 500.63" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1562.48 -62.78L1562.48 -62.78" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1562.48 -62.78L1572.86 110.94" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1562.48 -62.78L1563.81 199.79" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1562.48 -62.78L1301.86 96.17" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1562.48 -62.78L1248.93 -102.71" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1572.86 110.94L1572.86 110.94" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1572.86 110.94L1563.81 199.79" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1563.81 199.79L1563.81 199.79" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1587.87 370.87L1587.87 370.87" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1587.87 370.87L1563.81 199.79" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1587.87 370.87L1441.6 248.61" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1587.87 370.87L1457.48 555.97" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1587.87 370.87L1572.86 110.94" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1587.87 370.87L1574.61 664.34" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1574.61 664.34L1574.61 664.34" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <path d="M1574.61 664.34L1457.48 555.97" stroke="rgba(152, 152, 152, 1)" stroke-width="1.5"></path>
      <circle r="5" cx="-102.24" cy="344.67" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="-40.72" cy="516.32" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="-96.41" cy="708.39" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="69.05" cy="380.09" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="64.44" cy="556.09" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="111.94" cy="652.54" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="233.33" cy="345.65" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="234.3" cy="497.45" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="207.09" cy="680.59" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="395.21" cy="364.69" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="410.83" cy="533.43" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="396.95" cy="659.91" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="528.27" cy="337.98" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="530.12" cy="496.31" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="562.31" cy="706.82" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="696.65" cy="250.16" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="661.22" cy="337.71" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="693.64" cy="548.36" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="649.81" cy="655.6" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="852.79" cy="217.77" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="845.98" cy="402.43" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="840.19" cy="493.46" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1007.22" cy="-63.61" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="985.67" cy="106.26" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1005.28" cy="243.92" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="986.06" cy="383.41" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="976.29" cy="529.13" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1143.68" cy="-43.84" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1103.1" cy="242.03" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1132" cy="409.69" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1125.58" cy="661.56" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1248.93" cy="-102.71" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1301.86" cy="96.17" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1301.55" cy="258.8" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1308.23" cy="500.63" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1292.14" cy="669.67" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1427.15" cy="-79.2" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1441.6" cy="248.61" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1427.57" cy="395.85" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1457.48" cy="555.97" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1394.96" cy="659.34" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1562.48" cy="-62.78" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1572.86" cy="110.94" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1563.81" cy="199.79" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1587.87" cy="370.87" fill="rgba(152, 152, 152, 1)"></circle>
      <circle r="5" cx="1574.61" cy="664.34" fill="rgba(152, 152, 152, 1)"></circle>
      <path d="M348.46 660.34L348.46 660.34" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M348.46 660.34L244.21 688.46" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M348.46 660.34L390.47 545.8" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M348.46 660.34L244.31 496.17" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M348.46 660.34L498.77 517.29" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M834.89 523.66L834.89 523.66" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M834.89 523.66L793.6 410.07" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M834.89 523.66L858.8 647.69" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M834.89 523.66L701.33 544.27" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M834.89 523.66L968.65 499.11" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1450.62 364.29L1450.62 364.29" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1450.62 364.29L1449.62 233.05" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1450.62 364.29L1423.56 498.82" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1423.56 498.82L1423.56 498.82" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1423.56 498.82L1306.67 505.74" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1423.56 498.82L1567.76 496.43" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1604.7 -63.13L1604.7 -63.13" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1604.7 -63.13L1608.61 45.52" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1604.7 -63.13L1448.53 -54.58" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1604.7 -63.13L1454.45 64.06" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1604.7 -63.13L1539.45 246.11" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1604.7 -63.13L1449.62 233.05" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1606.58 374.53L1606.58 374.53" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1606.58 374.53L1567.76 496.43" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1606.58 374.53L1539.45 246.11" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M-39.08 536.55L-39.08 536.55" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M-39.08 536.55L48.36 543.32" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M-39.08 536.55L107.21 652.07" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M-39.08 536.55L244.31 496.17" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M-39.08 536.55L244.21 688.46" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M-39.08 536.55L348.46 660.34" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M-39.08 536.55L390.47 545.8" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M48.36 543.32L48.36 543.32" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M48.36 543.32L107.21 652.07" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M107.21 652.07L107.21 652.07" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M107.21 652.07L244.21 688.46" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M107.21 652.07L244.31 496.17" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M244.31 496.17L244.31 496.17" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M244.31 496.17L390.47 545.8" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M244.31 496.17L244.21 688.46" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M244.31 496.17L48.36 543.32" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M244.21 688.46L244.21 688.46" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M390.47 545.8L390.47 545.8" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M390.47 545.8L498.77 517.29" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M390.47 545.8L244.21 688.46" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M498.77 517.29L498.77 517.29" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M498.77 517.29L701.33 544.27" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M498.77 517.29L644.42 671.1" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M498.77 517.29L244.31 496.17" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M498.77 517.29L244.21 688.46" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M701.33 544.27L701.33 544.27" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M701.33 544.27L644.42 671.1" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M701.33 544.27L793.6 410.07" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M644.42 671.1L644.42 671.1" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M644.42 671.1L858.8 647.69" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M793.6 410.07L793.6 410.07" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M793.6 410.07L970.05 381.34" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M793.6 410.07L968.65 499.11" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M858.8 647.69L858.8 647.69" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M858.8 647.69L996.25 660.73" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M858.8 647.69L968.65 499.11" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M858.8 647.69L701.33 544.27" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M858.8 647.69L1100.41 647.24" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M970.05 381.34L970.05 381.34" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M970.05 381.34L968.65 499.11" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M970.05 381.34L1123.64 404.6" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M968.65 499.11L968.65 499.11" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M968.65 499.11L1123.69 504.71" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M996.25 660.73L996.25 660.73" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M996.25 660.73L1100.41 647.24" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M996.25 660.73L968.65 499.11" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1089.08 221.89L1089.08 221.89" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1089.08 221.89L1123.64 404.6" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1089.08 221.89L970.05 381.34" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1089.08 221.89L1294.41 215.09" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1089.08 221.89L1250.4 383.99" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1089.08 221.89L1277.14 70.46" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1123.64 404.6L1123.64 404.6" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1123.64 404.6L1123.69 504.71" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1123.64 404.6L1250.4 383.99" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1123.69 504.71L1123.69 504.71" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1123.69 504.71L1100.41 647.24" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1123.69 504.71L1250.4 383.99" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1123.69 504.71L1306.67 505.74" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1100.41 647.24L1100.41 647.24" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1100.41 647.24L1264.59 643.97" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1100.41 647.24L968.65 499.11" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1258.51 -74.15L1258.51 -74.15" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1258.51 -74.15L1277.14 70.46" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1258.51 -74.15L1448.53 -54.58" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1258.51 -74.15L1454.45 64.06" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1258.51 -74.15L1294.41 215.09" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1258.51 -74.15L1089.08 221.89" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1258.51 -74.15L1604.7 -63.13" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1277.14 70.46L1277.14 70.46" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1277.14 70.46L1294.41 215.09" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1277.14 70.46L1454.45 64.06" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1294.41 215.09L1294.41 215.09" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1294.41 215.09L1449.62 233.05" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1294.41 215.09L1250.4 383.99" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1294.41 215.09L1450.62 364.29" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1250.4 383.99L1250.4 383.99" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1250.4 383.99L1306.67 505.74" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1306.67 505.74L1306.67 505.74" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1306.67 505.74L1264.59 643.97" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1306.67 505.74L1450.62 364.29" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1264.59 643.97L1264.59 643.97" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1264.59 643.97L1457.44 676.57" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1264.59 643.97L1123.69 504.71" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1448.53 -54.58L1448.53 -54.58" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1448.53 -54.58L1454.45 64.06" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1448.53 -54.58L1608.61 45.52" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1448.53 -54.58L1277.14 70.46" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1454.45 64.06L1454.45 64.06" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1454.45 64.06L1608.61 45.52" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1454.45 64.06L1449.62 233.05" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1449.62 233.05L1449.62 233.05" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1449.62 233.05L1539.45 246.11" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1457.44 676.57L1457.44 676.57" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1457.44 676.57L1565.13 682.35" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1457.44 676.57L1423.56 498.82" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1457.44 676.57L1567.76 496.43" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1608.61 45.52L1608.61 45.52" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1608.61 45.52L1539.45 246.11" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1539.45 246.11L1539.45 246.11" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1539.45 246.11L1450.62 364.29" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1539.45 246.11L1454.45 64.06" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1567.76 496.43L1567.76 496.43" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1565.13 682.35L1565.13 682.35" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1565.13 682.35L1567.76 496.43" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1565.13 682.35L1423.56 498.82" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1565.13 682.35L1264.59 643.97" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1565.13 682.35L1606.58 374.53" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <path d="M1565.13 682.35L1306.67 505.74" stroke="hsl(0, 0%, 0%)" stroke-width="1.5"></path>
      <circle r="25" cx="348.46" cy="660.34" fill="url(&quot;#SvgjsRadialGradient1014&quot;)"></circle>
      <circle r="25" cx="834.89" cy="523.66" fill="url(&quot;#SvgjsRadialGradient1014&quot;)"></circle>
      <circle r="25" cx="1450.62" cy="364.29" fill="url(&quot;#SvgjsRadialGradient1014&quot;)"></circle>
      <circle r="25" cx="1423.56" cy="498.82" fill="url(&quot;#SvgjsRadialGradient1014&quot;)"></circle>
      <circle r="25" cx="1604.7" cy="-63.13" fill="url(&quot;#SvgjsRadialGradient1014&quot;)"></circle>
      <circle r="25" cx="1606.58" cy="374.53" fill="url(&quot;#SvgjsRadialGradient1014&quot;)"></circle>
      <circle r="5" cx="-39.08" cy="536.55" fill="#808080"></circle>
      <circle r="5" cx="48.36" cy="543.32" fill="#808080"></circle>
      <circle r="5" cx="107.21" cy="652.07" fill="#808080"></circle>
      <circle r="5" cx="244.31" cy="496.17" fill="#808080"></circle>
      <circle r="5" cx="244.21" cy="688.46" fill="#808080"></circle>
      <circle r="5" cx="390.47" cy="545.8" fill="#808080"></circle>
      <circle r="5" cx="498.77" cy="517.29" fill="#808080"></circle>
      <circle r="5" cx="701.33" cy="544.27" fill="#808080"></circle>
      <circle r="5" cx="644.42" cy="671.1" fill="#808080"></circle>
      <circle r="5" cx="793.6" cy="410.07" fill="#808080"></circle>
      <circle r="5" cx="858.8" cy="647.69" fill="#808080"></circle>
      <circle r="5" cx="970.05" cy="381.34" fill="#808080"></circle>
      <circle r="5" cx="968.65" cy="499.11" fill="#808080"></circle>
      <circle r="5" cx="996.25" cy="660.73" fill="#808080"></circle>
      <circle r="5" cx="1089.08" cy="221.89" fill="#808080"></circle>
      <circle r="5" cx="1123.64" cy="404.6" fill="#808080"></circle>
      <circle r="5" cx="1123.69" cy="504.71" fill="#808080"></circle>
      <circle r="5" cx="1100.41" cy="647.24" fill="#808080"></circle>
      <circle r="5" cx="1258.51" cy="-74.15" fill="#808080"></circle>
      <circle r="5" cx="1277.14" cy="70.46" fill="#808080"></circle>
      <circle r="5" cx="1294.41" cy="215.09" fill="#808080"></circle>
      <circle r="5" cx="1250.4" cy="383.99" fill="#808080"></circle>
      <circle r="5" cx="1306.67" cy="505.74" fill="#808080"></circle>
      <circle r="5" cx="1264.59" cy="643.97" fill="#808080"></circle>
      <circle r="5" cx="1448.53" cy="-54.58" fill="#808080"></circle>
      <circle r="5" cx="1454.45" cy="64.06" fill="#808080"></circle>
      <circle r="5" cx="1449.62" cy="233.05" fill="#808080"></circle>
      <circle r="5" cx="1457.44" cy="676.57" fill="#808080"></circle>
      <circle r="5" cx="1608.61" cy="45.52" fill="#808080"></circle>
      <circle r="5" cx="1539.45" cy="246.11" fill="#808080"></circle>
      <circle r="5" cx="1567.76" cy="496.43" fill="#808080"></circle>
      <circle r="5" cx="1565.13" cy="682.35" fill="#808080"></circle>
    </g>
    <defs>
      <mask id="SvgjsMask1012">
        <rect width="1440" height="560" fill="#ffffff"></rect>
      </mask>
      <linearGradient x1="84.72%" y1="139.29%" x2="15.28%" y2="-39.29%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1013">
        <stop stop-color="rgba(255, 255, 255, 1)" offset="0"></stop>
        <stop stop-color="rgba(255, 255, 255, 1)" offset="1"></stop>
      </linearGradient>
      <radialGradient id="SvgjsRadialGradient1014">
        <stop stop-color="#ffffff" offset="0.1"></stop>
        <stop stop-color="rgba(0, 0, 0, 1)" offset="0.2"></stop>
        <stop stop-color="rgba(0, 0, 0, 0)" offset="1"></stop>
      </radialGradient>
    </defs>
  </svg>
);