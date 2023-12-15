/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["printwish.co.uk", "backend.printwish.co.uk", "res.cloudinary.com"]
  },
  // experimental: {
  //   esmExternals: 'loose'
  // }
  //  unoptimized: true
}

module.exports = nextConfig
