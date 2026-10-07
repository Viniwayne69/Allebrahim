import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://alleebrahim.com.br";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/captura`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
