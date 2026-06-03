"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { ShieldCheck, ExternalLink, Activity, BookOpen } from "lucide-react";

// Badge colour → Tailwind class map (must be static strings for Tailwind JIT)
const badgeClasses: Record<string, string> = {
    sky:     "border-sky-400 text-sky-400 bg-sky-400/10",
    amber:   "border-amber-400 text-amber-400 bg-amber-400/10",
    emerald: "border-emerald-400 text-emerald-400 bg-emerald-400/10",
    violet:  "border-violet-400 text-violet-400 bg-violet-400/10",
};

const accentClasses: Record<string, string> = {
    sky:     "bg-sky-400/5 group-hover:bg-sky-400/10",
    amber:   "bg-amber-400/5 group-hover:bg-amber-400/10",
    emerald: "bg-emerald-400/5 group-hover:bg-emerald-400/10",
    violet:  "bg-violet-400/5 group-hover:bg-violet-400/10",
};

export default function NetworkSecurityProjects() {
    return (
        <section id="network-security-projects" className="py-24 relative z-10 bg-gray-900/20">
            <div className="absolute top-0 left-0 w-full glow-divider" />

            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-mono text-white mb-4 flex items-center gap-3">
                        <ShieldCheck className="text-primary w-10 h-10" />
                        Network &amp; Security QA Lab
                    </h2>
                    <p className="text-gray-400 font-sans max-w-3xl text-lg">
                        Hands-on quality engineering across VPN infrastructure, packet analysis, and
                        network-probe APIs — built to validate the real-world behaviour of network
                        and security systems.
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    {PORTFOLIO_DATA.networkSecurityProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden group border border-gray-800 hover:border-gray-700 transition-all"
                        >
                            {/* Corner accent */}
                            <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full -z-10 transition-colors ${accentClasses[project.badgeColor] ?? "bg-primary/5 group-hover:bg-primary/10"}`} />

                            <div className="flex flex-col md:flex-row gap-8 justify-between">

                                {/* Left — project info */}
                                <div className="flex-1">
                                    {/* Badge */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`px-3 py-1 text-xs font-mono font-bold uppercase rounded-full border ${badgeClasses[project.badgeColor] ?? "border-primary text-primary bg-primary/10"}`}>
                                            {project.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 font-mono">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Technical Highlights */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                            <Activity size={14} /> Technical Highlights
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.highlights.map((h, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                    <span className="text-primary mt-1 flex-shrink-0">▹</span>
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.techStack.map(tech => (
                                            <span key={tech} className="px-3 py-1 font-mono text-xs bg-gray-900 rounded-md text-gray-300 border border-gray-800">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-wrap gap-4">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:underline hover:text-white transition-colors"
                                        >
                                            View Source Code <ExternalLink size={14} />
                                        </a>
                                        <a
                                            href={project.allureUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-success font-mono text-sm hover:underline hover:text-white transition-colors"
                                        >
                                            Allure Report <BookOpen size={14} />
                                        </a>
                                    </div>
                                </div>

                                {/* Right — metrics */}
                                <div className="w-full md:w-1/3 flex flex-col gap-4">
                                    <div className="bg-gray-900/60 rounded-xl p-6 border border-gray-800 h-full">
                                        <h4 className="font-mono text-sm text-gray-500 mb-4 uppercase tracking-widest">
                                            Live Metrics
                                        </h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {project.metrics.map(metric => (
                                                <div key={metric.label}>
                                                    <div className="text-2xl font-bold font-mono text-white mb-1">
                                                        {metric.value}
                                                    </div>
                                                    <div className="text-xs text-gray-500 font-mono tracking-wide">
                                                        {metric.label}
                                                    </div>
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
