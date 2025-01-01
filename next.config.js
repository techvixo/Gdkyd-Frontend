const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["145.223.21.187", "147.79.117.103", "gdkyd.com", "api.gdkyd.com"],
  },
  // Add exportTrailingSlash for static export support
  trailingSlash: true,  // Optional: This will generate clean URLs, like /about/ instead of /about
  // Add target: 'serverless' for static export
  target: 'serverless',
};
 
module.exports = withNextIntl(nextConfig);
