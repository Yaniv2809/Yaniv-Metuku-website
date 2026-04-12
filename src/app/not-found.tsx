import Link from "next/link";
import { Terminal } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center font-mono max-w-md">
                <div className="flex items-center justify-center gap-3 mb-8">
                    <Terminal className="text-primary w-8 h-8" />
                    <span className="text-primary text-xl font-bold tracking-tighter">Yaniv.qa</span>
                </div>

                <div className="glass-panel rounded-2xl border border-gray-800 p-8 text-left mb-8">
                    <p className="text-gray-500 text-xs mb-2">$ navigate /route</p>
                    <p className="text-red-400 font-bold text-lg mb-1">ERROR 404</p>
                    <p className="text-gray-300 text-sm">Route not found.</p>
                    <p className="text-gray-500 text-xs mt-4">
                        Expected: a valid section anchor<br />
                        Received: <span className="text-warning">undefined</span>
                    </p>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-bold tracking-wide hover:bg-primary/10 transition-colors text-sm"
                >
                    ← Return to Home
                </Link>
            </div>
        </main>
    );
}
