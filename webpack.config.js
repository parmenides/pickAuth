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