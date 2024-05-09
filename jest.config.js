export default {
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testRegex: ['.*\\.spec\\.ts$'],
  transform: {
    '^.+\\.(ts|js)$': [
      'ts-jest',
      { tsconfig: import.meta.dirname + '/tsconfig.json', diagnostics: { ignoreCodes: ['TS151001'] } },
    ],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '#libs/(.*)': ['libs/$1/src'],
  },
  modulePaths: [import.meta.dirname],
  collectCoverageFrom: ['**/src/**/*.ts', '!**/src/*.ts'],
  coverageThreshold: { global: { lines: 75 } },
};
