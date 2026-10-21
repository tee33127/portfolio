import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  // Old resume link that may still be in past job applications.
  async redirects() {
    return [
      {
        source: "/Updated_Resume_Teetawat.pdf",
        destination: "/Teetawat_Trakulsuebchai_Resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
