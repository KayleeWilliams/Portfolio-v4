/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    domains: ["*", "localhost", "api.iconify.design", "192.168.1.229", "84.21.171.153"],
  },
};

module.exports = nextConfig
