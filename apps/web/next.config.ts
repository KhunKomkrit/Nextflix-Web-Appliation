import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
};

const withNextIntl = createNextIntlPlugin('./app/i18n/request.ts');

export default withNextIntl(nextConfig);
