import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";
import { ProfileContextProvider } from "@/context/ProfileContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProfileContextProvider>
      <SidebarMenu />
      <Component {...pageProps} />
    </ProfileContextProvider>
  ) 
  
}
