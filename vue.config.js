const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  transpileDependencies: ['vuetify'],
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  runtimeCompiler: true,
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `@import "~@/styles/index.scss"`,
  //     },
  //   },
  // },
  // chainWebpack: (config) => {
  //   ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach((match) => {
  //     config.module
  //       .rule('scss')
  //       .oneOf(match)
  //       .use('sass-loader')
  //       .tap((opt) => Object.assign(opt, { data: `@import '~@/styles/index.scss';` }));
  //   });
  // },
  configureWebpack: {
    optimization: {
      minimize: process.env.NODE_ENV === 'production',
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
        chunks: 'all',
      },
    },
    performance: {
      hints: false,
    },
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|ts|vue|css|html|svg)$/,
        compressionOptions: { level: 1 },
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false,
      }),
    ],
  },
  pluginOptions: {
    i18n: {
      locale: 'ja',
      fallbackLocale: 'ja',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  pwa: {
    name: 'hieu-porfolio',
    workboxOptions: {
      skipWaiting: true,
    },
  },
};
