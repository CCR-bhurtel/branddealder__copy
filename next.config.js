/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    experimental: {
        runtime: 'edge',
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {},
};

module.exports = nextConfig;
