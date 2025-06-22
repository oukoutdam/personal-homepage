import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: { unoptimized: true },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // fix paths for github pages
  basePath: process.env.NODE_ENV === 'production' ? '/personal-homepage/' : '',
  assetPrefix:
    process.env.NODE_ENV === 'production' ? '/personal-homepage/' : '',
};

export default nextConfig;
