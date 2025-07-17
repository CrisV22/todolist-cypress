const { defineConfig } = require("cypress");
const browserstackTestObservabilityPlugin = require('browserstack-cypress-cli/bin/testObservability/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // require('@testomatio/reporter/lib/adapter/cypress-plugin')(on, config);
      browserstackTestObservabilityPlugin(on, config);
      return config;
    },
    baseUrl: "http://localhost:5173/",
    supportFile: false,
    specPattern: "cypress/e2e/**/*.cy.js",
    screenshotOnRunFailure: false,
    video: false,
    defaultBrowser: "chrome",
  },
});
