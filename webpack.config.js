var webpack = require('webpack');
module.exports = {
   
    entry: {
      app: './js/app.js',
    },
    output: {
      filename: 'bundle.js',
      path: __dirname + '/js',
    },
    plugins: [
        new webpack.ProvidePlugin({
             $: "jquery",  
             jQuery: "jquery",
             'window.jQuery': 'jquery' // <------------------ added this
         })
     ],
     module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
      },
  };