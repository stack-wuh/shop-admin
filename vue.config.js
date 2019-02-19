const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  lintOnSave: false,
  outputDir: process.env.outputDir,
  assetsDir: 'static',
  publicPath: '/',

  productionSourceMap: false,

  devServer: {
    open: true,
    host: '0.0.0.0',
    port: '19020',
    proxy: {
      '/api': {
        target: 'www.baidu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  configureWebpack: config => {
    if(process.env.NODE_ENV === 'production'){
      return {
        plugins: [new CompressionWebpackPlugin({
          test: /\.js$|\.html|\.css|\.scss/,
          threshold: 10240,
          deleteOriginalAssets: false
        })]
      }
    }
  }
}
