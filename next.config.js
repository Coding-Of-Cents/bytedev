
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['xwqUMnwXKFm41naFuDzf1V'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  