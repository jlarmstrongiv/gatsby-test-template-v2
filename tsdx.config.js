// https://github.com/jaredpalmer/tsdx/issues/186#issuecomment-526548872
module.exports = {
  /**
   * @param {import('rollup/dist/rollup').InputOptions} config
   */
  rollup(config, options) {
    return config;
  },
};
