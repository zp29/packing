/**
 * 这个文件可以修改serve的默认设置
 * 默认配置请看 `node_modules/packing/config/webpack.serve.babel.js`
 *
 * @param object webpackConfig 默认配置对象
 */

// import path from 'path';
// import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default (webpackConfig, program, packing) => {
  const { entries } = packing.path;

  webpackConfig.plugins = [];

  // 先只考虑 object 类型的 entries
  Object.keys(entries).forEach((chunkName) => {
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
      filename: `${chunkName}.html`,
      template: 'template.html',
      title: chunkName,
      chunks: ['vendor', chunkName]
    }));
  });

  return webpackConfig;
};