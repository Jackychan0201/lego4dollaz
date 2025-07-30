/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.ci.harrisburg.or.us',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'a.storyblok.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
