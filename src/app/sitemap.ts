import type { MetadataRoute } from "next";
import { siteUrl } from "@/content";

// Sitio de una sola página: una entrada.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, changeFrequency: "monthly", priority: 1 }];
}
