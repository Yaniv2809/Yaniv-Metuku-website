import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: "*", allow: "/" },
        sitemap: "https://yaniv-metuku-website-2809.vercel.app/sitemap.xml",
    };
}
