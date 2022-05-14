// Dynamic favicon
let icons = ["rock", "paper", "scissors"];
let i = 1;
let favicon = document.querySelector("#favicon");

function faviconLoop() {
  setInterval(function () {
    favicon.href = "./public/images/" + icons[i] + ".png";
    i == 2 ? (i = 0) : i++;
  }, 1500);
}

faviconLoop();
