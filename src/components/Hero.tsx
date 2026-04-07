"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolio";
import TestDashboard from "./TestDashboard";

export default function Hero() {
    const [typedTitle, setTypedTitle] = useState("");
    const fullTitle = PORTFOLIO_DATA.personalInfo.title;

    useEffect(() => {
        // Typewriter effect for the title
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullTitle.length) {
                setTypedTitle(fullTitle.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 60);

        return () => clearInterval(typingInterval);
    }, [fullTitle]);

    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Left Column: Text */}
                <div className="w-full lg:w-3/5 z-10 flex flex-col items-start pt-10 lg:pt-0">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex flex-row items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--grid-color)] glass-panel mb-8"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-gray-300">
                            Open to connect
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
                        style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                        {PORTFOLIO_DATA.personalInfo.name.split(" ")[0]} <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
                            {PORTFOLIO_DATA.personalInfo.name.split(" ")[1]}
                        </span>
                    </motion.h1>

                    <div className="h-10 md:h-12 mb-6">
                        <h2 className="text-xl md:text-2xl font-mono text-primary flex items-center">
                            <span className="text-primary mr-2">&gt;</span>
                            {typedTitle}
                            <span className="ml-1 w-2.5 h-6 bg-primary animate-pulse inline-block"></span>
                        </h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.2, duration: 1 }} // Fades in after typing mostly finishes
                        className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed"
                    >
                        {PORTFOLIO_DATA.personalInfo.tagline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3.5 rounded-lg bg-primary text-background font-bold tracking-wide hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            View Projects
                        </a>
                        <a
                            href={PORTFOLIO_DATA.personalInfo.cvDownloadLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3.5 rounded-lg border border-primary text-primary font-bold tracking-wide hover:bg-primary/10 transition-all duration-300"
                        >
                            Download CV
                        </a>
                    </motion.div>

                </div>

                {/* Right Column: Dashboard Widget */}
                <div className="w-full lg:w-2/5 z-10 hidden md:block">
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    >
                        <TestDashboard />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
