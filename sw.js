var cacheName = 'restaurant-cache-1';

let urlToCache = [
    './',
	'./img/1.jpg',
	'./img/2.jpg',
	'./img/3.jpg',
	'./img/4.jpg',
	'./img/5.jpg',
	'./img/6.jpg',
	'./img/7.jpg',
	'./img/8.jpg',
	'./img/9.jpg',
	'./img/10.jpg',
	'./js/dbhelper.js',
	'./js/main.js',
	'./js/restaurant_info.js',
	'./index.html',
	'./restaurant.html',
	'./css/styles.css',
	'./data/restaurants.json',
	'./restaurant.html?id=1',
	'./restaurant.html?id=2',
	'./restaurant.html?id=3',
	'./restaurant.html?id=4',
	'./restaurant.html?id=5',
	'./restaurant.html?id=6',
	'./restaurant.html?id=7',
	'./restaurant.html?id=8',
	'./restaurant.html?id=9',
	'./restaurant.html?id=10'
];

/**
 * openes the cache and caches all files
 * added all restaurant_info pages to could have done this with a for loop
 */
self.addEventListener('install', function(event) {
	
	event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log(cache);
            return cache.addAll(urlToCache);

        }).catch(error => {
            console.log(error);
        })
    );
    
		
});
/**
 * fetch all files from cache
 */
self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request)
		.then(function (response) {
            return response || fetch(event.request);
        })
    );
});
