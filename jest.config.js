module.exports = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.ts',
    '<rootDir>/src/pages/**/*.ts',
  ],
  testEnvironment: 'jsdom',
};
