import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ProfileContextProvider } from "@/context/ProfileContext";
import { useProfileContext } from "@/context/ProfileContext";
import { Barlow } from "next/font/google";
import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";
import { Header } from "@/components/Header";
import { DetailModal } from "@/components/DetailModal";

const barlow = Barlow({ subsets: ["latin"], weight: "400", })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProfileContextProvider>
      <div className={`${barlow.className} background overflow-auto h-full w-full`}>
        <Layout Component={Component} pageProps={pageProps} />
      </div>
    </ProfileContextProvider>
  )

}


function Layout({ Component, pageProps }: any) {
  const { screenWidth } = useProfileContext()
  return (
    <>
      <Header />
      {/* {screenWidth >= 768 && <SidebarMenu />} */}
      <Component {...pageProps} />
    </>
  )
}