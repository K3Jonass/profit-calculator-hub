import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/privacy-policy",
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
