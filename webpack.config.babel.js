const path = require('path');

module.exports = {
  mode: "production", 
  context: __dirname,
  entry: './src/index.js',
  devtool: 'source-map',

  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/',
    chunkFilename: '[name].bundle.js' // Code splitting
  },
  
  optimization: {
    splitChunks: {
      chunks: "all", // Split vendor & common code
    },
  },

  devServer: {
    publicPath: '/public/',
    inline: true,
    host: '127.0.0.1'
  },

  resolve: {
    extensions: ['.js', '.json']
  },

  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        options: {
          cacheDirectory: true, // Speeds up rebuilds
          plugins: ['@babel/plugin-transform-runtime'],
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]',
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { progressive: true },
              optipng: { optimizationLevel: 5 },
              pngquant: { quality: [0.65, 0.90], speed: 4 },
              gifsicle: { interlaced: false }
            }
          }
        ]
      }
    ]
  }
};
