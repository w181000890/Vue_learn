const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true, 
  lintOnSave:false,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js'
  }
},
//开启代理服务器
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/api':''},
        ws: true,
        changeOrigin: true
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        ws: true,
        changeOrigin: true
      },
     
    }
  }
  

})
