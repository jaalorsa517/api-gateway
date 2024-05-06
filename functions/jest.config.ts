/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "node_modules/*",
    "test/*",
    ".git",
    "firebase-debug.log",
    "firebase-debug.*.log",
    ".github",
    ".husky",
    "src/models/*",
  ],
  coverageProvider: "v8",
  coverageReporters: ["json", "html"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  fakeTimers: {
    "enableGlobally": false
  },
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "/node_modules/",
    "src/models/*",
  ],
};

export default config;
