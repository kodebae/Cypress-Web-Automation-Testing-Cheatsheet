const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fgiob4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
