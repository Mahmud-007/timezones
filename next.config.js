/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  env:{
    mongodburl: "mongodb+srv://admin:admin1234@cluster0.nayru5u.mongodb.net/?retryWrites=true&w=majority",
  }
}
