module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        query: {
          presets: ['stage-0', 'es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    root: [
      __dirname + '/src/components'
    ]
  },
}