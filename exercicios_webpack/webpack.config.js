const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js',
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{ // carregador do babel. O babel funciona para converter
                    // a sintaxe mais atual para o padrao mais antigo. So assim
                    // o browser conseque ler. Esse loader servira ate os browsers
                    // suportarem a sintaxe mais atual
            test: /.js?$/, // so olha pra arquivos que dao match com o regex
            loader: 'babel-loader',
            exclude: '/node-modules',
            query: { // processo que sera executado dentro do loader
                presets: ['es2015', 'react'], // seta qual o padrao o babel vai interpretar
                plugins: ['transform-object-rest-spread']
            }
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    }
}