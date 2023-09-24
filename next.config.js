/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/FwMbk2L/logo.png',
      },
    ],
  },
}

module.exports = nextConfig
