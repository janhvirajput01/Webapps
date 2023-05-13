const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let timeLeft = 1500;
let interval;

function updateTimer() {
  let min = Math.floor(timeLeft / 60);
  let sec = timeLeft % 60;

  let formatTime = `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
  timer.innerHTML = formatTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's Up!");
      timeLeft = 1500;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;

  updateTimer();
}
start.addEventListener("click", startTimer);

stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
