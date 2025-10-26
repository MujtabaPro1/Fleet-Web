/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const path = require("path");
const nextConfig = {
  // Generate sitemap during build
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
    ];
  },
  i18n,
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["placeimg.com", "cdn.prod.website-files.com", "imagin.studio", "localhost:3000", "localhost:4006", "fleetplan-backend.vercel.app", "framerusercontent.com"],
    unoptimized: true
  },
  webpack(config) {
    config.resolve.alias['~'] = path.resolve(__dirname);
    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/fonts/'
        }
      }]
    });
    return config;
  },
};
module.exports = nextConfig;