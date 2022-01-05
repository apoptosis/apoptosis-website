const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextjs = {
    images: {
        disableStaticImages: true,
    },
    trailingSlash: true,
    poweredByHeader: false,
    basePath: "/apoptosis",
    assetPrefix: "/apoptosis/"
}

module.exports = withPlugins(
    [
      [
        optimizedImages,
        {
          // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
          optimizeImages: false,
        },
      ],
    ],
    nextjs
  );