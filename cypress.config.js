const { defineConfig } = require("cypress");
const sqlServer = require('cypress-sql-server');
const conexao = require('./cypress.env.json');
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const apiBase = require('./cypress/fixtures/apis.json');

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
await preprocessor.addCucumberPreprocessorPlugin(on, config);
const tasks = sqlServer.loadDBPlugin(conexao.sqlServerConnect);
on("task", tasks);
on("file:preprocessor", browserify.default(config),);
return config;
}

module.exports = defineConfig({

  e2e: {
    setupNodeEvents,
    baseUrl: apiBase.UrlBase,
    watchForFileChanges:false,
    video: false,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 15000,
    viewportWidth: 1750,
    viewportHeight: 720,
    experimentalRunAllSpecs: true,
    specPattern: [
      'cypress/src/*/**/api.feature',
      'cypress/src/*/**/*.feature',
    ], 
  }
});