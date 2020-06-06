module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  // moduleDirectories: [
  //   'node_modules',
  //   path.join(__dirname, 'src'),
  // ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
  ],
  watchPlugins: ['jest-watch-select-projects'],
  displayName: 'library',
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
    `dist`,
    `storybook-static`,
  ],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  collectCoverageFrom: [
    '**/src/**/*.[jt]s?(x)',
    '!**/__tests__/**',
    '!**/__server_tests__/**',
    '!**/node_modules/**',
    '!**/__tests__/**/*.[jt]s?(x)',
    '!**/?(*.)+(spec|test).[jt]s?(x)',
  ],
};
