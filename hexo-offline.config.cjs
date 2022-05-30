// offline config passed to workbox-build.
module.exports = {
    globPatterns: ["**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}"],
    globDirectory: "C:/blog/public",
    swDest: "/blog/themes/fluid/source/js/sw.js",
  }
  service_worker:
  runtimeCaching:
    - urlPattern /*
      handler: cacheFirst
      options:
        origin: www.yumoe.live */