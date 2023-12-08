/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'spoonacular.com',
                port: '',
                pathname: '/recipeImages/**',
            },
            {
                protocol: 'https',
                hostname: 'spoonacular.com',
                port: '',
                pathname: '/cdn/equipment_100x100/**',
            },
        ],
    }
}

module.exports = nextConfig
