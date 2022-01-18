const path = require('path');

module.exports = {
    entry : "./index.js",
    mode: "development",

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
        // you need to add historyApiFallback for router to work
        historyApiFallback: true
    },
}