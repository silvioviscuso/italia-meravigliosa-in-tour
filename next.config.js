/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
})
module.exports = {
  images: {
    loader: "akamai",
    path: "/",
    domains: ["firebasestorage.googleapis.com"],
  },
}

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
};
