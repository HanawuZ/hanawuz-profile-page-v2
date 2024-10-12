import { SkillBadgeProps } from "@/components/SkillBadge/type";
import { BadgeProps } from "@/components/Badge";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaGolang } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub, FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { FaMarkdown } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiOverleaf } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
// -----------+ Currently Learning +--------------------
const SPRING_BOOT: BadgeProps = {
  title: "Spring Boot",
  icon: <BiLogoSpringBoot color="#FFFFFF" size={24} />,
  backgroundColor: "#8BC34A",
  textColor: "#FFFFFF",
  border: "none",
};

// ------------+ Programming Language +-----------------------
const GO: BadgeProps = {
  title: "Go",
  icon: <FaGolang color="#FFFFFF" size={24} />,
  backgroundColor: "#00ADD8",
  textColor: "#FFFFFF",
  border: "none",
};

const JAVA: BadgeProps = {
  title: "Java",
  icon: <FaJava color="#FFFFFF" size={24} />,
  backgroundColor: "#ED8B00",
  textColor: "#FFFFFF",
  border: "none",
};

const TYPESCRIPT: BadgeProps = {
  title: "TypeScript",
  icon: <SiTypescript color="#FFFFFF" size={24} />,
  backgroundColor: "#007ACC",
  textColor: "#FFFFFF",
  border: "none",
};

const JAVASCRIPT: BadgeProps = {
  title: "JavaScript",
  icon: <IoLogoJavascript color="#F0DB4F" size={24} />,
  backgroundColor: "#323330",
  textColor: "#FFFFFF",
  border: "none",
};

const PYTHON: BadgeProps = {
  title: "Python",
  icon: <FaPython color="#FFFFFF" size={24} />,
  backgroundColor: "#3776AB",
  textColor: "#FFFFFF",
  border: "none",
};

const CPP: BadgeProps = {
  title: "C++",
  icon: (
    <svg viewBox="0 0 128 128" width="24" height="24" xmlns="http://www.w3.org/2000/
    svg">
      <path
        fill="#00599C"
        d="M118.766 95.82c.89-1.543 1.441-3.28 1.441-4.843V36.78c0-1.558-.55-3.297-1.441-4.84l-55.32 31.94Zm0 0"
      />
      <path
        fill="#00599C"
        d="m68.36 126.586 46.933-27.094c1.352-.781 2.582-2.129 3.473-3.672l-55.32-31.94L8.12 95.82c.89 1.543 2.121 2.89 3.473 3.672l46.933 27.094c2.703 1.562 7.13 1.562 9.832 0Zm0 0"
      />
      <path
        fill="#00599C"
        d="M118.766 31.941c-.891-1.546-2.121-2.894-3.473-3.671L68.359 1.172c-2.703-1.563-7.129-1.563-9.832 0L11.594 28.27C8.89 29.828 6.68 33.66 6.68 36.78v54.196c0 1.562.55 3.3 1.441 4.843L63.445 63.88Zm0 0"
      />
      <path
        fill="#fff"
        d="M63.445 26.035c-20.867 0-37.843 16.977-37.843 37.844s16.976 37.844 37.843 37.844c13.465 0 26.024-7.247 32.77-18.91L79.84 73.335c-3.38 5.84-9.66 9.465-16.395 9.465-10.433 0-18.922-8.488-18.922-18.922 0-10.434 8.49-18.922 18.922-18.922 6.73 0 13.017 3.629 16.39 9.465l16.38-9.477c-6.75-11.664-19.305-18.91-32.77-18.91zM92.88 57.57v4.207h-4.207v4.203h4.207v4.207h4.203V65.98h4.203v-4.203h-4.203V57.57H92.88zm15.766 0v4.207h-4.204v4.203h4.204v4.207h4.207V65.98h4.203v-4.203h-4.203V57.57h-4.207z"
      />
    </svg>
  ),
  backgroundColor: "#00599C",
  textColor: "#FFFFFF",
  border: "none",
};

// ------------------+ FRONT END +------------------------
const REACT: BadgeProps = {
  title: "React",
  icon: <FaReact color="#88dded" size={24} />,
  backgroundColor: "#242443",
  textColor: "#FFFFFF",
  border: "none",
};

const NEXT: BadgeProps = {
  title: "Next.js",
  icon: <SiNextdotjs color="#FFFFFF" size={24} />,
  backgroundColor: "#000000",
  textColor: "#FFFFFF",
  border: "none",
};

const CSS: BadgeProps = {
  title: "CSS",
  icon: <FaCss3 color="#FFFFFF" size={24} />,
  backgroundColor: "#1572B6",
  textColor: "#FFFFFF",
  border: "none",
};

const MUI: BadgeProps = {
  title: "Material UI",
  icon: <SiMui color="#FFFFFF" size={24} />,
  backgroundColor: "#1FA6CA",
  textColor: "#FFFFFF",
  border: "none",
};

const TAILWIND: BadgeProps = {
  title: "Tailwind CSS",
  icon: <SiTailwindcss color="#FFFFFF" size={24} />,
  backgroundColor: "#38BDF8",
  textColor: "#FFFFFF",
  border: "none",
};

const BOOTSTRAP: BadgeProps = {
  title: "Bootstrap",
  icon: <FaBootstrap color="#FFFFFF" size={24} />,
  backgroundColor: "#7952B3",
  textColor: "#FFFFFF",
  border: "none",
};

