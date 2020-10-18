const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
            
        ],
        
},
plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' }),],
devServer: {
    port: 1234,
    stats: 'errors-only',
    
},
}