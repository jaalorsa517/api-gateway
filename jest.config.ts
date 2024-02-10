import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'function/models', 'function/api-gw', 'function'],
  moduleFileExtensions: ['ts', 'js'],
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.[tj]s$",
  moduleNameMapper:{
    '/function/(.*)$': '<rootDir>/function/$1',
    '../models/(.*)': '<rootDir>/function/models/$1',
  },
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "reports/junit",
        outputName: "junit-report.xml",
      },
    ],
  ],
  coverageDirectory: "reports/coverage",
  coverageReporters: ['text', 'cobertura', 'html', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 25,
      functions: 50,
      lines: 51,
      statements: 44,
    },
  },
  coveragePathIgnorePatterns: [
    "node_modules",
    ".mock.[jt]s",
    "models",
    "api-gateway",
    "server*"
  ],
};

export default config;