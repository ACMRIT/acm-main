"use client";
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Handshake, Zap } from "lucide-react";
import "../app/globals.css";

const pillars = [
    {
        icon: Lightbulb,
        title: "Inspire Curiosity",
        color: "from-yellow-400 to-orange-400",
        borderColor: "hover:border-yellow-400/40",
        textColor: "text-yellow-300",
    },
    {
        icon: Handshake,
        title: "Foster Collaboration",
        color: "from-pink-400 to-rose-400",
        borderColor: "hover:border-pink-400/40",
        textColor: "text-pink-300",
    },
    {
        icon: Zap,
        title: "Empower Leaders",
        color: "from-cyan-400 to-blue-400",
        borderColor: "hover:border-cyan-400/40",
        textColor: "text-cyan-300",
    },
];

const missionText = [
    "The RIT ACM Student Chapter aims to empower students by bridging academic learning with real-world applications.",
    "Our mission is to inspire curiosity, foster collaboration, and encourage leadership within the computing community.",
    "We provide a platform for students to connect with industry experts, participate in hands-on projects, and stay updated on the latest advancements in the field.",
];

const Ourmission = () => {
    return (
        <section className="relative mt-8 overflow-hidden h-auto py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(236,72,153,0.06)_0%,_transparent_60%)] pointer-events-none" />

            <div className="relative w-11/12 max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-16 h-[3px] bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-12 origin-center"
                />
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-pink-300 font-extrabold text-4xl md:text-5xl font-titillium text-center mb-16"
                >
                    Our Mission
                </motion.h1>

                {/* Three Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {pillars.map(({ icon: Icon, title, color, borderColor, textColor }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 * i }}
                            className={`bg-gradient-to-br from-white/5 to-white/[0.02] p-8 rounded-2xl border border-white/10 ${borderColor} transition-all duration-300 group text-center`}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}
                            >
                                <Icon className="w-8 h-8 text-black" />
                            </motion.div>
                            <h3 className={`${textColor} font-extrabold text-2xl font-titillium group-hover:scale-105 transition-transform duration-300`}>
                                {title}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                {/* Mission description paragraphs */}
                <div className="max-w-4xl mx-auto space-y-6">
                    {missionText.map((text, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 * i }}
                            className="font-titillium text-lg leading-8 text-white/70 bg-gradient-to-r from-white/5 to-transparent p-6 rounded-xl border border-left-2 border-pink-500/30"
                        >
                            {text}
                        </motion.p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ourmission;
