/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for cPanel deployment
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/file/d/**'
      }
    ]
  },
  // Disable server-side features for static export
  trailingSlash: true
}

module.exports = nextConfig
