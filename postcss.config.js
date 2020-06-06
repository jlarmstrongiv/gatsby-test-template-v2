const OPTIMIZE_CSS =
  process.env.NODE_ENV === 'production' &&
  process.env.OPTIMIZE_CSS !== 'false';

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwindcss.config.js'),
    // https://tailwindcss.com/docs/using-with-preprocessors#future-css-features
    require('postcss-preset-env')({
      stage: 1,
      features: {
        // https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
        'focus-within-pseudo-class': false,
      },
      autoprefixer: OPTIMIZE_CSS,
    }),

    // https://flaviocopes.com/tailwind-setup/
    OPTIMIZE_CSS
      ? require('cssnano')({ preset: 'default' })
      : false,
    OPTIMIZE_CSS
      ? require('@fullhuman/postcss-purgecss')({
          // Specify the paths to all of the template files in your project
          content: [
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.ts',
            './src/**/*.tsx',
            './src/**/*.mdx',
          ],

          // Include any special characters you're using in this regular expression
          defaultExtractor: (content) =>
            content.match(/[\w-/.:]+(?<!:)/g) || [],
        })
      : false,
  ].filter(Boolean),
};
