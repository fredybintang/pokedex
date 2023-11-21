/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "raw.githubusercontent.com"
            }
        ]
    }
}

module.exports = { eslint: { ignoreDuringBuilds: true } }
module.exports = nextConfig
