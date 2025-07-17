const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // testomat.io reporter plugin:
      require('@testomatio/reporter/lib/adapter/cypress-plugin')(on, config);
    },
    baseUrl: "http://localhost:5173/",
    supportFile: false,
    specPattern: "cypress/e2e/**/*.cy.js",
    screenshotOnRunFailure: false,
    video: false,
    defaultBrowser: "chrome",
  },
});
