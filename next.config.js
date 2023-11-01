/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_YOUTUBE_API_KEY: process.env.NEXT_APP_YOUTUBE_API_KEY,
    // NEXT_PUBLIC_API_BASEURL: process.env.NEXT_PUBLIC_API_BASEURL,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
