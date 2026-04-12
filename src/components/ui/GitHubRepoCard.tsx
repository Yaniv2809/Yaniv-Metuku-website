"use client";

import { useEffect, useState } from "react";
import { Star, GitFork, Eye, CircleDot, Clock, Tag } from "lucide-react";

interface RepoData {
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
    open_issues_count: number;
    language: string | null;
    pushed_at: string;
    topics: string[];
    default_branch: string;
}

const LANGUAGE_COLORS: Record<string, string> = {
    Python: "#3572A5",
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Go: "#00ADD8",
    Rust: "#dea584",
    Java: "#b07219",
    Shell: "#89e051",
};

function timeAgo(dateStr: string): string {
    const diff = Date.now() - new Date(dateStr).getTime();
    const days = Math.floor(diff / 86400000);
    if (days === 0) return "today";
    if (days === 1) return "yesterday";
    if (days < 30) return `${days} days ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;
    const years = Math.floor(months / 12);
    return `${years} year${years > 1 ? "s" : ""} ago`;
}

export default function GitHubRepoCard({ githubUrl }: { githubUrl: string }) {
    const [data, setData] = useState<RepoData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Extract owner/repo from URL
        const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) { setLoading(false); return; }
        const [, owner, repo] = match;

        fetch(`https://api.github.com/repos/${owner}/${repo}`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { setData(d); setLoading(false); })
            .catch(() => setLoading(false));
    }, [githubUrl]);

    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    const repoPath = match ? `${match[1]}/${match[2]}` : "";
    const langColor = data?.language ? (LANGUAGE_COLORS[data.language] ?? "#8b949e") : "#8b949e";

    return (
        <div className="mt-6 pt-6 border-t border-gray-800/60">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-4 font-mono text-xs text-gray-500">
                <span className="text-primary">$</span>
                <span>gh repo view <span className="text-gray-300">{repoPath}</span></span>
                {!loading && data && (
                    <span className="ml-auto flex items-center gap-1 text-gray-600">
                        <Clock size={11} />
                        pushed {timeAgo(data.pushed_at)}
                    </span>
                )}
            </div>

            {loading ? (
                /* Skeleton */
                <div className="flex flex-wrap gap-6 animate-pulse">
                    {[80, 60, 70, 90].map((w, i) => (
                        <div key={i} className="h-4 bg-gray-800 rounded" style={{ width: `${w}px` }} />
                    ))}
                </div>
            ) : data ? (
                <div className="flex flex-col gap-4">
                    {/* Stats row */}
                    <div className="flex flex-wrap gap-5">
                        <a
                            href={`${githubUrl}/stargazers`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-mono text-gray-400 hover:text-warning transition-colors group"
                        >
                            <Star size={14} className="group-hover:fill-warning group-hover:text-warning transition-all" />
                            <span className="text-white font-bold">{data.stargazers_count}</span>
                            <span className="text-gray-500">stars</span>
                        </a>

                        <a
                            href={`${githubUrl}/forks`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-mono text-gray-400 hover:text-primary transition-colors"
                        >
                            <GitFork size={14} />
                            <span className="text-white font-bold">{data.forks_count}</span>
                            <span className="text-gray-500">forks</span>
                        </a>

                        <div className="flex items-center gap-1.5 text-sm font-mono text-gray-400">
                            <Eye size={14} />
                            <span className="text-white font-bold">{data.watchers_count}</span>
                            <span className="text-gray-500">watching</span>
                        </div>

                        <a
                            href={`${githubUrl}/issues`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-mono text-gray-400 hover:text-success transition-colors"
                        >
                            <CircleDot size={14} />
                            <span className="text-white font-bold">{data.open_issues_count}</span>
                            <span className="text-gray-500">open issues</span>
                        </a>

                        {data.language && (
                            <div className="flex items-center gap-1.5 text-sm font-mono text-gray-400 ml-auto">
                                <span
                                    className="w-3 h-3 rounded-full flex-shrink-0"
                                    style={{ background: langColor }}
                                />
                                <span className="text-gray-300">{data.language}</span>
                            </div>
                        )}
                    </div>

                    {/* Topics */}
                    {data.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            <Tag size={12} className="text-gray-600 mt-0.5 flex-shrink-0" />
                            {data.topics.map(topic => (
                                <a
                                    key={topic}
                                    href={`https://github.com/topics/${topic}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                                >
                                    {topic}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <p className="text-xs font-mono text-gray-600">github stats unavailable</p>
            )}
        </div>
    );
}
