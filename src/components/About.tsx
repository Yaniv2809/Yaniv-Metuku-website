"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { CheckCircle, Layers, TrendingUp, Bot } from "lucide-react";

// Helper component for animated numbers
const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const duration = 1800;
        const startTime = performance.now();
        const frame = (timestamp: number) => {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
    }, [isInView, value]);

    return <span ref={ref}>{displayValue}</span>;
}

export default function About() {
    const iconMap: Record<string, React.ReactNode> = {
        CheckCircle: <CheckCircle className="text-primary w-6 h-6 mb-3" />,
        Layers: <Layers className="text-success w-6 h-6 mb-3" />,
        TrendingUp: <TrendingUp className="text-warning w-6 h-6 mb-3" />,
        Bot: <Bot className="text-primary w-6 h-6 mb-3" />,
    };

    return (
        <section id="about" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row gap-16 items-center">

                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6 flex items-center gap-4">
                            <span className="w-12 h-1 bg-primary rounded-full"></span>
                            System Architecture & Mindset
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            {PORTFOLIO_DATA.about.description}
                        </p>
                    </motion.div>

                    {/* Right Column: Quick Stats Grid */}
                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                        {PORTFOLIO_DATA.about.stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-panel p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors group"
                            >
                                {iconMap[stat.icon]}
                                <div className="text-4xl font-bold font-mono text-white mb-2 group-hover:text-primary transition-colors">
                                    <AnimatedNumber value={stat.number} />
                                    {stat.suffix}
                                </div>
                                <div className="text-sm text-gray-400 font-mono tracking-wide uppercase">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
