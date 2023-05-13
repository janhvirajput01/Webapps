const timer = document.querySelector("#timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let sec = 0;
let min = 0;
let hr = 0;

let leadingsec = 0;
let leadingmin = 0;
let leadinghr = 0;

let timeInterval = null;

function play() {
  sec++;
  if (sec / 60 === 1) {
    sec = 0;
    min++;

    if (min / 60 === 1) {
      min = 0;
      hr++;
    }
  }

  if (sec < 10) {
    leadingsec = "0" + sec;
  } else {
    leadingsec = sec;
  }

  if (min < 10) {
    leadingmin = "0" + min;
  } else {
    leadingmin = min;
  }

  if (hr < 10) {
    leadinghr = "0" + hr;
  } else {
    leadinghr = hr;
  }
  document.querySelector("#timer").innerText =
    leadinghr + ":" + leadingmin + ":" + leadingsec;
}
start.addEventListener("click", () => {
  timeInterval = window.setInterval(play, 1000);
});

stop.addEventListener("click", () => {
  window.clearInterval(timeInterval);
});

reset.addEventListener("click", () => {
  window.clearInterval(timeInterval);
  document.querySelector("#timer").innerText = "00:00:00";
  sec = 0;
  min = 0;
  hr = 0;
});