const ANGULAR: BadgeProps = {
  title: "Angular",
  icon: <FaAngular color="#FFFFFF" size={24} />,
  backgroundColor: "#DD0031",
  textColor: "#FFFFFF",
  border: "none",
};

const VUE: BadgeProps = {
  title: "Vue",
  icon: <FaVuejs color="#FFFFFF" size={24} />,
  backgroundColor: "#41B883",
  textColor: "#FFFFFF",
  border: "none",
};
// ------------------------------------------------------------

// ---------------------+ BACKEND +-----------------------
const GIN: BadgeProps = {
  title: "Gin",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg3406"
      version="1.1"
      width="24"
      height="24"
      viewBox="0 0 226.87169 318.9816"
    >
      <path
        fill="#FFFFFF"
        d="m 111.17171,318.67651 c -27.351044,-1.38961 -44.769844,-4.77518 -59.361126,-11.53759 -1.738343,-0.80564 -1.531137,-0.3614 -3.692759,-7.91721 -3.659401,-12.79123 -7.352004,-28.27281 -10.42563,-43.71043 -1.792969,-9.00538 -2.040161,-10.11521 -6.265935,-28.13209 -6.780979,-28.91121 -8.505401,-37.61082 -10.680399,-53.88203 -1.413908,-10.57748 1.624031,-17.47703 3.658714,-8.30941 8.004807,36.06706 14.931925,62.39991 22.256716,84.60699 2.525477,7.65667 2.327481,7.33894 4.446136,7.1348 1.455504,-0.14025 1.457322,-0.12841 0.369259,2.40486 -1.485624,3.45891 -0.760706,5.30254 3.870197,9.84281 3.470033,3.40212 3.504313,3.60329 0.540406,3.1713 -2.312592,-0.33706 -2.198325,-0.57607 -1.358215,2.84082 0.391578,1.59262 1.073623,4.5802 1.515655,6.63906 3.512287,16.35924 8.096077,24.35967 14.774477,25.78696 19.50744,4.16909 47.842574,5.98039 72.795164,4.65339 28.98449,-1.54141 35.91953,-2.64246 44.92059,-7.13189 6.08801,-3.03647 11.33027,-8.7266 8.11778,-8.81129 -2.36645,-0.0624 -2.58859,-0.61643 -0.58092,-1.44889 4.37151,-1.81266 6.21822,-3.74275 5.8609,-6.12551 -0.10674,-0.71184 0.0283,-1.45371 0.56063,-3.07949 1.63671,-4.99887 1.91095,-9.06371 1.49143,-22.10645 -0.19418,-6.03703 -0.18031,-6.47067 0.27944,-8.73456 1.21158,-5.96595 1.75365,-10.47725 2.64427,-22.00655 0.62865,-8.138 0.83211,-10.17541 1.48396,-14.8601 0.653,-4.69297 0.86147,-7.35612 1.23427,-15.76758 0.72923,-16.45331 1.54161,-23.00558 3.0379,-24.50214 2.50407,-2.50453 2.49004,-3.83809 -0.0788,-7.48324 -2.92958,-4.1571 -2.92051,-6.33121 0.0394,-9.44653 1.44136,-1.51703 1.5036,-3.21332 0.51925,-14.15166 -0.25265,-2.80753 -0.5234,-7.01884 -0.60167,-9.35845 -0.0965,-2.88395 -0.22352,-4.25385 -0.39449,-4.25385 -0.545,0 -4.06379,3.00685 -11.81607,10.09697 -8.81372,8.0609 -11.11718,9.96328 -16.05952,13.26319 -10.19488,6.80696 -19.98329,10.1404 -36.91502,12.5714 -17.09015,2.45374 -37.20979,1.87425 -50.381554,-1.45111 -8.87576,-2.24078 -14.0146,-4.65961 -24.02615,-11.30897 -9.37662,-6.22767 -8.86622,-16.31047 1.05072,-20.75684 4.46538,-2.00209 1.00958,-4.18309 -7.95387,-5.01976 -6.7415,-0.62928 -3.31508,-1.94056 5.30883,-2.03168 10.47798,-0.11071 17.92281,-3.83134 27.54854,-13.76765 4.030524,-4.16057 4.968854,-4.97682 10.339034,-8.994 8.53904,-6.387653 11.5519,-9.160823 12.91399,-11.886603 1.02932,-2.05986 0.9722,-4.09516 -0.12668,-4.51295 -0.3598,-0.1368 -0.53623,-0.38448 -0.53623,-0.75279 0,-0.68616 2.08726,-0.58674 -34.030764,-1.62103 -38.104641,-1.09118 -66.950959,-2.813413 -81.6718239,-4.876112 -2.875672,-0.402942 -1.505624,2.146392 2.004031,3.729024 1.110417,0.500729 1.214328,0.948678 0.262701,1.132488 -2.593142,0.50087 -2.449142,0.13263 -1.705205,4.36066 2.886846,16.406883 7.3712879,20.483733 16.1443379,14.676993 1.738506,-1.15069 2.344664,-1.36488 6.590988,-2.3289 9.299069,-2.11112 19.337628,-3.27402 34.326571,-3.976543 15.45435,-0.72431 17.12764,-0.7819 17.3137,-0.59584 0.40483,0.40482 -7.43825,1.463183 -21.17052,2.856773 -14.214662,1.44255 -18.981178,2.09534 -25.587711,3.50436 -1.782467,0.38015 -3.72222,0.69256 -4.310562,0.69423 -3.846718,0.0109 -9.45196,3.89392 -11.483819,7.95537 -2.559427,5.11599 -0.202998,8.17383 6.784161,8.80352 2.340199,0.2109 8.055052,1.22694 9.068667,1.61232 0.874869,0.33263 0.698198,0.88015 -0.447543,1.38696 -1.238025,0.54764 -1.235124,0.51633 -0.113436,1.22442 2.2434,1.4162 1.287887,1.32546 -4.913839,-0.46665 -10.344507,-2.98924 -12.447495,-3.16022 -9.60573,-0.78096 1.347771,1.12842 1.290765,1.45575 -0.176007,1.01065 -2.275242,-0.69043 -2.226926,-1.15003 -0.845135,8.03924 1.769617,11.76842 0.412089,11.18479 -2.053149,-0.88269 -3.392423,-16.6061 -8.8823219,-30.74762 -6.4294149,-16.56163 0.532426,3.0792 1.1331729,5.50743 2.9186659,11.79732 2.40628,8.47679 3.816097,16.59655 2.972182,17.11812 -0.394348,0.24372 -2.530429,-6.43611 -4.023058,-12.58068 -1.6466309,-6.77875 -2.3472879,-10.63557 -5.7494549,-31.6486 -1.725191,-10.655433 -3.221984,-17.886274 -5.022781,-24.264531 -1.026571,-3.636018 -0.660115,-5.355152 1.701415,-7.981741 4.840769,-5.384101 16.9334399,-8.673005 16.9334399,-4.605475 0,1.952728 -2.483471,3.265476 -8.550145,4.519561 -6.9144719,1.42934 -7.4824149,2.326647 -3.8493349,6.081664 3.3027959,3.413647 24.1016009,6.388123 49.4930009,7.078086 4.866398,0.132236 12.114948,0.343592 16.107888,0.469683 28.349024,0.895213 58.291044,0.880491 60.028524,-0.02952 0.1987,-0.104066 1.11104,-1.393816 2.02742,-2.866111 3.75432,-6.031784 7.33394,-10.5622 12.54885,-15.881956 3.69565,-3.769952 3.80537,-3.908591 3.21129,-4.057695 -1.75408,-0.440245 -1.8966,-7.468911 -0.16924,-8.346299 3.16537,-1.607801 4.70596,-3.876518 9.67579,-14.248831 2.63073,-5.490461 4.1088,-7.911805 6.34588,-10.395635 1.93604,-2.149589 3.41323,-5.114738 5.59399,-11.228713 2.14358,-6.009727 3.50547,-8.8144146 5.04652,-10.3928586 2.96407,-3.035981 3.08753,-1.368007 0.48212,6.5132886 -2.15225,6.510503 -9.44717,22.399778 -14.96937,32.605208 -4.71544,8.714494 -4.07897,11.227828 2.49881,9.867515 1.17294,-0.242569 2.26627,-0.318331 3.27115,-0.22667 1.73527,0.158284 3.61747,-0.230629 8.25361,-1.705415 3.84262,-1.222364 4.33677,-1.021435 2.67092,1.086021 -1.18451,1.498517 -1.17884,1.517738 0.70429,2.389985 1.86552,0.864095 1.72803,1.040138 -0.81238,1.040138 -3.52138,0 -5.97602,1.407279 -6.33143,3.629907 -0.15732,0.983851 -0.15732,0.983851 -1.62908,-0.628719 -4.0622,-4.450839 -8.57182,-3.729959 -11.30602,1.807312 -0.95629,1.936663 -2.46581,3.358881 -3.56506,3.358881 -0.68201,0 -0.52286,-0.450456 1.08875,-3.081768 3.89279,-6.355808 3.96593,-7.464333 0.37211,-5.640205 -4.09115,2.076563 -10.4109,10.975506 -10.66856,15.022581 -0.22459,3.527735 3.92727,5.424514 7.07806,3.233612 11.97915,-8.329704 17.90707,-11.620961 13.01156,-7.224183 -1.0167,0.91312 -2.11195,1.966495 -2.4339,2.340833 -2.31738,2.69448 -4.12667,3.896208 -7.51489,4.991381 -11.28342,3.647135 -11.28342,8.712245 0,8.442377 3.00923,-0.07197 5.61286,-0.02881 6.34276,0.105146 5.47285,1.004418 29.67191,-3.158546 42.00325,-7.225814 7.80843,-2.575467 9.09247,-5.704577 4.28903,-10.452071 -6.17338,-6.101481 -12.7388,-4.894864 -8.58983,1.578673 2.57214,4.013253 -5.15661,8.279453 -18.20794,10.050615 -5.87761,0.797638 -8.12101,1.192966 -10.27989,1.811521 -1.47228,0.421836 -5.81683,0.954045 -9.35273,1.145718 -4.68016,0.253697 -6.16753,-0.363689 -2.55794,-1.061769 5.52438,-1.068398 7.73485,-1.396059 14.32627,-2.123601 17.67329,-1.950726 23.37161,-4.714185 23.41804,-11.356818 0.0258,-3.688505 -2.95823,-4.248962 -11.30016,-2.122407 -2.67104,0.680912 -2.78136,0.430532 -0.33014,-0.74931 3.74861,-1.804317 3.4529,-3.3467 -0.95289,-4.970032 -1.46979,-0.541552 -1.46979,-0.541552 0.68549,-0.714251 9.8614,-0.790174 14.67803,-4.711127 10.08802,-8.2121 -0.89967,-0.68621 -0.87284,-0.910972 0.13274,-1.112089 0.38588,-0.07717 1.14292,-0.457248 1.6823,-0.844605 2.17032,-1.558608 3.98188,3.267749 2.06646,5.50548 -2.63061,3.073281 -0.47607,7.058044 4.74255,8.771195 5.35476,1.757843 7.82239,-0.671542 5.61023,-5.523284 -0.39825,-0.873456 -1.18154,-3.425763 -1.74065,-5.671792 -3.18521,-12.795602 -10.09039,-27.111168 -13.0772,-27.111168 -0.28604,0 -0.47905,-0.260249 -0.63098,-0.850768 -2.85159,-11.083636 -3.82324,-13.1425576 -7.10512,-15.0556426 -5.57292,-3.248593 -7.32048,-8.884803 -2.17286,-7.00788696 11.78841,4.29826796 24.20914,19.25461356 33.64445,40.51273056 7.51259,16.926164 9.2093,42.089089 4.30341,63.821832 -2.6973,11.94888 -4.82277,35.41402 -7.25657,80.11239 -0.99429,18.26081 -1.98159,31.73001 -3.168,43.21906 -0.29636,2.86992 -0.60186,6.23897 -0.67889,7.48676 -0.58067,9.40622 -2.70218,26.93621 -4.79115,39.58911 -0.43784,2.65202 -0.62884,4.91085 -0.77692,9.18831 -0.56131,16.21356 -5.73243,24.2151 -16.71487,25.86373 -1.15306,0.17308 -3.09606,0.62161 -4.31778,0.99672 -14.34954,4.40567 -28.77554,6.25589 -57.69145,7.39928 -9.67228,0.38249 -9.41534,0.38278 -17.35569,-0.0206 z m 3.47315,-3.13051 c 0.6292,-0.62921 -3.20382,-1.19101 -11.75396,-1.72282 -2.18364,-0.13583 -4.684914,-0.34616 -5.558364,-0.4674 -5.54992,-0.77039 -15.54071,-1.36761 -15.54071,-0.92898 0,1.69551 31.304544,4.66769 32.853034,3.1192 z M 60.239016,304.0755 c 0,-0.53921 -4.469677,-18.19838 -5.372518,-21.22618 -1.663913,-5.58019 -5.003578,-13.4959 -5.621969,-13.32525 -0.925444,0.25537 1.312584,12.01347 3.659062,19.22391 2.316643,7.11876 7.335425,17.60561 7.335425,15.32752 z m -6.970595,-1.7341 c 0.5757,-3.64723 -0.55425,-8.94332 -4.451255,-20.86312 -2.337672,-7.15022 -3.110145,-9.84945 -3.665572,-12.80845 -0.587591,-3.13033 -0.534821,-2.98592 -1.062447,-2.90733 -2.19848,0.32744 -2.007027,3.78753 0.716921,12.95677 1.971778,6.63734 2.196964,7.53675 2.496553,9.97145 0.850644,6.91298 5.389863,17.29944 5.9658,13.65068 z M 42.768554,258.7442 c -0.002,-4.56403 -0.644767,-8.28227 -2.716092,-15.71087 -2.316224,-8.30688 -3.234762,-11.90325 -3.752304,-14.69144 -0.99049,-5.3361 -3.045738,-8.251 -2.401166,-3.40549 0.344282,2.58812 2.856124,15.66603 3.541194,18.43724 0.308466,1.24779 0.820709,4.34117 1.138315,6.87414 0.879754,7.01626 1.351997,8.94506 2.617975,10.69269 1.296288,1.78948 1.573621,1.40203 1.572078,-2.19627 z M 119.58752,149.53753 c 0.62548,-0.69236 0.51094,-2.2036 -0.46239,-6.10087 -1.3267,-5.31217 -1.32246,-7.78776 0.0169,-9.83234 2.26825,-3.46264 -10.84592,-5.00595 -18.57341,-2.18576 -7.041354,2.56977 -8.607634,6.87428 -4.240194,11.65296 2.14323,2.34504 -0.99238,3.61347 -3.94856,1.59729 -4.04092,-2.756 -3.67482,-11.44138 0.48226,-11.44138 0.48052,0 1.40767,-0.97128 1.40767,-1.47466 0,-0.74609 -0.89575,-1.37489 -2.80282,-1.96752 -2.63602,-0.81917 -2.62309,-0.98386 0.11249,-1.43316 6.41886,-1.05424 12.474064,-5.60529 22.038564,-16.56403 12.42277,-14.233693 17.37013,-18.501483 10.78287,-9.30174 -3.32688,4.6463 -6.10972,7.86571 -11.66835,13.49886 -9.9658,10.09943 -11.20559,12.25108 -7.05912,12.25108 6.27121,0 9.06933,-2.57309 14.80275,-13.61231 5.41492,-10.42595 8.08317,-13.108 11.90807,-11.96967 1.6159,0.48091 1.60818,0.51181 -2.90413,11.62937 -4.17139,10.27757 -3.98249,13.09897 0.72101,10.76888 2.3473,-1.16285 2.25853,-1.01162 3.19177,-5.4374 2.29886,-10.90208 7.04046,-25.863383 8.19673,-25.863383 1.53266,0 0.6154,6.714323 -1.89061,13.839183 -3.77614,10.73604 -3.95877,14.19582 -0.90875,17.21566 3.32263,3.28974 7.04713,2.68367 9.92874,-1.61567 1.05436,-1.5731 1.52122,-1.35878 2.34227,1.07521 0.61075,1.81055 0.71232,1.87023 3.24309,1.90567 3.47585,0.0487 8.22922,-1.20872 8.49111,-2.24611 0.085,-0.33677 0.27326,-0.53313 0.4634,-0.48337 1.87221,0.48999 1.84498,-1.41513 -0.0318,-2.22248 -1.21945,-0.52459 -1.32655,-0.85735 -0.42415,-1.31777 1.99003,-1.01536 4.06577,0.50581 4.06577,2.97951 0,1.04257 0.24752,1.17553 2.72246,1.46249 16.17625,1.87552 25.90258,-2.33796 31.40771,-13.60591 0.93714,-1.91815 2.72417,-5.42729 3.97117,-7.7981 4.44923,-8.458863 6.27937,-14.647413 5.47601,-18.516929 -0.46851,-2.256711 -0.22469,-2.179511 -5.03766,-1.594981 -24.68729,2.998241 -46.88731,5.041427 -65.53742,6.031747 -3.55621,0.18884 -7.37676,0.39702 -8.49011,0.46262 -2.02427,0.11928 -2.02427,0.11928 -6.01228,4.03251 -6.43739,6.31669 -12.01268,11.433653 -22.59113,20.733973 -2.994714,2.63287 -5.751204,5.11817 -6.125544,5.52288 -1.06709,1.15368 -4.57178,3.92495 -9.75548,7.71395 -10.82787,7.91459 -16.44936,14.0061 -14.57821,15.79711 2.14298,2.05119 18.21453,4.98305 31.593594,5.76348 2.24603,0.13101 5.35984,0.38601 6.91959,0.56666 4.11553,0.47666 4.23809,0.48678 6.37396,0.52655 1.72184,0.0321 2.00053,-0.0197 2.38215,-0.4421 z m 65.54436,-35.71433 c -8.4391,-1.36797 -16.57227,-6.13247 -25.01406,-14.653543 -5.56605,-5.61833 -4.92093,-6.05437 2.99672,-2.02551 5.80271,2.952693 7.89738,3.688963 10.33345,3.632143 0.93585,-0.0218 2.16096,-0.0488 2.72246,-0.06 2.52791,-0.0502 12.29162,5.33669 11.36046,6.26785 -0.31909,0.3191 -2.11311,-0.25457 -5.57523,-1.78278 -11.08844,-4.89452 -18.18016,-4.93034 -10.66297,-0.0539 7.90986,5.13121 16.59917,7.58547 21.78874,6.15414 1.93879,-0.53474 2.47204,-0.52262 2.55493,0.0581 0.32117,2.25001 -4.64151,3.41383 -10.5045,2.46345 z m -46.72204,35.74134 c 0.9908,-0.24826 4.81317,-0.96807 8.49417,-1.59958 17.4028,-2.98558 21.37833,-4.5024 32.18406,-12.27949 7.33241,-5.27728 8.22472,-10.47815 1.66636,-9.71241 -7.33034,0.85587 -8.13792,1.50535 -10.28968,8.2753 -2.50493,7.88109 -3.61454,8.83432 -10.29352,8.8428 -7.00308,0.009 -9.82926,-2.40543 -11.81193,-10.0906 -0.70102,-2.71726 -0.88848,-2.95234 -2.87713,-3.60804 -7.3848,-2.43492 -11.05459,2.46883 -11.05592,14.77349 -2.2e-4,2.10717 -0.12863,2.22195 -2.55958,2.28808 -3.96052,0.10773 -4.38797,-1.20778 -2.04932,-6.30707 3.10082,-6.76115 3.21977,-8.08873 0.8159,-9.10618 -5.20695,-2.20387 -10.40357,3.38207 -9.42058,10.12635 0.88123,6.04612 5.22585,9.23638 10.65929,7.82713 1.54179,-0.39989 1.54179,-0.39989 2.89872,0.29995 1.63296,0.84221 1.41981,0.82638 3.63916,0.27027 z m 24.20481,-10.32097 c 3.09165,-0.27558 5.15159,-2.45442 5.15159,-5.44896 0,-4.32906 -3.75333,-6.2205 -8.35927,-4.21253 -1.34807,0.58769 -1.62531,0.63355 -2.74219,0.45358 -4.74451,-0.76453 -6.67334,3.17211 -3.38476,6.90812 2.11798,2.40616 3.7182,2.80041 9.33463,2.29979 z m -42.65274,-12.6238 c 4.95596,-2.52834 11.06206,-15.46125 9.09133,-19.25571 -0.5818,-1.12019 -0.79568,-1.02055 -2.10078,0.97866 -0.63648,0.97499 -2.22663,3.19137 -3.53366,4.92529 -6.08485,8.0722 -7.67453,11.52176 -6.05567,13.14062 0.81942,0.81942 1.32581,0.86056 2.59878,0.21114 z M 90.790646,282.59683 c -1.352,-0.17329 -6.04824,-1.02551 -10.43609,-1.89383 -8.54665,-1.69133 -12.38859,-2.27768 -14.92403,-2.27768 -2.34206,0 -2.87302,-0.45327 -2.21716,-1.89273 0.71148,-1.56151 2.88473,-1.39551 10.05958,0.76842 4.73102,1.42686 8.00047,2.21962 9.88011,2.39567 0.81106,0.076 1.98513,0.2781 2.60902,0.44921 1.78886,0.49061 16.017504,2.36312 17.956594,2.36312 0.0586,0 0.0434,0.10209 -0.0337,0.22687 -0.21029,0.34026 -9.976384,0.23495 -12.894304,-0.13905 z m 23.365104,-9.94247 c -2.96414,-1.45216 -3.88121,-3.37118 -4.66886,-9.76975 -0.82514,-6.7032 -2.11341,-8.76946 -6.01653,-9.6499 -0.63065,-0.14225 -1.31908,-0.30569 -1.52985,-0.36318 -0.53743,-0.14658 -0.95166,-2.29986 -0.75115,-3.90469 0.45217,-3.61901 2.72128,-6.53077 9.52861,-12.22722 1.49735,-1.25302 3.11933,-2.69079 3.60439,-3.19506 4.7883,-4.9779 20.33351,1.39923 26.42942,10.8422 4.32777,6.70401 4.27791,8.21529 -0.37213,11.28035 -5.73199,3.77823 -6.55413,4.8593 -6.4378,8.46529 0.0383,1.1854 0.0861,2.71679 0.10624,3.40308 0.12645,4.29806 -2.35343,5.41268 -8.57217,3.85289 -5.26584,-1.32078 -6.95057,-1.11315 -9.07188,1.11805 -0.79336,0.83443 -0.84064,0.83754 -2.24829,0.14794 z m 15.12025,-2.99468 c 4.11852,-2.10669 4.98053,-7.3232 1.95808,-11.84935 -3.24074,-4.85304 -7.43731,-3.18041 -7.28727,2.90452 0.18466,7.4886 2.05121,10.62154 5.32919,8.94483 z m -11.50074,-1.09287 c 3.25357,-1.46804 4.33148,-7.13534 2.21145,-11.6271 -2.06724,-4.37994 -5.92963,-1.79957 -6.66328,4.45156 -0.11104,0.94612 -0.3088,2.27012 -0.43947,2.94225 -0.89103,4.58317 0.82477,6.06816 4.8913,4.23329 z m -7.17073,-15.10189 c 3.60601,-2.41306 7.2018,-2.52531 18.26318,-0.57018 6.34462,1.12145 11.46199,0.37743 11.45366,-1.66524 -0.031,-7.60614 -4.62737,-9.86116 -16.33141,-8.01224 -7.367,1.16376 -10.08243,1.16805 -13.39656,0.0211 -3.6483,-1.26257 -7.99076,2.19491 -7.3494,5.85161 0.59772,3.40791 4.94462,5.99161 7.36053,4.37492 z M 83.720236,241.66464 c -16.49947,-3.46885 -26.964512,-23.21898 -18.31783,-34.57029 2.64993,-3.4788 3.48618,-2.26511 1.63714,2.37607 -7.71525,19.36567 16.34484,37.49637 35.010524,26.38249 13.64389,-8.12382 13.4763,-27.98926 -0.29353,-34.79357 -0.56151,-0.27747 -1.73557,-0.94412 -2.609034,-1.48145 -5.33392,-3.2813 -11.33791,-3.06724 -22.8044,0.81306 -6.69589,2.26591 -6.49103,2.26657 -4.37946,-0.0142 8.03394,-8.67762 25.22025,-8.41573 35.691554,0.54387 19.03029,16.28295 1.51723,46.09508 -23.934964,40.74399 z m 66.927154,-1.49418 c -26.02693,-3.98477 -34.81066,-29.05099 -15.32378,-43.7296 17.41242,-13.11601 44.13645,-0.12465 43.27912,21.03929 -0.52802,13.0347 -14.88883,24.69082 -27.95534,22.69031 z m 5.33148,-4.25607 c 19.97026,-0.26559 26.64933,-25.64864 9.76586,-37.114 -10.6048,-7.20157 -27.80229,-3.91977 -33.9473,6.47817 -7.20107,12.1849 0.62962,28.51964 14.76627,30.80229 0.37434,0.0604 1.95677,0.0569 3.51651,-0.008 1.55974,-0.0648 4.21414,-0.13612 5.89866,-0.15854 z m -19.98073,-11.10034 c -5.8485,-1.65474 -6.7687,-8.69435 -1.83495,-14.03738 4.45718,-4.82691 10.85562,-2.73949 13.52797,4.41334 1.18449,3.1704 0.77009,3.65104 -2.95661,3.42912 -2.38182,-0.14182 -3.50534,0.0327 -3.50094,0.54394 6.8e-4,0.0892 0.80191,0.7523 1.78032,1.47357 2.91891,2.15178 2.98576,2.86014 0.35563,3.76804 -1.91298,0.66035 -5.7343,0.87256 -7.37142,0.40937 z m -61.823454,1.4233 c -6.19455,-0.58971 -8.37815,-3.94752 -5.86884,-9.02477 2.97461,-6.01871 9.7246,-7.77843 13.47844,-3.51384 5.68092,6.45385 1.4639,13.40239 -7.6096,12.53861 z M 23.818014,65.152824 c -0.08157,-0.131981 0.116344,-0.616919 0.439806,-1.077641 0.323465,-0.460719 0.852269,-1.212781 1.175123,-1.671243 0.322854,-0.458465 0.642453,-1.246951 0.71022,-1.752192 0.07685,-0.572948 0.261676,-0.96062 0.491179,-1.030233 0.937557,-0.284388 9.157624,-1.975052 12.619039,-2.595426 8.893205,-1.593887 11.304778,-1.752881 31.421725,-2.071624 37.332254,-0.591511 51.615564,-1.063121 65.424964,-2.160211 4.7512,-0.37746 4.50045,-0.427347 5.62371,1.118838 1.7692,2.43532 0.21687,4.133296 -4.48568,4.906547 -5.64956,0.928969 -28.40172,0.342876 -34.46064,-0.887703 -6.427034,-1.305343 -8.449314,-1.236487 -10.303734,0.350823 -1.07847,0.923134 -0.84123,0.92464 -3.68678,-0.0234 -3.58635,-1.194859 -6.73492,-1.575343 -11.64599,-1.407349 -3.98837,0.136432 -5.53846,0.312538 -15.08697,1.714052 -2.55798,0.375457 -6.131207,0.794119 -7.940509,0.930362 -6.27371,0.472417 -13.456332,1.801307 -23.330945,4.316565 -6.613359,1.684554 -6.736796,1.708301 -6.964518,1.339839 z M 183.20348,49.102446 c 0,-1.133699 1.46297,-2.775937 7.90267,-8.870992 3.57604,-3.384665 6.16337,-6.396949 6.16337,-7.17568 0,-0.738453 0.63313,-0.795142 0.88276,-0.07904 1.38729,3.979586 -1.41831,7.929958 -9.27701,13.062295 -1.8093,1.181613 -3.72652,2.446368 -4.26048,2.810568 -1.12594,0.767967 -1.41131,0.819095 -1.41131,0.252851 z"
        id="path3432"
      />
    </svg>
  ),
  backgroundColor: "#008ecf",
  textColor: "#FFFFFF",
  border: "none",
};

