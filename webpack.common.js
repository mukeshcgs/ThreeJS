const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const PROXY = `http://${HOST}:${PORT}`;

module.exports = {
  entry: {
    app: './src/js/index.js'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
        })
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|jp(e*)g|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: './'
          }
        }]
      },
      // {
      //   test: /\.(png|jp(e*)g|svg)$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       limit: 25000, // Convert images < 8kb to base64 strings
      //       // name: '[name].[ext]'
      //     }
      //   }]
      // }


    ]
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      'TweenLite': 'gsap/src/minified/TweenLite.min.js',
      'TweenMax': 'gsap/src/minified/TweenMax.min.js',
      'TimelineLite': 'gsap/src/minified/TimelineLite.min.js',
      'TimelineMax': 'gsap/src/minified/TimelineMax.min.js',
      'ScrollMagic': 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
      'animation.gsap': 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
      'debug.addIndicators': 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
    }
  },
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: false,
    publicPath: "/",
    inline: true,
    overlay: true,
    contentBase: 'dist',
    // host: 'localhost',
    // port: 9001
  },
  watch: true,
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: '!html-webpack-plugin/lib/loader!src/index.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin({ filename: 'styles.css', disable: false, allChunks: true }),
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        host: HOST,
        port: PORT,
        proxy: PROXY
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      }
    ),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};