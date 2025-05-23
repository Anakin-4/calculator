self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('anakin-calc-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/click.mp3',
        '/funny.mp3',
        '/wiggle.gif',
        '/favicon.ico'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});