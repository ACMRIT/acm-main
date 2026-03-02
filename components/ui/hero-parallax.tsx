"use client";
import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const HeroParallax = ({
    products,
}: {
    products: {
        id: number;
        thumbnail: string;
    }[];
}) => {
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState<number | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setPrev(current);
            setCurrent((c) => (c + 1) % products.length);
        }, 5000);
        return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current, products.length]);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">

            {/* Previous image — fades out */}
            <AnimatePresence>
                {prev !== null && (
                    <motion.div
                        key={`prev-${prev}`}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <Image
                            src={products[prev].thumbnail}
                            alt="hero-prev"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Current image — fades in with Ken Burns zoom */}
            <motion.div
                key={`curr-${current}`}
                initial={{ opacity: 0, scale: 1.0 }}
                animate={{ opacity: 1, scale: 1.08 }}
                transition={{
                    opacity: { duration: 1.5, ease: "easeInOut" },
                    scale: { duration: 6, ease: "linear" },
                }}
                className="absolute inset-0 z-10"
            >
                <Image
                    src={products[current].thumbnail}
                    alt="hero"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/65 via-black/25 to-black/75" />

            {/* Text content */}
            <div className="absolute inset-0 z-30 flex items-center px-8 sm:px-16 md:px-24">
                <Header />
            </div>

            {/* Dot / pill indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 items-center">
                {products.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => { setPrev(current); setCurrent(i); }}
                        className={`rounded-full transition-all duration-500 ${
                            i === current
                                ? "bg-white w-6 h-2"
                                : "bg-white/40 w-2 h-2 hover:bg-white/70"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export const Header = () => {
    const [text] = useTypewriter({
        words: [
            "Where learning meets leading.",
            "Drive tech forward.",
            "Building a brighter future through innovation.",
            "Transform ideas into innovation.",
            "Elevate ideas into impact.",
            "Turn passion into progress.",
            "Turn challenges into breakthroughs.",
            "Crafting solutions, creating legacies.",
            "Step up, innovate, and lead.",
        ],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 30,
        delaySpeed: 5000,
    });

    return (
        <div className="max-w-7xl w-full">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-white"
            >
                Here at
                <span className="text-red-500 font-extrabold font-titillium"> RIT</span>{" "}
                <span className="text-blue-400 font-extrabold font-titillium">ACM</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="max-w-2xl text-2xl sm:text-3xl md:text-5xl mt-6 font-titillium font-semibold text-white/90"
            >
                {text}
                <Cursor cursorStyle="|" />
            </motion.p>
        </div>
    );
};