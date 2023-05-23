const { defineConfig } = require("@vue/cli-service");
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === "production" ? "/The_Newsletter/" : "/",
  outputDir: "dist",
  assetsDir: "static",
  pluginOptions: {
    dotenv: {
      path: ".env",
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
        onProxyRes: function (proxyRes, req, res) {
          proxyRes.headers["Access-Control-Allow-Origin"] = "*";
          proxyRes.headers["Access-Control-Allow-Methods"] =
            "GET, POST, PUT, DELETE, OPTIONS";
          proxyRes.headers["Access-Control-Allow-Headers"] = "Content-Type";
        },
      },
    },
  },
});
