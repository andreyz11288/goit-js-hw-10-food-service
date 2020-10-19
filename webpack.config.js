const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
        ],
        
},
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' }),
   new MiniCssExtractPlugin({
      filename: 'main.css'
    }),],
devServer: {
    port: 1234,
    stats: 'errors-only',
    
},
}