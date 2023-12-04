const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData : `@import "@/assets/scss/_variable.scss";` //引入全局变量   
      }
    }
  }
})