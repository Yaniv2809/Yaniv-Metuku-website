"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, XCircle, TerminalSquare } from "lucide-react";

interface TestResult {
    id: string;
    name: string;
    status: "pending" | "passed" | "failed" | "warning";
    duration: number;
}

const INITIAL_TESTS: TestResult[] = [
    { id: "t1", name: "API Authentication Flow", status: "pending", duration: 0.34 },
    { id: "t2", name: "Database Integrity Check", status: "pending", duration: 1.12 },
    { id: "t3", name: "Cross-Layer Data Validation", status: "pending", duration: 0.87 },
    { id: "t4", name: "CI/CD Pipeline Trigger", status: "pending", duration: 2.01 },
    { id: "t5", name: "Performance SLA Threshold", status: "pending", duration: 3.45 },
    { id: "t6", name: "AI Failure Classification", status: "pending", duration: 0.56 },
];

export default function TestDashboard() {
    const [tests, setTests] = useState<TestResult[]>(INITIAL_TESTS);
    const [progress, setProgress] = useState(0);
    const [isKonamiActive, setIsKonamiActive] = useState(false);

    useEffect(() => {
        // Regular execution simulation
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += 2.5;
            setProgress(Math.min(currentProgress, 100));

            if (currentProgress >= 100) {
                clearInterval(interval);
            }
        }, 100);

        // Staggered test appearance
        const timeouts: NodeJS.Timeout[] = [];

        // Reset statuses
        setTests(prev => prev.map(t => ({ ...t, status: "pending" })));

        // Schedule each test resolution
        timeouts.push(setTimeout(() => updateTestStatus("t1", "passed"), 600));
        timeouts.push(setTimeout(() => updateTestStatus("t2", "passed"), 1400));
        timeouts.push(setTimeout(() => updateTestStatus("t3", "passed"), 2100));
        timeouts.push(setTimeout(() => updateTestStatus("t4", "passed"), 2800));
        timeouts.push(setTimeout(() => updateTestStatus("t5", "warning"), 3300));
        timeouts.push(setTimeout(() => updateTestStatus("t6", "passed"), 4000));

        // Handle Easter Egg
        const handleKonami = () => {
            setIsKonamiActive(true);
            setTests(prev => prev.map(t => ({ ...t, status: "failed" })));
        };

        const handleKonamiResolved = () => {
            setIsKonamiActive(false);
            // Restore appropriate statuses based on ID
            setTests(prev => prev.map(t => ({
                ...t,
                status: t.id === "t5" ? "warning" : "passed"
            })));
        };

        window.addEventListener("konami-triggered", handleKonami);
        window.addEventListener("konami-resolved", handleKonamiResolved);

        return () => {
            clearInterval(interval);
            timeouts.forEach(clearTimeout);
            window.removeEventListener("konami-triggered", handleKonami);
            window.removeEventListener("konami-resolved", handleKonamiResolved);
        };
    }, []);

    const updateTestStatus = (id: string, status: TestResult["status"]) => {
        setTests(prev => prev.map(test =>
            test.id === id ? { ...test, status } : test
        ));
    };

    const completedTests = tests.filter(t => t.status !== "pending");
    const isFinished = progress >= 100;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-panel rounded-xl overflow-hidden border border-[var(--grid-color)] relative shadow-2xl"
        >
            {/* Dashboard Header */}
            <div className="bg-gray-900/80 px-4 py-3 border-b border-gray-800 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <TerminalSquare className="text-primary w-5 h-5" />
                    <span className="font-mono text-sm font-semibold text-gray-200">Test Execution — Live</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                        {!isFinished && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>}
                        <span className={`relative inline-flex rounded-full h-3 w-3 ${isFinished ? 'bg-gray-500' : 'bg-red-500'}`}></span>
                    </span>
                    <span className="text-xs font-mono text-gray-400 mr-1">{isFinished ? "DONE" : "REC"}</span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 h-1">
                <motion.div
                    className={`h-full ${isKonamiActive ? 'bg-danger' : 'bg-primary'}`}
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear", duration: 0.1 }}
                />
            </div>

            {/* Terminal Content */}
            <div className="p-5 font-mono text-sm h-[320px] overflow-hidden flex flex-col gap-3">
                <AnimatePresence>
                    {tests.map((test, index) => (
                        <motion.div
                            key={test.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: test.status !== "pending" ? 1 : 0 }}
                            className={`flex items-center justify-between ${test.status === "pending" ? "hidden" : "block"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                {test.status === "passed" && <CheckCircle2 className="text-success w-4 h-4" />}
                                {test.status === "warning" && <AlertCircle className="text-warning w-4 h-4" />}
                                {test.status === "failed" && <XCircle className="text-danger w-4 h-4 animate-pulse" />}
                                <span className={`truncate max-w-[180px] sm:max-w-[220px] ${test.status === "failed" ? "text-danger" : "text-gray-300"
                                    }`}>
                                    {test.name} <span className="text-gray-600 hidden sm:inline">................</span>
                                </span>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                                <span className={`font-bold ${test.status === "passed" ? "text-success" :
                                        test.status === "warning" ? "text-warning" : "text-danger"
                                    }`}>
                                    {test.status.toUpperCase()}
                                </span>
                                <span className="text-gray-500 text-xs w-12 text-right">({test.duration}s)</span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Summary Footer */}
                {isFinished && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className={`mt-auto pt-3 border-t border-gray-800 flex justify-between text-xs ${isKonamiActive ? 'text-danger' : 'text-gray-400'
                            }`}
                    >
                        <span>
                            {isKonamiActive ? "0" : "5"} passed · {isKonamiActive ? "6" : "0"} failed · {isKonamiActive ? "0" : "1"} warning
                        </span>
                        <span>4.89s total</span>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
