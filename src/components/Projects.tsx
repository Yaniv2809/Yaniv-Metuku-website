"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { FolderGit2, ExternalLink, Activity } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-mono text-white mb-4 flex items-center gap-3">
                        <FolderGit2 className="text-primary w-10 h-10" />
                        Featured Automations
                    </h2>
                    <p className="text-gray-400 font-sans max-w-2xl text-lg">
                        Real-world testing architectures built to intercept failures before they reach production.
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    {PORTFOLIO_DATA.projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden group border border-gray-800 hover:border-[var(--grid-color)] transition-all"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors"></div>

                            <div className="flex flex-col md:flex-row gap-8 justify-between">

                                {/* Project Info */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`px-3 py-1 text-xs font-mono font-bold uppercase rounded-full border border-${project.badgeColor} text-${project.badgeColor} bg-${project.badgeColor}/10`}>
                                            {project.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 font-mono">{project.title}</h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                            <Activity size={14} /> Architecture Highlights
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.architectureHighlights.map((highlight, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                    <span className="text-primary mt-1">▹</span> {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.techStack.map(tech => (
                                            <span key={tech} className="px-3 py-1 font-mono text-xs bg-gray-900 rounded-md text-gray-300 border border-gray-800">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:underline hover:text-white transition-colors"
                                    >
                                        View Source Code <ExternalLink size={14} />
                                    </a>
                                </div>

                                {/* Project Metrics / Diagram Fallback */}
                                <div className="w-full md:w-1/3 flex flex-col gap-4">
                                    <div className="bg-gray-900/60 rounded-xl p-6 border border-gray-800 h-full">
                                        <h4 className="font-mono text-sm text-gray-500 mb-4 uppercase tracking-widest">Live Metrics</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {project.metrics.map(metric => (
                                                <div key={metric.label}>
                                                    <div className="text-2xl font-bold font-mono text-white mb-1">{metric.value}</div>
                                                    <div className="text-xs text-gray-500 font-mono tracking-wide">{metric.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
