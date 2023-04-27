/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    domains: ["localhost", "api.iconify.design", "127.0.0.1", "192.168.1.229"],
  },
};

module.exports = nextConfig
