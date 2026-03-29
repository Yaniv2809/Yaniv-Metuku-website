"use client";

import { useEffect } from "react";

const COLORS = ["#00f5d4", "#06b6d4", "#a78bfa", "#f59e0b"];

export default function CursorTrail() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const particle = document.createElement("div");
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const size = Math.random() * 6 + 4;
      const drift = (Math.random() - 0.5) * 60;
      const duration = Math.random() * 600 + 600;

      particle.style.cssText = `
        position: fixed;
        left: ${e.clientX - size / 2}px;
        top: ${e.clientY - size / 2}px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${color};
        pointer-events: none;
        z-index: 9999;
        opacity: 0.8;
        animation: antiGravityRise ${duration}ms ease-out forwards;
        --drift: ${drift}px;
      `;

      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), duration);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <style>{`
      @keyframes antiGravityRise {
        0%   { transform: translate(0, 0) scale(1); opacity: 0.8; }
        100% { transform: translate(var(--drift), -80px) scale(0); opacity: 0; }
      }
    `}</style>
  );
}
