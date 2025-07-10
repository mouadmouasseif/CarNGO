import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/private/", "/dashboard/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/api/private/"],
      },
    ],
    sitemap: "https://carrent-morocco.com/sitemap.xml",
    host: "https://carrent-morocco.com",
  }
}
