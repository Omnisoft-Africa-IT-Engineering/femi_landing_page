import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://femi.omnisoft.africa",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}