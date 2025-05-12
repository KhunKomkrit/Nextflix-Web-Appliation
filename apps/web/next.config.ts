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
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    AUTH_EMAIL: process.env.AUTH_EMAIL,
    AUTH_PASS: process.env.AUTH_PASS,
  },
};

const withNextIntl = createNextIntlPlugin('./app/i18n/request.ts');

export default withNextIntl(nextConfig);
