import { blogPosts } from "@/data/blog-posts";
import { services } from "@/data/services";
import { site } from "@/data/site";
import type { MetadataRoute } from "next";

/** Auto-generated sitemap covering every static and data-driven route. */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly" | "yearly";
  }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/residential", priority: 0.9, changeFrequency: "monthly" },
    { path: "/commercial", priority: 0.9, changeFrequency: "monthly" },
    { path: "/request-inspection", priority: 0.9, changeFrequency: "monthly" },
    { path: "/get-quote", priority: 0.9, changeFrequency: "monthly" },
    { path: "/emergency", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/testimonials", priority: 0.7, changeFrequency: "weekly" },
    { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/faqs", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
