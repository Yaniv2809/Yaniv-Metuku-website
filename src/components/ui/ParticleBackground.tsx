"use client";

import { useEffect, useState, memo } from "react";

const ParticleBackground = memo(() => {
    const [particles, setParticles] = useState<Array<{ id: number; top: number; left: number; duration: number }>>([]);

    useEffect(() => {
        // Check for reduced motion
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        // Generate random particles (very subtle quantity)
        const particleCount = 25;
        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            duration: 15 + Math.random() * 20, // 15-35s duration
        }));

        setParticles(newParticles);
    }, []);

    if (particles.length === 0) return null;

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen opacity-30">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute w-1 h-1 bg-primary rounded-full animate-drift"
                    style={{
                        top: `${p.top}%`,
                        left: `${p.left}%`,
                        animationDuration: `${p.duration}s`,
                        animationTimingFunction: 'linear',
                        animationIterationCount: 'infinite',
                        animationDirection: 'alternate'
                    }}
                />
            ))}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes drift {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.2; }
          50% { opacity: 0.7; }
          100% { transform: translateY(-50px) translateX(20px) scale(1.5); opacity: 0.1; }
        }
      `}} />
        </div>
    );
});

ParticleBackground.displayName = "ParticleBackground";
export default ParticleBackground;
