const path = require("path");
module.exports = {
    context: __dirname,
    entry: "./src/main.ts",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    resolveLoader: {
        alias: {
            'babel-fix-loader': path.join(__dirname, 'babel-fix-loader.js'),
        },
    },
    mode: 'production',
    module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: [
                'babel-fix-loader',
                'ts-loader'
            ],
            exclude: /node_modules/
        }
    ]
},
    optimization: {
        minimize: true, // Control if the output is monified (and uglified) or not
            usedExports: true
    },
};
