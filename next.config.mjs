/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable CSS modules
    cssModules: true,
  
    // Configure CSS loader to use PostCSS
    cssLoader: true,
  
    // Add PostCSS plugins
    postcssLoader: {
      plugins: () => [require('tailwindcss'), require('autoprefixer')],
    },
  };
  
  export default nextConfig;