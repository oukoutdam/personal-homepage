import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
