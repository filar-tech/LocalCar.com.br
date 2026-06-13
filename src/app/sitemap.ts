import type { MetadataRoute } from "next";
import { site } from "@/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const rotas = ["", "/servicos", "/sobre", "/contato"];
  return rotas.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
