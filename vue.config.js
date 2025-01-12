// vue-qk-equipment/vue.config.js
const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package.json')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/equipment/' : '/',
  devServer: {
    port: 3005, // 和上面主应用区分
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${name}`
    }
  }
})
