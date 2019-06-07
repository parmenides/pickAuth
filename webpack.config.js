const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    mode: "development",
    entry: path.join(__dirname, '/src/server.ts'),
    context: path.resolve(__dirname, 'src'),
    target: "node",
    externals: [nodeExternals()],
    devtool: "inline-source-map",
    module: {
        rules: [

            {
                test:/\.ts?$/,
                use:'ts-loader',
                exclude:/node_modules/
            },
            {
                test:/\.ts?$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use:
                    {
                        loader: 'tslint-loader',
                        options: {

                            // tslint errors are displayed by default as warnings
                            // set emitErrors to true to display them as errors
                            emitErrors: true,

                            // tslint does not interrupt the compilation by default
                            // if you want any file with tslint errors to fail
                            // set failOnHint to true
                            failOnHint: true
                        }
                    }

            },
            {
                test: /\.ts?$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: {
                    loader: 'prettier-loader',
                    // force this loader to run first if it's not first in loaders list
                    // avoid running prettier on all the files!
                    // use it only on your source code and not on dependencies!
                }
            }
        ]
    },
    watchOptions: {
        ignored: /node_modules|dist/,
    },
    resolve: {
        extensions: ['js','ts','tsx']
    },
    output: {
        libraryTarget: "commonjs",
        filename: "pickAuth.js",
        path: path.resolve(__dirname,'dist')
    }
};