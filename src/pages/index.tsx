import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div className="bg-slate-600 w-full h-lvh">
      <div className="border border-sky-500 container mx-auto">
        <div className="grid md:grid-cols-3">
          <div> </div>
          <div> Image </div>
          <div> About me</div>
        </div>
      </div>
    </div>
  );
}

export default Home
