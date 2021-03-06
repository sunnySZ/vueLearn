var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        test: /\.less$/,
                        loader: "style-loader!css-loader!less-loader",
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        proxy: {
            //将请求地址里的'/v2'通过本地开发服务器webpack-dev-server转发到'https://api.douban.com'
            '/v2': {
                target: 'https://api.douban.com',
                pathRewrite: {'^/v2': '/v2'}, //将 '^/v2'    https://api.douban.com/v2
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true
            }
        }
    },
    performance: {
        hints: false
    },
 //   devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {

    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}else{
    module.exports.devtool = '#source-map'
}
