/**
 * TSDX
 * https://github.com/jaredpalmer/tsdx/issues/443#issuecomment-580473542
 */

/**
 * Storybook
 * https://www.npmjs.com/package/babel-preset-react-app
 * https://storybook.js.org/docs/configurations/default-config/
 */

/**
 * Gatsby
 * https://www.npmjs.com/package/babel-preset-gatsby
 * https://www.gatsbyjs.org/docs/babel/
 */

/**
 * Wordpress
 * https://github.com/WordPress/gutenberg/blob/master/packages/babel-preset-default/index.js
 */

let called;

module.exports = function (api) {
  if (!called) {
    called = true;
    console.log(
      'BABEL_CONFIG',
      process.env.PROJECT_ENV,
      process.env.NODE_ENV,
    );
  }

  api.cache.never();

  return {
    plugins: [
      ...(process.env.PROJECT_ENV !== 'tsdx'
        ? [
            'babel-plugin-annotate-pure-calls',
            'babel-plugin-dev-expression',
            'babel-plugin-transform-rename-import',
          ]
        : []),

      ...(process.env.PROJECT_ENV !== 'gatsby'
        ? [
            // '@babel/plugin-transform-runtime', // Runtime helpers are not enabled.
            'babel-plugin-transform-react-remove-prop-types',
            '@babel/plugin-proposal-nullish-coalescing-operator',
            '@babel/plugin-proposal-optional-chaining',
            'babel-plugin-optimize-hook-destructuring',
          ]
        : []),

      ...(process.env.PROJECT_ENV !== 'storybook'
        ? [
            '@babel/plugin-proposal-object-rest-spread', // babel-plugin-transform-object-rest-spread
            'babel-plugin-emotion',
            '@babel/plugin-transform-react-constant-elements',
            'babel-plugin-add-react-displayname',
            'babel-plugin-react-docgen',
          ]
        : []),

      ...(process.env.PROJECT_ENV !== 'wordpress'
        ? [
            // '@babel/plugin-transform-runtime', // Runtime helpers are not enabled.
            '@wordpress/warning/babel-plugin',
            '@wordpress/babel-plugin-import-jsx-pragma',
          ]
        : []),

      ...(process.env.PROJECT_ENV !== 'storybook' ||
      process.env.PROJECT_ENV !== 'gatsby'
        ? [
            '@babel/plugin-proposal-class-properties', // duplicate
            '@babel/plugin-syntax-dynamic-import', // duplicate
            'babel-plugin-macros', // duplicate
          ]
        : []),

      ...(process.env.PROJECT_ENV !== 'storybook' ||
      process.env.PROJECT_ENV !== 'wordpress'
        ? [
            '@babel/transform-react-jsx', // duplicate
          ]
        : []),

      ...(process.env.PROJECT_ENV !== 'tsdx'
        ? ['@babel/plugin-transform-runtime']
        : []),
    ],
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-flow',
      ...(process.env.PROJECT_ENV === 'gatsby'
        ? ['babel-preset-gatsby']
        : []),
      ...(process.env.PROJECT_ENV !== 'tsdx'
        ? ['@wordpress/babel-preset-default']
        : []),
    ],
  };
};
