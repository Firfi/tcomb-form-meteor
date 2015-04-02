module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "dist.js",
        libraryTarget: "umd",
        library: "t"
    },
    externals: {
        react: 'React'
    }
};
