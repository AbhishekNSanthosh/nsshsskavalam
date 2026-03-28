module.exports = {
    reactStrictMode: true,
    turbopack: {
      resolveAlias: {
        '@app': './src/app',
        '@api': './src/api',
        '@widgets': './src/widgets',
        '@lib': './src/common/lib',
        '@font': './src/common/font',
        '@core': './src/common/core',
        '@utils': './src/common/Utils',
        '@icons': './src/common/Icons',
        '@themes': './src/common/themes',
        '@styles': './src/styles',
        '@images': './src/images',
        '@components': './src/common/components',
      },
    },
    async rewrites() {
      return [
        {
          source: '/sitemap.xml',
          destination: '/_next/static/sitemap.xml',
        },
        {
          source: '/robots.txt',
          destination: '/_next/static/robots.txt',
        },
      ];
    },
  };
