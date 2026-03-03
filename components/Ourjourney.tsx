"use client";
import React from "react";
import { motion } from "framer-motion";
import "../app/globals.css";

const Ourjourney = () => {
    return (
        <section className="relative mt-8 overflow-hidden h-auto py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(139,92,246,0.06)_0%,_transparent_60%)] pointer-events-none" />

            <div className="relative w-11/12 max-w-[1200px] mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-purple-300 font-extrabold text-4xl md:text-5xl font-titillium text-center mb-16"
                >
                    Our Journey
                </motion.h1>

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
