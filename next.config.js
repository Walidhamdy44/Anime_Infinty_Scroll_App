/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  typescript: {
    ignoreDevErrors: true,
  },
};

module.exports = nextConfig;
