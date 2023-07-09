/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = withImages({
    esModule: true,
  });

module.exports = nextConfig
