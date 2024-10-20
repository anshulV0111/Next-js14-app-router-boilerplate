/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // images: {
  //   domains:
  // ['gammastack-casino.s3.us-east-1.amazonaws.com',
  // 'i.imgur.com', 'storage.googleapis.com',
  //  'external-content.duckduckgo.com', 'placeimg.com', 'api.escuelajs.co', 'loremflickr.com'],
  // },
  // avoid doing below pattern for actual website
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  output: 'standalone',
};

export default nextConfig;
