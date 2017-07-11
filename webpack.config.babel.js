const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src'),
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/,loader: ['babel-loader']},
            {test: /\.(ts|tsx)$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.json',
            '.scss',
            '.ts',
            '.tsx'
        ],

        alias: {
        	containers: path.join(__dirname, 'src', 'containers'),
        	components: path.join(__dirname, 'src', 'components'),
        	reducers: path.join(__dirname, 'src', 'reducers'),
        	services: path.join(__dirname, 'src', 'services'),
        }

    }
}