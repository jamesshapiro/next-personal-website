/** @type {import('next').NextConfig} */
const withRedirect = (await import('next-redirect')).default;

const nextConfig = {
  output: 'export',
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['m.media-amazon.com'],
  },
  trailingSlash: true,
};



export default nextConfig;
