module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production' ? 'https://cdn.jsdelivr.net/gh/bingco-zhan/cdn@0.0.7/vue-form-dragger/' : '',
  assetsDir: 'static'
}