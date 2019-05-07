/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
const path = require("path");
module.exports={
    entry:'./src/simple.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode:"development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}