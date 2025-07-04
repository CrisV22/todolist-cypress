const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: "http://frontend:5173",
    baseUrl: "http://localhost:5173/",
    // baseUrl: "http://localhost:3000/",
    supportFile: false,
    specPattern: "cypress/e2e/**/*.cy.js",
    screenshotOnRunFailure: false,
    video: false,
    defaultBrowser: "chrome",
  },
});
