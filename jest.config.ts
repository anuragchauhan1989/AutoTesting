/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  testEnvironment: "node",
  testTimeout: 3e5,
  testMatch: [
    "**/*.step.ts"
  ],
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./html-report",
        filename: "report.html",
        expand: true
      }
    ]
  ]
};