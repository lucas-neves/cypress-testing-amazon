const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
    e2e: {
        specPattern: "**/*.feature",
        supportFile: 'cypress/support/e2e.js',
        setupNodeEvents(on, config) {
            on('file:preprocessor', cucumber())
            return config;
        },
        baseUrl: 'https://www.amazon.com.br',
        viewportHeight: 720,
        viewportWidth: 1280,
        video: true,
        watchForFileChanges: false,
        scrollBehavior: "center",
        defaultCommandTimeout: 15000,
    },
});
