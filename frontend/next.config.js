/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Silence workspace root inference warning
  outputFileTracingRoot: path.join(__dirname),
  // Optimize TypeScript performance
  typescript: {
    // Allow faster builds in development
    tsconfigPath: './tsconfig.json',
  },
  // Optimize webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Enable caching for better performance
    if (dev) {
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    
    // Optimize module resolution
    config.resolve.modules = [
      path.resolve(__dirname, 'node_modules'),
      'node_modules'
    ];

    return config;
  },
  // Optimize experimental features
  experimental: {
    // Enable faster refresh
    swcLoader: true,
    // Optimize chunks
    optimizeCss: true,
  },
};

module.exports = nextConfig;
