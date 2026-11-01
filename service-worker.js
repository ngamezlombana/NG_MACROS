/* NG_MACROS CNC Studio - Service Worker
 * Estrategia: cache-first para el app shell (funciona sin conexión),
 * network-first con fallback a caché para navegación.
 * Sube CACHE_VERSION al cambiar assets para invalidar la caché anterior.
 */
const CACHE_VERSION = 'ng-macros-v4.4.0';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './macros_data.js',
  './vendor/fonts.css',
  './vendor/tailwindcss.js',
  './vendor/three.min.js',
  './vendor/OrbitControls.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_VERSION).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Navegación: intenta red, cae al index cacheado (SPA offline).
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Assets: cache-first, actualizando la caché en segundo plano.
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
