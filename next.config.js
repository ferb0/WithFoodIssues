/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'spoonacular.com',
                port: '',
                pathname: '/cdn/equipment_250x250/**',
            },
        ],
    },
}

module.exports = nextConfig

