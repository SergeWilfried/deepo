import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  serverExternalPackages: [],
  webpack: (config) => {
    // Ensure shiki and other streamdown dependencies are bundled
    config.externals = config.externals || [];
    if (Array.isArray(config.externals)) {
      config.externals = config.externals.filter(
        (external: string | RegExp | ((context: string, request: string) => boolean)) =>
          typeof external !== 'string' || !external.includes('shiki')
      );
    }
    return config;
  },
};

export default nextConfig;