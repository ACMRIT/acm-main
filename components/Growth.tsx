"use client"
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BrainCircuit, Shield, Database, Terminal, Presentation, Network } from 'lucide-react';

const iconItems = [
    { icon: BrainCircuit, label: "AI / ML",        color: "text-purple-400", border: "hover:border-purple-400/40" },
    { icon: Shield,       label: "Cybersecurity",  color: "text-red-400",    border: "hover:border-red-400/40"    },
    { icon: Database,     label: "Data Science",   color: "text-yellow-400", border: "hover:border-yellow-400/40" },
    { icon: Terminal,     label: "Competitive",    color: "text-green-400",  border: "hover:border-green-400/40"  },
    { icon: Presentation, label: "Guest Lectures", color: "text-blue-400",   border: "hover:border-blue-400/40"   },
    { icon: Network,      label: "Networking",     color: "text-cyan-400",   border: "hover:border-cyan-400/40"   },
];

const Growth = () => {
    return (
        <section className="bg-gradient-to-b from-[#060c3a] to-black text-gray-100 relative overflow-hidden py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(239,68,68,0.07)_0%,_transparent_60%)] pointer-events-none" />

            <div className="relative w-11/12 max-w-[1080px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="font-extrabold text-2xl sm:text-3xl md:text-6xl text-blue-300 font-titillium leading-[1.2]"
                >
                    Explore, engage, and<br />elevate with{' '}
                    <span className="text-red-500">RIT&apos;s</span>{' '}
                    <span className="text-white">activities</span>
                </motion.h2>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-16 h-[3px] bg-gradient-to-r from-red-500 to-blue-400 mt-4 mb-10 origin-left"
                />

                <div className="w-full flex justify-between gap-12 relative py-4 flex-col lg:flex-row items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex flex-col justify-between w-full space-y-8"
                    >
                        <div className="w-10 h-[3px] bg-gradient-to-r from-red-500 to-blue-400 rounded-full"></div>
                        <p className="font-titillium text-[18px] leading-7 text-white/70">
                            We host regular workshops, coding competitions, guest lectures, and technical seminars that cover a broad spectrum of computing fields, from artificial intelligence and machine learning to cybersecurity and data science. Our members gain access to exclusive ACM resources, networking opportunities, and career development tools that help them grow personally and professionally.
                        </p>
                        <div className="flex items-center cursor-pointer group w-fit">
                            <Link href="/aboutus" className="font-mullish font-bold text-blue-300 group-hover:text-white transition-all duration-200">
                                Know More
                            </Link>
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
                        {iconItems.map(({ icon: Icon, label, color, border }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.12 * i }}
                                className={`flex flex-col items-center justify-center gap-2 w-28 h-28 rounded-2xl bg-white/5 border border-white/10 ${border} hover:bg-white/10 transition-all duration-300 group`}
                            >
                                <Icon className={`w-8 h-8 ${color} transition-colors duration-300`} />
                                <span className="text-xs text-white/60 group-hover:text-white/90 font-titillium transition-colors duration-300 text-center px-1">{label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Growth;