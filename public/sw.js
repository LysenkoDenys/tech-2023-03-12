/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'my-cache';
const urlsToCache = [
  '/',
  'index.html',
  // 'static/css/main.ddf4afa8.css',
  // 'static/js/main.54cd1718.js',
  // 'static/media/2021-11-15-2.31a24c4f285e134d9853.jpg',
  // 'static/media/bg-01.d909c4d18bde432222e3.png',
  // 'static/media/h-01.b55750694ac8e72ab2c8.png',
  // 'h-02.d841a972af327501b510.png',
];

self.addEventListener('install', (event) => {
  console.log('installing SW');
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  console.log('activating SW');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  console.log(`fetching ${event.request.url}`);
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          return response; // return cached response if found
        }
        return fetch(event.request).then((response) => {
          if (
            !response ||
            response.status !== 200 ||
            response.type !== 'basic'
          ) {
            return response;
          }

          // Clone the response and cache it
          let responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
      .catch(() => {
        // Fallback in case of a network error and resource is not cached
        return caches.match('index.html');
      })
  );
});
