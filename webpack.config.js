// module.exports = {
//     entry: './src/app.jsx',
//     devServer: {
//         port: 3000,
//         hot: true,
//         inline: true,
//         publicPath: '/',
//     },
//     output: {
//         path: __dirname,
//         filename: './public/bundle.js'
//     },
//     resolve: {
//         extensions: ['', '.js', '.jsx']
//     },
//     module: {
//         loaders: [
//             {
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['react', 'es2015', 'stage-0']
//                 },
//                 test: /\.jsx?$/,
//                 exclude: /(node_modules|bower_components)/
//             }
//         ]
//     }
// };

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        // 'script!jquery/dist/jquery.min.js',
        // 'script!foundation-sites/dist/foundation.min.js',
        app: './src/app.jsx'
        },
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules'
        ],
        // alias: {
        //     src: 'src'
        // },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};