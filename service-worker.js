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


// self.addEventListener('fetch', function (e) {
//     e.respondWith(
//         // check if the cache has the file     
//         caches.match(e.request).then(function (r) {
//             console.log('[Service Worker] Fetching resource: ' + e.request.url);
//             // r is the matching file if it exists in the cache        
//             return r
//         }));
// });

// self.addEventListener("fetch", function (e) {
//     e.respondWith(
//         caches.match(e.request).then(function (cachedFile) {
//             //if the file is in the cache, retrieve it from there         
//             if (cachedFile) {
//                 console.log("[Service Worker] Resource fetched from the cache for: " + e.request.url);
//                 return cachedFile;
//             } else {
//                 //if the file is not in the cache, download the file            
//                 return fetch(e.request).then(function (response) {
//                     return caches.open(cacheName).then(function (cache) {
//                         //add the new file to the cache                  
//                         cache.put(e.request, response.clone());
//                         console.log("[Service Worker] Resource fetched and saved in the cache for: " + e.request.url);
//                         return response;
//                     });
//                 });
//             }
//         }));
// });