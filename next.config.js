const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["145.223.21.187", "147.79.117.103", "api.gdkyd.com"], 
      },
};
 
module.exports = withNextIntl(nextConfig);