const MYSQL: BadgeProps = {
  title: "MySQL",
  icon: <SiMysql color="#FFFFFF" size={24} />,
  backgroundColor: "#4479A1",
  textColor: "#FFFFFF",
  border: "none",
};

const POSTGRESQL: BadgeProps = {
  title: "PostgreSQL",
  icon: <BiLogoPostgresql color="#FFFFFF" size={24} />,
  backgroundColor: "#336791",
  textColor: "#FFFFFF",
  border: "none",
};

const MONGODB: BadgeProps = {
  title: "MongoDB",
  icon: <SiMongodb color="#FFFFFF" size={24} />,
  backgroundColor: "#47A248",
  textColor: "#FFFFFF",
  border: "none",
};

const REDIS: BadgeProps = {
  title: "Redis",
  icon: <DiRedis color="#FFFFFF" size={24} />,
  backgroundColor: "#E33E2D",
  textColor: "#FFFFFF",
  border: "none",
};

const EXPRESSJS: BadgeProps = {
  title: "Express.js",
  icon: <SiExpress color="#FFFFFF" size={24} />,
  backgroundColor: "#000000",
  textColor: "#FFFFFF",
  border: "none",
};

const SEQUELIZE: BadgeProps = {
  title: "Sequelize",
  icon: <SiSequelize color="#FFFFFF" size={24} />,
  backgroundColor: "#2379BD",
  textColor: "#FFFFFF",
  border: "none",
};
// ---------------------+ Tools +-----------------------
const GIT: BadgeProps = {
  title: "Git",
  icon: <FaGitAlt color="#FFFFFF" size={24} />,
  backgroundColor: "#F05033",
  textColor: "#FFFFFF",
  border: "none",
};

