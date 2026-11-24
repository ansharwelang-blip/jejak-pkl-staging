/* Service worker JEJAK PKL v1.1: menyimpan TAMPILAN aplikasi agar tetap terbuka saat sinyal lemah.
   Data jurnal tidak disimpan di sini (draf & antrean ada di IndexedDB per akun); permintaan ke server
   Apps Script (POST, beda alamat) tidak pernah di-cache. Nama cache memuat versi DAN lokasi aplikasi,
   sehingga versi produksi dan staging di domain yang sama tidak saling menimpa. */
const VERSION = '1.1.0';
const CACHE = 'jejak-pkl-' + VERSION + '-' + self.registration.scope;
const SHELL = ['./', 'index.html', 'app.css', 'app.js', 'config.js', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('jejak-pkl-') && k.endsWith(self.registration.scope) && k !== CACHE || k === 'jejak-pkl-v1.0.0').map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return;
  if (url.origin === location.origin && url.href.startsWith(self.registration.scope)) {
    e.respondWith(fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; }).catch(() => caches.match(req).then(r => r || caches.match('index.html'))));
  } else if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })));
  }
});
