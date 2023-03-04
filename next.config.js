/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['github.com']
  }
}

module.exports = nextConfig

