// Spotify Soul: service worker mínimo para que el navegador la instale como app.
// No guarda nada en caché: siempre pide la versión más reciente a la red.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request))});