const GITHUB: BadgeProps = {
  title: "GitHub",
  icon: <FaGithub color="#FFFFFF" size={24} />,
  backgroundColor: "#333333",
  textColor: "#FFFFFF",
  border: "none",
}

const GITLAB: BadgeProps = {
  title: "GitLab",
  icon: <FaGitlab color="#FFFFFF" size={24} />,
  backgroundColor: "#FC6D26",
  textColor: "#FFFFFF",
  border: "none",
};

const DOCKER: BadgeProps = {
  title: "Docker",
  icon: <FaDocker color="#FFFFFF" size={24} />,
  backgroundColor: "#0DB7ED",
  textColor: "#FFFFFF",
  border: "none",
};

// ------------------------------------------------------------

// ------------------+ OTHERS +-------------------------------
{
  /*  */
}
const LATEX: BadgeProps = {
  title: "LaTeX",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 128 128"
      width="24"
    >
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1="0"
        x2="128"
        y1="128"
        y2="0"
        fill="#000000"
      >
        <stop offset="0" stop-color="#333" fill="#000000" />
        <stop offset="1" stop-color="#5d5d5d" fill="#000000" />
      </linearGradient>
      <path
        d="m24.827171 12.268815v3.124898h5.505773v37.052362h-5.505773v3.050496h34.671488v-10.788339h-3.571312v7.291429h-19.716619v-36.605948h5.505773v-3.124898zm56.917786 3.273702-15.475686 40.177261h-3.794519v3.124898h12.201983v-3.124898h-4.761749l3.645714-9.449097h18.15417l3.645714 9.449097h-4.836152v3.124898h15.773298v-3.124898h-4.24094l-15.475681-40.177261zm.96723 6.99382 7.886648 20.609446h-15.847698zm-70.235804 36.605948v10.19312h3.571312v-6.69621h12.7228v36.754753h-5.505773v3.050492h16.88933v-3.050492h-5.505773v-36.754753h12.722799v6.69621h3.49691v-10.19312zm61.605133 3.050496v3.050496h4.612945l12.648397 18.972595-12.42519 18.154168h-4.984956v3.0505h14.285248v-3.0505h-5.580175l10.565131-15.475684 10.341924 15.475684h-5.13376v3.0505h17.11254v-3.0505h-4.61295l-13.690028-20.46064 11.457958-16.666123h4.91056v-3.050496h-14.21085v3.050496h5.58018l-9.523504 13.987639-9.300291-13.987639h5.133761v-3.050496zm-31.993004 11.606764v3.050496h5.505773v37.126769h-5.505773v3.05049h35.341109v-9.5979h-3.571312v6.02659h-20.311837v-18.079768h14.136444v5.431368h3.571312v-14.43405h-3.571312v5.43137h-14.136444v-14.508455h19.865423v6.100991h3.571312v-9.597901z"
        fill="#ffffff"
      />
    </svg>
  ),
  textColor: "#FFFFFF",
  backgroundColor: "#7e7e7e",
  border: "none",
};

