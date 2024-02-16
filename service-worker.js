var cacheName = "petstore-v1"; var cacheFiles = ["index.html",   //"products.js",  
    "images/pg.png",
    "images/png.png",
    "https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/Images/basket.png",
    "https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/Images/search.png",
    "https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/Images/maths.png",
    "https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/Images/ai.png",
    "https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/Images/cs.png",
    "https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/Images/cybersecurity.png",
    "https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/Images/english.png",
    "https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/Images/music.png",
    "https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/Images/networking.png",
    "https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/Images/science.png",
    "https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/Images/psychology1.png",
    "https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/Images/ss.png"
];

self.addEventListener("install", function (e) {
    console.log("[Service Worker] Install");
    e.waitUntil(caches.open(cacheName).then(function (cache) {
        console.log("[Service Worker] Caching files"); return cache.addAll(cacheFiles);
    }
    ));
});
self.addEventListener('https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/lessons', function (e) {
    e.respondWith(
        // check if the cache has the file     
        caches.match(e.request).then(function (r) {
            console.log('[Service Worker] Fetching resource: ' + e.request.url);
            // r is the matching file if it exists in the cache        
            return r
        }));
});

