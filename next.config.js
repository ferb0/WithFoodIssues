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
            {
                protocol: 'https',
                hostname: 'spoonacular.com',
                port: '',
                pathname: '/cdn/ingredients_250x250/**',
            }
        ]
    }
}

module.exports = nextConfig
