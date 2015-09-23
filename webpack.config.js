var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, './src/repo.app.js'),
        vendors: ['angular', 'angular-material']
    },
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel", exclude: /node_modules/},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.html$/, loader: "html"}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};
