const dice = document.getElementById("dice");
const btn = document.getElementById("rol-btn");
const history = document.getElementById("history");
let historyList = [];
function rollDice() {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(diceValue);

  dice.innerHTML = diceFace;
  historyList.push(diceValue);
  updateHistory();
}

function updateHistory() {
  history.innerHTML = "";

  for (let i = 0; i < historyList.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `Roll ${i + 1} <span>${getDiceFace(historyList[i])}</span>`;
    history.appendChild(li);
  }
}

function getDiceFace(diceValue) {
  switch (diceValue) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}
btn.addEventListener("click", () => {
  dice.classList.add("roll-animation");
  setTimeout(() => {
    dice.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
