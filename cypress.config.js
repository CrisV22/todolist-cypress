const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    baseUrl: "http://localhost:5173/",
    specPattern: "cypress/e2e/**/*.cy.js",
    screenshotOnRunFailure: false,
    video: false,
    defaultBrowser: "chrome",
  },
});
