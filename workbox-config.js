module.exports = {
    globDirectory: 'build/',
    globPatterns: [
      '**/*.{html,js,css,png,jpg,jpeg,svg}'
    ],
    swDest: 'build/service-worker.js',
    navigateFallback: '/index.html',
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [{
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'offlineCache',
        expiration: {
          maxEntries: 200
        }
      }
    }],
  };
  