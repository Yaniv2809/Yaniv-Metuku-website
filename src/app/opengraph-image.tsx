import { ImageResponse } from "next/og";

export const alt = "Yaniv Metuku — QA Automation Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
    const stats = [
        { value: "2", label: "PyPI Packages" },
        { value: "53", label: "Automated Tests" },
        { value: "4", label: "Testing Layers" },
    ];

    return new ImageResponse(
        (
            <div style={{ background: "#0a0a0a", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px", fontFamily: "monospace", position: "relative" }}>

                {/* Status badge */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e", display: "flex" }} />
                    <span style={{ color: "#9ca3af", fontSize: "14px", letterSpacing: "0.1em" }}>OPEN TO CONNECT</span>
                </div>

                {/* Name */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
                    <span style={{ fontSize: "72px", fontWeight: 800, color: "#ffffff", lineHeight: "1" }}>Yaniv</span>
                    <span style={{ fontSize: "72px", fontWeight: 800, color: "#06b6d4", lineHeight: "1" }}>Metuku</span>
                </div>

                {/* Title */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "48px" }}>
                    <span style={{ color: "#06b6d4", fontSize: "24px" }}>&gt;</span>
                    <span style={{ color: "#06b6d4", fontSize: "24px" }}>AI-Powered QA Automation Engineer</span>
                </div>

                {/* Stats */}
                <div style={{ display: "flex", gap: "24px" }}>
                    {stats.map((stat) => (
                        <div key={stat.label} style={{ display: "flex", flexDirection: "column", background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.2)", borderRadius: "12px", padding: "20px 28px" }}>
                            <span style={{ fontSize: "36px", fontWeight: 800, color: "#06b6d4" }}>{stat.value}</span>
                            <span style={{ fontSize: "12px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "4px" }}>{stat.label}</span>
                        </div>
                    ))}
                </div>

            </div>
        ),
        { ...size }
    );
}
