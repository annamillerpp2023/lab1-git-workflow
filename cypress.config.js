const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents() {
      // node events (порожньо, щоб не було unused vars)
    },
  },
});