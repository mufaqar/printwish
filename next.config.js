/** @type {import('next').NextConfig} */

const nextConfig = {
  //trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: [
      'printwish.co.uk',
      'backend.printwish.co.uk',
      'res.cloudinary.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/wholesale-bag',
        destination: '/cotton-bags-cheap-branded-tote-bags',
        permanent: true,
      },
      {
        source: '/cotton-bags',
        destination: '/cotton-bags-cheap-branded-tote-bags',
        permanent: true,
      },
      {
        source: '/t-shirt-printing-kent/',
        destination: '/custom-t-shirt-printing-cheap-t-shirt-printing',
        permanent: true,
      },

      {
        source: '/t-shirts/',
        destination: '/custom-t-shirt-printing-cheap-t-shirt-printing',
        permanent: true,
      },
    ];
  },
  // experimental: {
  //   esmExternals: 'loose'
  // }
  //  unoptimized: true
};

module.exports = nextConfig;
