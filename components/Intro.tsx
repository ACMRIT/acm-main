"use client";
import React from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Award, Zap, Users, Bookmark, Sparkles, GitBranch } from "lucide-react";
import "../app/globals.css";

const iconItems = [
    { icon: Award,     label: "Founded 2023"  },
    { icon: Zap,       label: "Active" },
    { icon: Users,     label: "Growing" },
    { icon: Bookmark,  label: "Chartered" },
    { icon: Sparkles,  label: "Innovative" },
    { icon: GitBranch, label: "Global ACM" },
];

const Intro = () => {
    return (
        <section className="relative overflow-hidden h-auto py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.08)_0%,_transparent_60%)] pointer-events-none" />
            
            <div className="relative w-11/12 max-w-[1080px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="font-extrabold text-2xl sm:text-3xl md:text-6xl text-blue-300 font-titillium leading-[1.2] text-center"
                >
                    About Us
                </motion.h2>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-16 h-[3px] bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-4 mb-10 origin-center"
                />

                <div className="w-full flex gap-10 relative py-4 flex-col lg:flex-row items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex flex-col justify-between w-full space-y-8 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-2xl border border-white/10"
                    >
                        <h1 className="text-blue-300 font-extrabold text-2xl sm:text-3xl md:text-4xl font-titillium leading-[1.2]">About ACM — Student Chapter</h1>
                        <div className="w-10 h-[3px] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                        <p className="font-titillium text-[18px] leading-7 text-white/70">
                            Welcome to the Ramaiah Institute of Technology (RIT) Student Chapter of the Association for Computing Machinery (ACM). Founded on March 24, 2023, by Ms. Jamuna S Murthy, Assistant Professor, Department of Computer Science and Engineering. The RIT ACM Student Chapter stands as a vibrant community dedicated to advancing computing knowledge, fostering innovation, and building a collaborative space for students with a passion for technology. Officially recognized under Group ID: 192244, we are proud to be an active chapter within ACM, the world's largest computing society.
                        </p>
                        <div className="flex flex-row items-center space-x-4">
                            <button className="bg-blue-600 w-fit text-white py-3 px-5 rounded-lg font-mullish font-bold hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-900/40">
                                <Link href={'/#joinus'}>
                                    Join Us Now
                                </Link>
                            </button>
                            <div className="flex items-center cursor-pointer group">
                                <Link href="#" className="font-mullish font-bold text-blue-300 group-hover:text-white transition-all duration-200">
                                    Know More
                                </Link>
                                <FiChevronRight className="w-5 h-5 text-blue-400 group-hover:text-white transition-all duration-200" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Icon grid */}
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
                                <span className="text-xs text-white/60 group-hover:text-white/90 font-titillium transition-colors duration-300 text-center">{label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
