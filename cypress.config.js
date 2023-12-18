import { defineConfig } from 'cypress'


export default defineConfig({
    e2e: {
        baseUrl: 'http://167.114.201.175:5000/',
      },
    env: {
        login: "default",
        password: "default",
    }
})