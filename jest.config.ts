import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.[tj]s$",
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
    "dist",
    "server*"
  ],
};

export default config;