if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("../serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

let vm = new Vue({
  el: "#app",
  methods: {
    click: function () {
      let audioC = new Audio("./assets/Clicking.mp3");
      audioC.play();
      audioC.volume = 0.2;
    },
    thermal: function () {
      let app = document.getElementById("app");
      let head = document.getElementById("header");
      let foot = document.getElementById("credit");
      let nav = document.getElementById("navi");
      let audioT = new Audio("./assets/predator_vision.mp3");
      if (document.getElementById("Thermal").checked === true) {
        audioT.play();
        audioT.volume = 0.5;
        foot.style.animation = "glow .7s ease-in-out 1 alternate";
        nav.style.animation = "glow .7s ease-in-out 1 alternate";
        setTimeout(function () {
          document.body.style.backgroundImage =
            "url('./img/thermal-vision.jpg')";
          head.classList.toggle("thermal");
          nav.classList.toggle("thermalNav");
          app.classList.toggle("thermalConv");
          foot.classList.toggle("thermalNav");
          foot.style.animation = "none";
          nav.style.animation = "none";
        }, 500);
      } else {
        audioT.play();
        audioT.volume = 0.5;
        audioT.playbackRate = 2;
        foot.style.animation = "glow .7s ease-in-out 1 alternate";
        nav.style.animation = "glow .7s ease-in-out 1 alternate";
        setTimeout(function () {
          document.body.style.backgroundImage =
            "url('./img/foggy-forest.jpeg')";
          head.classList.toggle("thermal");
          nav.classList.toggle("thermalNav");
          app.classList.toggle("thermalConv");
          foot.classList.toggle("thermalNav");
          head.classList.remove("thermal");
          foot.style.animation = "none";
          nav.style.animation = "none";
        }, 500);
      }
    },
  },
  data: {
    cels: 0,
    fahr: 0,
    mile: 0,
    km: 0,
    kg: 0,
    lbs: 0,
    m: 0,
    ft: 0,
    seen1: true,
    seen2: true,
    seen3: false,
  },
});
