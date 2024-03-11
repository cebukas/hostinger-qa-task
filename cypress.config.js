const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    baseUrl: 'https://hpanel.hostinger.com/',
    pageLoadTimeout: 20000,
    viewportWidth: 1440,
    viewportHeight: 900,
    vat: 21
  },
});
