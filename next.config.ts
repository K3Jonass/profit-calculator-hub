import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    const privacyRedirect = {
      source: "/privacy",
      destination: "/privacy-policy",
      permanent: true,
    };

    // Production-only canonical redirects. Omitted in dev so local http://localhost:3000 works.
    if (isDev) {
      return [privacyRedirect];
    }

    return [
      privacyRedirect,
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://profithub.cloud/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.profithub.cloud",
          },
        ],
        destination: "https://profithub.cloud/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
