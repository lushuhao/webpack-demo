const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({ // 生成新的index.html
      title: 'Webpack Demo'
    }),
    new webpack.ProvidePlugin({
      _: 'lodash'  // 将lodash作为全局变量
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // 含有 CSS 字符串的 <style> 标签，将被插入到 html 文件的 <head> 中
          'css-loader' //  解释(interpret) @import 和 url() ，会 import/require() 后再解析(resolve)它们
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          // 'file-loader' // import 导入本地图片，会被处理添加到output目录，返回输出目录的最终路径，
          // css-loader和html-loader同样式的方式处理url()、<style />
          {
            loader: "url-loader", // 类似于file-loader
            options: {
              limit: 10000   // 图片大小低于指定值(byte),返回DataURL(base64, 小图片可以少发一次http请求)
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "url-loader", // 可以接收加载任何文件
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  }
}