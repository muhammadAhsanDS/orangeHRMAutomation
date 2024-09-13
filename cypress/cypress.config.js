const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    screenshotsFolder: 'cypress/screenshots', 
    "experimentalSessionAndOrigin": true,
    setupNodeEvents(on, config) {
      on('after:screenshot', (details) => {
        console.log('Screenshot taken:', details);
      });

    },
    screenshotOnRunFailure: true, 
  },
});
