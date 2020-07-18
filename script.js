let vm = new Vue({
  el: "#app",
  methods: {
    click: function () {
      let audioC = new Audio("./assets/Clicking.mp3");
      audioC.play();
      audioC.volume = 0.2;
    },
    thermal: function () {
      let head = document.getElementById("header");
      let audioT = new Audio("./assets/predator_vision.mp3");
      if (document.getElementById("Thermal").checked === true) {
        audioT.play();
        audioT.volume = 0.5;
        document.documentElement.style.animation =
          "glow 1s ease-in-out 1 alternate";
        setTimeout(function () {
          document.body.style.backgroundImage =
            "url('./img/thermal-vision.jpg')";
          head.classList.add("thermal");
          document.documentElement.style.animation = "none";
        }, 500);
      } else {
        audioT.play();
        audioT.volume = 0.5;
        audioT.playbackRate = 2;
        document.documentElement.style.animation =
          "glow 1s ease-in-out 1 alternate";
        setTimeout(function () {
          document.body.style.backgroundImage =
            "url('./img/foggy-forest.jpeg')";
          head.classList.remove("thermal");
          document.documentElement.style.animation = "none";
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
