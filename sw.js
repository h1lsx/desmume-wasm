const cacheName = "v2";
const cacheURLs = [
    "/",
    "/build/nds.js",
    "/build/nds.wasm",
    "/app.wasm",
    "/build/",
    "/audio-worklet.js",
    "/dark.css",
    "/icon.png",
    "/index.html",
    "/localforage.js",
    "/pako.min.js",
    "/style.css"
];
var abc = document.getElementById("install-button");
abc.addEventListener('click', a => {
    caches.open(cacheName).then(cache.addAll(cacheURLs))
})
