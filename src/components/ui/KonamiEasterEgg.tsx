"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";

const KONAMI_CODE = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
];

export default function KonamiEasterEgg() {
    const [inputSequence, setInputSequence] = useState<string[]>([]);
    const [triggered, setTriggered] = useState(false);
    const [currentStage, setCurrentStage] = useState<"idle" | "fail" | "pass">("idle");

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (triggered) return;

            const newSequence = [...inputSequence, e.key];
            if (newSequence.length > KONAMI_CODE.length) {
                newSequence.shift();
            }

            setInputSequence(newSequence);

            if (newSequence.join(",") === KONAMI_CODE.join(",")) {
                triggerEasterEgg();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [inputSequence, triggered]);

    const triggerEasterEgg = () => {
        setTriggered(true);
        setCurrentStage("fail");

        // Broadcast event for the dashboard to react
        window.dispatchEvent(new CustomEvent("konami-triggered"));

        setTimeout(() => {
            setCurrentStage("pass");

            setTimeout(() => {
                setTriggered(false);
                setCurrentStage("idle");
                setInputSequence([]);
                window.dispatchEvent(new CustomEvent("konami-resolved"));
            }, 3000);
        }, 3000);
    };

    return (
        <AnimatePresence>
            {triggered && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.3 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                    className="fixed bottom-8 right-8 z-[100] p-4 rounded-xl border-2 flex items-center gap-4 glass-panel shadow-2xl overflow-hidden"
                    style={{
                        borderColor: currentStage === 'fail' ? '#EF4444' : '#10B981',
                        color: currentStage === 'fail' ? '#EF4444' : '#10B981',
                    }}
                >
                    {currentStage === "fail" ? (
                        <>
                            <motion.div
                                animate={{ rotate: [-10, 10, -10, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 0.5 }}
                            >
                                <AlertTriangle size={32} strokeWidth={2.5} />
                            </motion.div>
                            <div>
                                <h3 className="font-mono font-bold text-lg">CRITICAL FAILURE</h3>
                                <p className="font-mono text-sm opacity-80">All pipelines failing...</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1.2, 1] }}
                                transition={{ duration: 0.5 }}
                            >
                                <CheckCircle size={32} strokeWidth={2.5} />
                            </motion.div>
                            <div>
                                <h3 className="font-mono font-bold text-lg">JUST KIDDING</h3>
                                <p className="font-mono text-sm opacity-80 text-[#10B981]">All systems operational.</p>
                            </div>
                        </>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
