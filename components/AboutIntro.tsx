"use client";
import React from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Users, Code2, Globe, Award, Cpu, Lightbulb } from "lucide-react";
import "../app/globals.css";

const iconItems = [
    { icon: Users,    label: "Community"   },
    { icon: Code2,    label: "Coding"      },
    { icon: Globe,    label: "Global ACM"  },
    { icon: Award,    label: "Recognition" },
    { icon: Cpu,      label: "Tech"        },
    { icon: Lightbulb,label: "Innovation"  },
];

const AboutIntro = () => {
    return (
        <section className="relative bg-gradient-to-b from-[#02042a] to-[#060c3a] overflow-hidden h-auto py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.08)_0%,_transparent_60%)] pointer-events-none" />

            <div className="relative w-11/12 max-w-[1080px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="font-extrabold text-center font-titillium leading-tight text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                >
                    <span className="text-lightBlue300">ACM</span>{' '}
                    <span className="text-red-500">RIT</span>{' '}
                    <span className="text-white">— STUDENT CHAPTER</span>
                </motion.h2>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-16 h-[3px] bg-gradient-to-r from-green-400 to-blue-400 mx-auto mt-4 mb-10 origin-left"
                />

                <div className="w-full flex gap-12 relative py-4 flex-col lg:flex-row items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex flex-col justify-between w-full space-y-8"
                    >
                        <h1 className="text-blue-300 font-extrabold text-2xl sm:text-3xl md:text-4xl font-titillium leading-[1.2]">About ACM — Student Chapter</h1>
                        <div className="w-10 h-[3px] bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                        <p className="font-titillium text-[18px] leading-7 text-white/70">
                            The RIT ACM Chapter is a vibrant community dedicated to empowering students at the Ramaiah Institute of Technology with the skills, knowledge, and networks needed to excel in the tech world. As part of the global Association for Computing Machinery, our chapter brings together passionate RITians who are driven to explore, innovate, and lead in all areas of computing.
                        </p>
                        <div className="flex flex-row items-center space-x-4">
                            <button suppressHydrationWarning className="bg-blue-600 w-fit text-white py-3 px-5 rounded-lg font-mullish font-bold hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-900/40">
                                <Link href={'/#joinus'}>
                                    Join Us Now
                                </Link>
                            </button>
                            <div className="flex items-center cursor-pointer group">
                                <Link href="/aboutus" className="font-mullish font-bold text-blue-300 group-hover:text-white transition-all duration-200">
                                    Know More
                                </Link>
                                <FiChevronRight className="w-5 h-5 text-blue-400 group-hover:text-white transition-all duration-200" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Icon grid replacing AI image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        className="flex-shrink-0 grid grid-cols-3 gap-4"
                    >
                        {iconItems.map(({ icon: Icon, label }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.15 * i }}
                                className="flex flex-col items-center justify-center gap-2 w-28 h-28 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300 group"
                            >
                                <Icon className="w-8 h-8 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                                <span className="text-xs text-white/60 group-hover:text-white/90 font-titillium transition-colors duration-300">{label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
