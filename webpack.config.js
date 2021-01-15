const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loader = require('sass-loader');

module.exports = (env) => {
    const isProduction = env === 'production';
    
    
    console.log('*****env', env)
    return {
        entry: './src/app.js',
        output: {
            path:path.join(__dirname,'public','dist'),
            filename:'bundle.js'
        },
        mode: 'none',
        module: {
            rules:[{
                loader: 'babel-loader',
                test:/\.js$/,
                exclude: /node_modules/
            },
        {
            test:/\.s?css$/,
//            use:['style-loader', 'css-loader', 'sass-loader']
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }]
        },
        plugins:[
            new MiniCssExtractPlugin({filename: 'styles.css'})
        ],
        devtool: isProduction ? 'source-map':'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
}