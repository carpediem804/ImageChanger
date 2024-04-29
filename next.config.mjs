/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '6mb' // 예시로 5MB로 설정
            
        }
      }
};

export default nextConfig;
