/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'spoonacular.com',
                port: '',
                pathname: '/cdn/ingredients_250x250/**',
            },
        ],
    },
}

module.exports = nextConfig

