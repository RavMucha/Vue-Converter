const staticVue = "vue-avp"
const assets = [
  "/",
  "/index.html",
  "/Style.css",
  "/code.js",
  "/img/foggy-forest.jpeg",
  "/img/favicon.ico",
  "/img/thermal-vision.jpg",
  "/assets/Clicking.mp3",
  "/assets/Pred.cur",
  "/assets/invisibl.ttf",
  "/assets/predator_vision.mp3",
  "/img/favicon-48x48.png",
  "/img/apple-touch-icon.png",
  "/img/favicon-144x144.png",
  "/img/favicon-192x192.png",
  "/img/android-launchericon-72-72.png",
  "/img/android-launchericon-96-96.png",
  "/img/favicon-32x32.png",
  "/img/android-chrome-512x512.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticVue).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })