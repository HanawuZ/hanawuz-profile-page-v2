import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";
import { ProfileContextProvider } from "@/context/ProfileContext";
import { Barlow } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: "400", })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProfileContextProvider>
      <div className={`${barlow.className}`}>
        {/* <SidebarMenu /> */}
        <Component {...pageProps} />
      </div>
    </ProfileContextProvider>
  )

}
