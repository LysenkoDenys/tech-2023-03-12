// const CACHE_NAME = 'my-cache';
// self.addEventListener('install', (e) => {
//   console.log('installing SW'); //
//   e.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache
//         .addAll(['/', 'index.html', 'static/js/bundle.js'])
//         .then(() => self.skipWaiting());
//     })
//   );
// });

// self.addEventListener('activate', (event) => {
//   console.log('activating SW'); //
//   event.waitUntil(self.clients.claim());
// });

// self.addEventListener('fetch', function (event) {
//   console.log(`fetching ${event.request.url}`); //
//   if (navigator.online) {
//     var fetchRequest = event.request.clone();
//     return fetch(fetchRequest).then(function (response) {
//       if (!response || response.status !== 200 || response.type !== 'basic') {
//         return response;
//       }

//       var responseToCache = response.clone();

//       caches.open(CACHE_NAME).then(function (cache) {
//         cache.put(event.request, responseToCache);
//       });
//       return response;
//     });
//   } else {
//     event.respondWith(
//       caches.match(event.request).then(function (response) {
//         if (response) {
//           return response;
//         }
//       })
//     );
//   }
// });

const CACHE_NAME = 'my-cache';
const urlsToCache = ['/', 'index.html', 'static/js/bundle.js'];

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
