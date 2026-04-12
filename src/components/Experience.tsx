"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { Briefcase, GraduationCap, ChevronRight, Users } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative z-10">
            <div className="absolute top-0 left-0 w-full glow-divider"></div>
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-mono text-white mb-4 flex items-center gap-3">
                        <Briefcase className="text-primary w-10 h-10" />
                        Experience & Education
                    </h2>
                    <p className="text-gray-400 font-sans max-w-2xl text-lg">
                        A track record built on operational discipline, technical training, and independent engineering.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gray-800 hidden sm:block"></div>

                    <div className="flex flex-col gap-8">
                        {PORTFOLIO_DATA.experience.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative flex gap-6 sm:gap-10"
                            >
                                {/* Icon dot on timeline */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 ${
                                        item.type === "education"
                                            ? "border-warning bg-warning/10"
                                            : item.type === "volunteer"
                                            ? "border-violet-500 bg-violet-500/10"
                                            : "border-primary bg-primary/10"
                                    }`}>
                                        {item.type === "education"
                                            ? <GraduationCap className="text-warning w-5 h-5 md:w-6 md:h-6" />
                                            : item.type === "volunteer"
                                            ? <Users className="text-violet-400 w-5 h-5 md:w-6 md:h-6" />
                                            : <Briefcase className="text-primary w-5 h-5 md:w-6 md:h-6" />
                                        }
                                    </div>
                                </div>

                                {/* Content card */}
                                <div className="glass-panel rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-primary/30 transition-colors flex-1 group">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold font-mono text-white group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm font-mono text-primary/80">{item.company}</p>
                                        </div>
                                        <span className="text-xs font-mono px-3 py-1 rounded-full border border-gray-700 text-gray-400 whitespace-nowrap self-start sm:self-auto">
                                            {item.date}
                                        </span>
                                    </div>

                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>

                                    <ul className="space-y-1.5">
                                        {item.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                <ChevronRight size={14} className="text-primary mt-0.5 flex-shrink-0" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
