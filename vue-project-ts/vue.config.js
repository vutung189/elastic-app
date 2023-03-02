module.exports = {
  productionSourceMap: false,
  outputDir: "dist",
  configureWebpack: {},

  chainWebpack: (config) => {
    config.resolve.alias.set("~$", resolve("./")).set("@$", resolve("src"));
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require("autoprefixer")()],
      },
    },
  },
  devServer: {
    port: 3000,
    proxy: {
      "/search": {
        target: import.meta.env.VITE_BASE_URL, // "https://mainsite.com"
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/search/": "/search/",
        },
      },
    },
  },
  assetsDir: "static/",
  runtimeCompiler: true,
};
