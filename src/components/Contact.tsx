"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { GitBranch, Link2, Mail, ExternalLink, Terminal } from "lucide-react";

const links = [
    {
        icon: <Mail className="w-5 h-5" />,
        label: "Email",
        value: PORTFOLIO_DATA.personalInfo.email,
        href: `mailto:${PORTFOLIO_DATA.personalInfo.email}`,
        color: "text-primary",
        border: "border-primary/30",
        hover: "hover:border-primary hover:bg-primary/5"
    },
    {
        icon: <Link2 className="w-5 h-5" />,
        label: "LinkedIn",
        value: "linkedin.com/in/yaniv-metuku",
        href: PORTFOLIO_DATA.personalInfo.linkedin,
        color: "text-blue-400",
        border: "border-blue-400/30",
        hover: "hover:border-blue-400 hover:bg-blue-400/5"
    },
    {
        icon: <GitBranch className="w-5 h-5" />,
        label: "GitHub",
        value: "github.com/Yaniv2809",
        href: PORTFOLIO_DATA.personalInfo.github,
        color: "text-gray-300",
        border: "border-gray-600/30",
        hover: "hover:border-gray-400 hover:bg-gray-400/5"
    },
    {
        icon: <ExternalLink className="w-5 h-5" />,
        label: "Allure Reports",
        value: "Financial Integrity Ecosystem",
        href: "https://yaniv2809.github.io/Financial-Integrity-Ecosystem/",
        color: "text-success",
        border: "border-success/30",
        hover: "hover:border-success hover:bg-success/5"
    },
    {
        icon: <Terminal className="w-5 h-5" />,
        label: "PyPI — failscope",
        value: "pypi.org/project/failscope",
        href: "https://pypi.org/project/failscope/",
        color: "text-warning",
        border: "border-warning/30",
        hover: "hover:border-warning hover:bg-warning/5"
    },
    {
        icon: <Terminal className="w-5 h-5" />,
        label: "PyPI — fixtureforge",
        value: "pypi.org/project/fixtureforge",
        href: "https://pypi.org/project/fixtureforge/",
        color: "text-warning",
        border: "border-warning/30",
        hover: "hover:border-warning hover:bg-warning/5"
    }
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative z-10 bg-gray-900/20">
            <div className="absolute top-0 left-0 w-full glow-divider"></div>

            <div className="max-w-4xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-mono text-white mb-4">
                        Let&apos;s Connect
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12">
                        Open to QA Automation roles and freelance testing projects. Reach out directly or check out my live work below.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {links.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("mailto") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ duration: 0.4, delay: index * 0.07 }}
                            className={`glass-panel flex items-center gap-4 p-5 rounded-xl border transition-all duration-200 group ${link.border} ${link.hover}`}
                        >
                            <span className={`${link.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                {link.icon}
                            </span>
                            <div className="text-left min-w-0">
                                <div className={`font-mono text-sm font-bold ${link.color}`}>{link.label}</div>
                                <div className="text-gray-400 text-xs font-mono truncate">{link.value}</div>
                            </div>
                            <ExternalLink size={12} className="ml-auto text-gray-600 group-hover:text-gray-400 flex-shrink-0" />
                        </motion.a>
                    ))}
                </div>

            </div>
        </section>
    );
}
