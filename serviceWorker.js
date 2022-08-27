const staticAssets = [
	"index.html",
	"style.css",
	"app.js",
	"serviceWorker.js",
];

self.addEventListener('install', async e => {
	const cache = await caches.open("pwa-static");
	cache.addAll(staticAssets);
});

self.addEventListener('fetch', async e => {
	const req = e.request;
	e.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
	const cachedResponse = await caches.match(req);
	return cachedResponse || fetch(req);
}
