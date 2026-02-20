const CACHE_NAME = 'bodega-myluz-v2';
const ASSETS = [
  'index.html',
  'pedidos.html',
  'pagos.html',
  'manifest.json',
  'assets/img/logo.ico',
  'assets/img/logo.png'
];

// Instalar el Service Worker y guardar archivos base en caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Escuchar peticiones y servir desde caché si no hay internet
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
