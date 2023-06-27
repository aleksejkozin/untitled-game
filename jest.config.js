process.env.NODE_ENV = 'development'

module.exports = {
  maxWorkers: 4,
  verbose: true,
  // Our application doesn't have a way to exit gracefully
  forceExit: true,
  testEnvironment: 'node',
  setupFiles: ['./jest.setup.js'],
  setupFilesAfterEnv: ['jest-extended/all'],
  // The test files should have suffix test or spec
  testRegex: '\\.(test|spec)\\.(ts|tsx|js)$',
  passWithNoTests: true,
  // Cut out all non-code files
  moduleNameMapper: {
    '^.+.(css|svg|styl|less|sass|scss|jpg|ttf|woff|woff2|mp3)$':
      'jest-transform-stub',
  },
  transform: {
    '\\.(ts|tsx|js)$': 'babel-jest',
  },
}
