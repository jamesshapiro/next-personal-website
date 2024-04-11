/** @type {import('next').NextConfig} */
const withRedirect = (await import('next-redirect')).default;

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['m.media-amazon.com'],
  }
};



export default nextConfig;
