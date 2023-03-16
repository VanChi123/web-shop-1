const PROXY_CONFIG = [

  {
    context: [
      // '/api/item-group/get-all',
      '/api/product',
    ],
    target: "http://localhost:8080", //ChiBV
    secure: false,
    logLevel: "debug",
    changeOrigin: true
  },

]
module.exports = PROXY_CONFIG;
