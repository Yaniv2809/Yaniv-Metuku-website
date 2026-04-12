import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://yaniv-metuku-website-2809.vercel.app",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