const OVERLEAF: BadgeProps = {
  title: "Overleaf",
  icon: <SiOverleaf color="#FFFFFF" size={24} />,
  textColor: "#FFFFFF",
  backgroundColor: "#086528",
  border: "none",
};

const MARKDOWN: BadgeProps = {
  title: "Markdown",
  icon: <FaMarkdown color="#FFFFFF" size={24} />,
  textColor: "#FFFFFF",
  backgroundColor: "#000000",
  border: "none",
};

const FIGMA: BadgeProps = {
  title: "Figma",
  icon: <IoLogoFigma color="#FFFFFF" size={24} />,
  textColor: "#FFFFFF",
  backgroundColor: "#f24e1e",
  border: "none",
};

const PANDAS: BadgeProps = {
  title: "Pandas",
  icon: <SiPandas color="#FFFFFF" size={24} />,
  textColor: "#FFFFFF",
  backgroundColor: "#130754",
  border: "none",
};

const SUPERSET: BadgeProps = {
  title: "Superset",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 256 128"
      version="1.1"
      preserveAspectRatio="xMidYMid"
    >
      <title>Superset</title>
      <g>
        <path
          d="M190.218924,0 C168.269282,0 148.049828,12.3487941 128.508879,33.9252584 C109.307183,12.0095415 88.748476,0 65.7810761,0 C27.7508614,0 0,27.1402067 0,63.67771 C0,100.215213 27.7508614,127.016168 65.7810761,127.016168 C89.1555791,127.016168 107.271667,116.058309 127.491121,94.2104426 C147.03207,116.12616 166.912271,127.084018 190.218924,127.084018 C228.249139,127.016168 256,100.316989 256,63.67771 C256,27.038431 228.249139,0 190.218924,0 Z M66.0524781,88.6806255 C49.9379804,88.6806255 40.3371323,78.0620196 40.3371323,64.0169626 C40.3371323,49.9719056 49.9379804,39.0479724 66.0524781,39.0479724 C79.6225815,39.0479724 90.716141,49.9719056 102.725682,64.6954678 C91.3946462,78.4012722 79.4190299,88.6806255 66.0524781,88.6806255 Z M189.065465,88.6806255 C175.698913,88.6806255 164.401802,78.0620196 152.392261,64.0169626 C164.741055,49.2934005 175.359661,39.0479724 189.065465,39.0479724 C205.179963,39.0479724 214.679035,50.1076067 214.679035,64.0169626 C214.679035,77.9263186 205.179963,88.6806255 189.065465,88.6806255 Z"
          fill="#484848"
        />
        <path
          d="M156.124039,117.958124 L181.703684,87.4253909 C171.526107,84.3721177 162.12881,75.2122979 152.392261,63.8473363 L127.491121,94.2104426 C135.643361,103.668805 145.322237,111.695521 156.124039,117.958124 Z"
          fill="#20A7C9"
        />
        <path
          d="M128.508879,33.8913332 C120.41092,24.2972701 110.793109,16.0907501 100.045587,9.60084813 L74.432017,40.4728333 C84.1685661,43.8653591 92.7855818,52.6180758 101.945402,63.7794858 L102.963159,64.4919162 L128.508879,33.8913332 Z"
          fill="#20A7C9"
        />
      </g>
    </svg>
  ),
  textColor: "#FFFFFF",
  backgroundColor: "#7fbac8",
  border: "none",
};

export {
  SPRING_BOOT,
  GO,
  JAVA,
  TYPESCRIPT,
  JAVASCRIPT,
  PYTHON,
  REACT,
  NEXT,
  MUI,
  TAILWIND,
  BOOTSTRAP,
  GIT,
  GITLAB,
  DOCKER,
  POSTGRESQL,
  MONGODB,
  REDIS,
  EXPRESSJS,
  GIN,
  MYSQL,
  LATEX,
  MARKDOWN,
  FIGMA,
  PANDAS,
  SUPERSET,
  ANGULAR,
  VUE,
  CSS,
  OVERLEAF,
  SEQUELIZE,
  CPP,
  GITHUB
};
