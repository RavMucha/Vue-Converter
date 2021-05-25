const staticVue = "vue-avp"
const assets = [
  "/",
  "/index.html",
  "/Style.css",
  "/code.js",
  "/img/foggy-forest.jpeg",
  "/img/LOGO.PNG",
  "/img/thermal-vision.jpg",
  "/assets/Clicking.mp3",
  "/assets/Pred.cur",
  "/assets/invisibl.ttf",
  "/assets/predator_vision.mp3",
  "/img/android-chrome-48x48.png",
  "/img/apple-touch-icon.png",
  "/img/favicon-16x16.png",
  "/img/favicon-32x32.png",
  "/img/favicon-150x150.png"
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