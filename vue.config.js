const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production" ? "/vuejs-movie-app/movie-app/" : "/",
  transpileDependencies: true,
  lintOnSave: false,
});
