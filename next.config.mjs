/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pokeapi.co',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'assets.pokemon.com',
        port: '',
      },
    ],
  }
};

export default nextConfig;
