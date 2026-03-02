"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Trophy, Presentation, BookOpen, Users, Rocket } from "lucide-react";
import "../app/globals.css";

const activities = [
    {
        icon: Code,
        title: "Workshops",
        desc: "Hands-on coding sessions",
        color: "from-blue-400 to-cyan-400",
        borderColor: "hover:border-blue-400/40",
    },
    {
        icon: Trophy,
        title: "Competitions",
        desc: "Competitive programming & hackathons",
        color: "from-yellow-400 to-orange-400",
        borderColor: "hover:border-yellow-400/40",
    },
    {
        icon: Presentation,
        title: "Seminars",
        desc: "Technical deep-dives & talks",
        color: "from-pink-400 to-rose-400",
        borderColor: "hover:border-pink-400/40",
    },
    {
        icon: BookOpen,
        title: "Resources",
        desc: "Tools, docs, and learning materials",
        color: "from-purple-400 to-indigo-400",
        borderColor: "hover:border-purple-400/40",
    },
    {
        icon: Users,
        title: "Networking",
        desc: "Connect with industry professionals",
        color: "from-green-400 to-emerald-400",
        borderColor: "hover:border-green-400/40",
    },
    {
        icon: Rocket,
        title: "Career Development",
        desc: "Mentorship & professional growth",
        color: "from-red-400 to-pink-400",
        borderColor: "hover:border-red-400/40",
    },
];

const Activities = () => {
    return (
        <section className="relative mt-8 overflow-hidden h-auto py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,_rgba(34,197,94,0.05)_0%,_transparent_60%)] pointer-events-none" />

            <div className="relative w-11/12 max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-16 h-[3px] bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-12 origin-center"
                />
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-green-300 font-extrabold text-4xl md:text-5xl font-titillium text-center mb-16"
                >
                    Activities & Opportunities
                </motion.h1>

                {/* 2x3 Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {activities.map(({ icon: Icon, title, desc, color, borderColor }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.12 * i }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className={`bg-gradient-to-br from-white/8 to-white/[0.02] p-8 rounded-2xl border border-white/10 ${borderColor} transition-all duration-300 group cursor-pointer h-full flex flex-col`}
                        >
                            {/* Icon container */}
                            <motion.div
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg`}
                            >
                                <Icon className="w-8 h-8 text-black" />
                            </motion.div>

                            {/* Content */}
                            <h3 className="text-white font-extrabold text-2xl font-titillium mb-3 group-hover:scale-105 transition-transform duration-300">
                                {title}
                            </h3>
                            <p className="text-white/60 font-titillium text-base leading-6 flex-grow group-hover:text-white/80 transition-colors duration-300">
                                {desc}
                            </p>

                            {/* Hover indicator */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                                className="h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mt-6"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <p className="font-titillium text-lg leading-8 text-white/70">
                        We host regular workshops, coding competitions, guest lectures, and technical seminars across a broad spectrum of computing fields. Our members gain access to exclusive ACM resources, networking opportunities, and career development tools that help them grow personally and professionally.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Activities;