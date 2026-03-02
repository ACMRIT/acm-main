// "use client"
import Joinus from "@/components/Joinus";
import { Startsection } from "@/components/Startsection";
import AboutIntro from "@/components/AboutIntro";
import Growth from "@/components/Growth";
import Upcomingevents from "@/components/Upcomingevents";

export default function Home() {
  return (

    <div>
      <Startsection/>
      <div className="bg-gradient-to-b from-black to-[#02042a] h-[96px] w-full"></div>
      <AboutIntro/>
      <Growth/>
      <Upcomingevents/>
      <Joinus/>
      <div className="h-[80px] "></div>
    </div>

  );
}
