const path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
                test: /\.js$/i,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                }, ],
            },
            {
                test: /\.(glsl|frag|vert)$/,
                use: 'webpack-glsl-loader'
            },
            // {
            //     test: /\.(glsl|frag|vert)$/,
            //     exclude: /node_modules/,
            //     use: [
            //         'raw-loader',
            //         {
            //             loader: 'glslify-loader',
            //             options: {
            //                 transform: [
            //                     ['glslify-hex', {
            //                         'option-1': true,
            //                         'option-2': 42
            //                     }]
            //                 ]
            //             }
            //         }
            //     ]
            // }
        ],
    },
    // devServer: {
    //     contentBase: path.resolve(__dirname, 'dist'),
    //     watchContentBase: true,
    // },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        watchContentBase: true,
        host: '0.0.0.0', //your ip address
        port: 8080,
        disableHostCheck: true,
    }
};