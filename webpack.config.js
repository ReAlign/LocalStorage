var defaultConfig = {
    externals: {
    },
    entry: {
      index: './main.js',
    },
    output: {
      filename: './dist/localstorage.js',
      library: 'LocalStorage',
      libraryTarget: 'umd',
    },
    module: {
      loaders: [
          {
              test: /\.js$/,
              loader: [
                'babel-loader',
              ],
          },
      ]
    },
    plugins: [
    ],
    resolve: {
      alias: {
        'base': __dirname + '/src',
      },
    },
  };

  module.exports = defaultConfig;