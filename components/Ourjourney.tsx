"use client";
import React from "react";
import { motion } from "framer-motion";
import "../app/globals.css";

const timelineEvents = [
    { date: "March 9", event: "Pre-Prospective", desc: "Journey Begins" },
    { date: "March 15", event: "Prospective", desc: "Rapid Growth" },
    { date: "March 24", event: "Officially Chartered", desc: "Recognition" },
    { date: "Present", event: "Leading Strong", desc: "Growing Community" },
];

const Ourjourney = () => {
    return (
        <section className="relative mt-8 overflow-hidden h-auto py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(139,92,246,0.06)_0%,_transparent_60%)] pointer-events-none" />

            <div className="relative w-11/12 max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-16 h-[3px] bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-12 origin-center"
                />
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-purple-300 font-extrabold text-4xl md:text-5xl font-titillium text-center mb-16"
                >
                    Our Journey
                </motion.h1>

                {/* Horizontal Timeline */}
                <div className="relative px-4 py-12">
                    {/* Timeline line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 origin-left"
                    />

                    {/* Timeline events */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {timelineEvents.map((item, i) => (
                            <motion.div
                                key={item.date}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.15 * i }}
                                className="flex flex-col items-center"
                            >
                                {/* Dot on timeline */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.15 * i + 0.3 }}
                                    className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 mb-6 border-4 border-black/50 shadow-lg shadow-purple-500/50"
                                />

                                {/* Content card */}
                                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-xl border border-white/10 hover:border-purple-400/40 transition-all duration-300 text-center w-full group">
                                    <h3 className="text-purple-300 font-extrabold text-xl font-titillium mb-2 group-hover:text-purple-200 transition-colors">
                                        {item.date}
                                    </h3>
                                    <p className="text-lg font-semibold text-white/90 mb-2">{item.event}</p>
                                    <p className="text-sm text-white/60">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-16 max-w-3xl mx-auto bg-gradient-to-br from-white/5 to-white/[0.02] p-8 rounded-2xl border border-white/10"
                >
                    <p className="font-titillium text-[18px] leading-8 text-white/70">
                        Our journey began on March 9, 2023, as a pre-prospective chapter, rapidly advancing to prospective status on March 15, 2023, before being formally chartered on March 24, 2023. Since then, we have committed ourselves to providing high-quality resources, professional development opportunities, and a supportive environment that nurtures both academic and practical skills in computing.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Ourjourney;
