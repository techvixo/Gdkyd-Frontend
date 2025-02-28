const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["145.223.21.187", "147.79.117.103", "gdkyd.com", "api.gdkyd.com", "res.cloudinary.com"], 
      },
};
 
module.exports = withNextIntl(nextConfig);
