const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// comment out BundleAnalyzerPlugin while deploying to production, as it doesn't end after running

module.exports = {
	mode: 'development',

	entry: {
		bundle: path.resolve(__dirname, 'src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name][contenthash].js',
    clean: true, // Clear teh old files in the dist folder
		// [name] is a placeholder that will be replaced by the key name in the entry object
		  // In this case, it will be replaced by 'bundle'
    // content hash is a unique hash that changes whenever the content of the file changes
      // it is used to bust the cache, so the browser knows to download the new file
    assetModuleFilename: 'assets/[name][ext]',
	},
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true, // enable gzip compression
    port: 5500,
    hot: true, // reload on change
    open: true, // open the browser
    historyApiFallback: true, // redirect 404s to index.html
  },
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      }, // babel is a transpiler that converts modern JS to ES5
      // so that it can run in older browsers
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
		],
	},
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Jokes API',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new HtmlWebpackPlugin({
      title: 'About Page',
      filename: 'about.html', // Output file in ./dist
      template: path.resolve(__dirname, 'src/about.html'), // Source template file
    }),
    // new BundleAnalyzerPlugin(),
  ]
};
