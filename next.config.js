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

module.exports = nextConfig
module.exports = { eslint: { ignoreDuringBuilds: true } }
