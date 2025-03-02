/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "scontent.flhe7-1.fna.fbcdn.net",
      "example.com",
      "anotherdomain.com",
    ],
  },
  // Increase logging level to debug
  logger: {
    level: "debug",
  },
};

export default nextConfig;
