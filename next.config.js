/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["printwish.co.uk", "backend.printwish.co.uk", "res.cloudinary.com"],
    unoptimized: true
  },
  // experimental: {
  //   esmExternals: 'loose'
  // }
}

module.exports = nextConfig
