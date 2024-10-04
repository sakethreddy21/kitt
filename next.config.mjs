/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_URL : process.env.NEXTAUTH_URL,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,
        NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET
     },
};

export default nextConfig;
