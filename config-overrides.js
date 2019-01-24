const webpack = require('webpack');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer');

module.exports = function override(config, env) {
  const analyzeBundle = process.argv.indexOf('--analyze-bundle') !== -1;
  config = rewireStyledComponents(config, env);

  if (analyzeBundle) {
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: 'static',
      reportFilename: 'report.html'
    });
  }

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {}
    })
  );

  // Fix "Critical dependency: the request of a dependency is an expression" error for numbro
  // Disable the use of require in numbro library (because require is for NodeJS runtime)
  config.module.rules.push({
    test: /numbro/,
    use: 'imports-loader?require=>false'
  });

  return config;
};
