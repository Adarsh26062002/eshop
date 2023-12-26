// next.config.js
module.exports = {
    // Your other configurations...
  
    async redirects() {
      return [
        // Add redirects for your new folder structure
        { source: '/frontend/:path*', destination: '/:path*', permanent: true },
      ];
    },
  
    async rewrites() {
      return [
        // Add rewrites for your new folder structure
        { source: '/:path*', destination: '/frontend/:path*' },
      ];
    },
  };
  