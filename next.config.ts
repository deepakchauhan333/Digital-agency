import type { NextConfig } from "next";

const securityHeaders = [
  // HSTS — Force HTTPS for 2 years + subdomains + preload list
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Prevent XSS attacks
  { key: "X-XSS-Protection", value: "1; mode=block" },
  // Prevent MIME sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Prevent clickjacking
  { key: "X-Frame-Options", value: "DENY" },
  // DNS prefetch
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // Referrer policy — preserve for analytics
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Permissions policy — disable unnecessary browser APIs
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()" },
  // CSP — tight content security policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https: http:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://api.indexnow.org",
      "frame-src 'self' https://www.google.com https://www.youtube.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Force trailing slash consistency (no trailing slash)
  trailingSlash: false,

  // Image optimization — WebP/AVIF auto-conversion
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },

  // Compression — Next.js uses gzip by default; Brotli via CDN
  compress: true,

  // Powered-by header removal (security)
  poweredByHeader: false,

  // Security headers on all routes (Cache-Control handled by Next.js/CDN automatically)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // 301 redirects — www -> non-www, old brand -> new
  async redirects() {
    return [
      // Force HTTP -> HTTPS (handled by hosting, but backup)
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://www.allindiamarketingsolution.com/:path*",
        permanent: true,
      },
      // Redirect old brand URLs
      {
        source: "/growthpedia/:path*",
        destination: "/:path*",
        permanent: true,
      },
      // Trailing slash removal
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
