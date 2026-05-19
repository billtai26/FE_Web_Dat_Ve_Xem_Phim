import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Cho phép Next.js Image tối ưu hóa hình ảnh từ các nguồn domain bên ngoài
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "movienew.cybersoft.edu.vn",
      },
    ],
  },
};

export default nextConfig
