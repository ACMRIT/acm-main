"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { upcoming } from "@/eventsData/upComing/upComingEvents";
import { motion } from "framer-motion";

export function Upcomingevents() {
  return (
    <div id="upm" className="relative mt-0 py-16 flex flex-col antialiased bg-gradient-to-b from-black to-[#02042a] items-center justify-center overflow-hidden">
      {/* top edge glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-red-500 mb-8 font-extrabold text-3xl md:text-4xl font-titillium leading-[1.2]"
      >
        Upcoming Events
      </motion.h2>

      {upcoming.length ?
        <InfiniteMovingCards
          items={upcoming}
          direction="right"
          speed="fast"
          buttons={[
            { label: "Learn More", href: "/events/#upcoming" },
          ]}
        /> :
        <div className="w-full h-48 flex items-center justify-center px-4 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/50 font-titillium">
            Stay tuned for more exciting events coming your way...!
          </p>
        </div>
      }

      {/* bottom edge glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
    </div>
  );
}

export default Upcomingevents;
