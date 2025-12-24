import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://prefyne.vercel.app",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://prefyne.vercel.app/login",
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}
