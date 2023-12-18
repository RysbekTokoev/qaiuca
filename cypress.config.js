const { defineConfig } = require('cypress')


module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://167.114.201.175:5000/',
        chromeWebSecurity: false,
        supportFile: false,
      },
    env: {
        login: "default",
        password: "default",
    }
})