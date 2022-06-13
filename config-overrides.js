const { override, fixBabelImports, addWebpackAlias, addWebpackModuleRule } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve("src"),
  }),
  fixBabelImports("antd", {
    "libraryDirectory": "es",
    style: 'css',
  }),
  addWebpackModuleRule(
    {
      test: /\.csv$/,
      loader: 'csv-loader',
      options: {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true
      }
    }
  )
);
