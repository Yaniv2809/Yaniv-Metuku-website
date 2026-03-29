"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { Terminal } from "lucide-react";

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    const skillCategories = [
        { title: "Test Automation", data: PORTFOLIO_DATA.skills.automation, color: "text-primary", border: "border-primary/30", bg: "hover:bg-primary/10" },
        { title: "API & Infrastructure", data: PORTFOLIO_DATA.skills.apiData, color: "text-success", border: "border-success/30", bg: "hover:bg-success/10" },
        { title: "AI Integration", data: PORTFOLIO_DATA.skills.ai, color: "text-warning", border: "border-warning/30", bg: "hover:bg-warning/10" },
        { title: "DevOps & Management", data: PORTFOLIO_DATA.skills.devops, color: "text-gray-300", border: "border-gray-500/30", bg: "hover:bg-gray-500/10" }
    ];

    return (
        <section id="skills" className="py-24 relative z-10 bg-gray-900/20">
            {/* Decorative Divider */}
            <div className="absolute top-0 left-0 w-full glow-divider"></div>

            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-16 text-center md:text-left flex flex-col items-center md:items-start">
                    <h2 className="text-3xl md:text-5xl font-bold font-mono text-white mb-3">Tech Arsenal</h2>
                    <div className="flex items-center gap-2 text-gray-400 font-mono bg-gray-900/50 px-4 py-2 rounded-md border border-gray-800">
                        <Terminal size={16} className="text-primary" />
                        <span>$ cat skills.json</span>
                    </div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            variants={itemVariants}
                            className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
                        >
                            <div className={`absolute top-0 left-0 w-1 h-full opacity-50 transition-all duration-300 group-hover:opacity-100 ${i === 0 ? "bg-primary" : i === 1 ? "bg-success" : i === 2 ? "bg-warning" : "bg-gray-500"
                                }`}></div>

                            <h3 className={`text-xl font-mono font-bold mb-6 ${cat.color}`}>
                                {cat.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {cat.data.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`px-4 py-2 text-sm font-mono rounded-lg border bg-gray-900/50 transition-colors cursor-default ${cat.border} ${cat.bg} hover:border-opacity-100`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
