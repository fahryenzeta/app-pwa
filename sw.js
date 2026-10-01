self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
// Chrome mensyaratkan handler fetch; app selalu ambil dari jaringan
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
