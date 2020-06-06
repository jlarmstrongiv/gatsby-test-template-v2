/**
 * Storybook Blocks
 * https://medium.com/storybookjs/rich-docs-with-storybook-mdx-61bc145ae7bc
 * https://github.com/storybookjs/storybook/issues/9133
 * Source
 * https://github.com/storybookjs/storybook/blob/master/addons/docs/src/blocks/index.ts
 */

module.exports = {
  stories: ['../src/**/*.stories.(js|jsx|ts|tsx|mdx)'],
  addons: [
    // https://www.npmjs.com/package/@storybook/preset-typescript
    '@storybook/preset-typescript',
    // https://www.npmjs.com/package/@storybook/addon-docs
    '@storybook/addon-docs',
    // https://www.npmjs.com/package/@storybook/addon-actions
    '@storybook/addon-actions',
    // https://www.npmjs.com/package/@storybook/addon-links
    '@storybook/addon-links',
    // https://www.npmjs.com/package/@storybook/addon-knobs
    '@storybook/addon-knobs',
    // https://www.npmjs.com/package/@storybook/addon-viewport
    '@storybook/addon-viewport',
  ],
  webpackFinal: async (config) => {
    // CSS Modules
    // https://github.com/storybookjs/storybook/issues/6055#issuecomment-521046352
    // config.module.rules.find(
    //   rule => rule.test.toString() === '/\\.css$/',
    // ).exclude = /\.module\.css$/;

    // config.module.rules.push({
    //   test: /\.module\.css$/,
    //   use: [
    //     'style-loader',
    //     'css-modules-typescript-loader',
    //     {
    //       loader: 'css-loader',
    //       options: {
    //         modules: true,
    //       },
    //     },
    //   ],
    // });

    // Absolute Imports
    // https://stackoverflow.com/a/51771169
    // https://github.com/storybookjs/storybook/issues/3916#issuecomment-476475464
    // config.resolve.modules = [
    //   ...(config.resolve.modules || []),
    //   path.resolve(__dirname, '../src'),
    // ];

    return config;
  },
};
