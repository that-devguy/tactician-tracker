/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["raw.communitydragon.org", "ddragon.leagueoflegends.com"],
  },
};

module.exports = nextConfig;
