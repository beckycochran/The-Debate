const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "eh5ti6",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
  chromeWebSecurity: false
});
