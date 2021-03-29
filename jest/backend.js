module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text', 'json'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'json'],
  setupFiles: ['jest-date-mock'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  transform: { '^.+\\.ts$': 'ts-jest' },
}
