import { Terminal, GitBranch, Link2, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

export default function Footer() {
    const year = new Date().getFullYear();

    const socialLinks = [
        { icon: <GitBranch size={16} />, href: PORTFOLIO_DATA.personalInfo.github, label: "GitHub" },
        { icon: <Link2 size={16} />, href: PORTFOLIO_DATA.personalInfo.linkedin, label: "LinkedIn" },
        { icon: <Mail size={16} />, href: `mailto:${PORTFOLIO_DATA.personalInfo.email}`, label: "Email" },
    ];

    return (
        <footer className="py-8 border-t border-gray-800/50 relative z-10 glass-panel">
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

                <a href="#" className="flex items-center gap-2 group">
                    <Terminal className="text-primary w-5 h-5 group-hover:animate-pulse" />
                    <span className="font-mono text-sm font-bold tracking-tighter">
                        Yaniv<span className="text-primary">.qa</span>
                    </span>
                </a>

                <div className="flex items-center gap-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("mailto") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="text-gray-500 hover:text-primary transition-colors"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <p className="font-mono text-xs text-gray-600">
                    © {year} Yaniv Metuku · Built with Next.js &amp; Tailwind
                </p>

            </div>
        </footer>
    );
}
