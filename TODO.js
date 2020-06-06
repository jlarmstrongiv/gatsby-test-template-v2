// TODO
// Move compilation of CSS to its own cli (as each thing uses css differently)
// copy static folder too
// maybe add a script to npm opn the static folder after install
// storybook default webpack config can later be used for wordpress
// and don't forget jest
// Process.env variables are still variable after execution!
// Implement assetPath?  What about base path html tag?
// must exclude but reference @wordpress/browserslist-config as it causes build errors

// TODO
// custom link component
// layout component in previewjs wrapper
// layout component with layout switcher example
// root component in particles
// gatsby plugins like sitemap, layouts, and css
// theming and whitelabeling for storybook
// links to github by andrew mead
// husky postcommit hook
// commitizen
// add github push automatically to addAlias
// update tsconfig file to the one used in winter tracecamp
// investigate const { createDefaultWebpackConfig } = require('@storybook/core/dist/server/config/defaults/webpack.config.js');
// maybe even create your own function generating webpack configs
// storybook uses webpack 4
// https://v4.webpack.js.org/contribute/writing-a-plugin/
// also for exporting only tsdx is customizable https://github.com/jaredpalmer/tsdx#customization
// also you may have to write your own plugin here too https://rollupjs.org/guide/en/#plugin-development
// debug the typescript preset and console log whatever the heck the webpack defaults actually are to compare and debug
// actually, consider rewriting the babel-plugin-remove-graphql-queries into the babel config and using typescript preset as is
// add library export with tsdx and export default from index file
// compare webpacks and make typescript sample component
// add docusaurus2?
// babel presets shared among all?
// update repo in package.json
// siteurl in gatsby, switch
// be sure to either fix babelConfig support with options or document string only
// check absolute imports and svg imports
// refactor the safety npm script into a nodejs module
// does the order of npm run build matter?  gatsby > storybook & tsdx
// dev vs peer dependencies https://github.com/jaredpalmer/tsdx/issues/306#issuecomment-601419565

// https://www.npmjs.com/package/@storybook/addon-docs#typescript-configuration
// Docgen with typescript support

// another rollup alias example, which now means nothing to me https://github.com/jaredpalmer/tsdx/issues/379#issuecomment-568202209
