/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      }, 
    ]
  }
}

module.exports = nextConfig
