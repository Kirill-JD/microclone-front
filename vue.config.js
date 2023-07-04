const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
		'vuetify'
	],
	devServer: {
    proxy: {
      "/api/": {
        target: "http://127.0.0.1:8000",
        secure: false,
        changeOrigin: true
      },
      "/admin/": {
        target: "http://127.0.0.1:8000",
        secure: false,
        changeOrigin: true
      },
			"/authenticate/": {
        target: "http://127.0.0.1:8000",
        secure: false,
        changeOrigin: true
      }
    },
  }
})
