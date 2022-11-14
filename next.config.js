/** @type {import('next').NextConfig} */
const nextConfig = {

  // env: {
  //   MONGO_URI: 'mongodb://localhost:27017/next-auth',
  // },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = nextConfig
