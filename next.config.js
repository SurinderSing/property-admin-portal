/*
* @type {import('next').NextConfig} 
*/

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: false,
  env: {
    API_URL: "http://localhost:4000/api",
  },
});
