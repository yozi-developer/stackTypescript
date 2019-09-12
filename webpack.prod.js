module.exports = {
    context: __dirname,
    entry: "./src/main.ts",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    mode: 'production',
    module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
    ]
},
    optimization: {
        minimize: true, // Control if the output is monified (and uglified) or not
            usedExports: true
    },
};
