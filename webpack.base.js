// webpack.config.js

module.exports = {
  // 其他配置...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader', // 加入 postcss-loader 處理媒體查詢
        ],
        exclude: /node_modules/,
      },
      // 其他 loader 配置...
    ],
  },
};
