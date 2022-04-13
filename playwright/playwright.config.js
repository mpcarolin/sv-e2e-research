require('dotenv').config();

module.exports = {
  globalSetup: require.resolve('./globalSetup'),
  use: {
    // Tell all tests to load signed-in state from 'storageState.json'.
    baseURL: 'https://michael-test.staging.zerista.io',
    storageState: 'playwright/storageState.json'
  }
}