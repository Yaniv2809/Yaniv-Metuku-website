import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yaniv-metuku-website-2809.vercel.app"),
  title: {
    default: "Yaniv Metuku | QA Automation Engineer",
    template: "%s | Yaniv Metuku",
  },
  description: "QA Automation Engineer with 2 published PyPI packages, a 53-test 4-layer framework (Web, API, Mobile, DB), and AI-powered failure analysis. Open to first full-time QA role.",
  keywords: ["QA Automation", "Test Automation", "Python", "Pytest", "Playwright", "Selenium", "Appium", "CI/CD", "GitHub Actions", "AI Testing", "Yaniv Metuku", "QA Engineer Israel"],
  authors: [{ name: "Yaniv Metuku" }],
  creator: "Yaniv Metuku",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yaniv-metuku-website-2809.vercel.app",
    siteName: "Yaniv Metuku — QA Automation Engineer",
    title: "Yaniv Metuku | QA Automation Engineer",
    description: "2 PyPI packages shipped. 53 automated tests across 4 layers. AI-powered failure analysis built in.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Yaniv Metuku QA Automation Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaniv Metuku | QA Automation Engineer",
    description: "2 PyPI packages. 53 automated tests. AI-powered failure analysis.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://yaniv-metuku-website-2809.vercel.app" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
