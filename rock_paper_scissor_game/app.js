const buttons = document.querySelectorAll("button");
const resultEl = document.querySelector("#result");
const playerScoreEl = document.querySelector("#user-score");
const computerScoreEl = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
    let result = playround(button.id, computerPlay());
    resultEl.textContent = result;
  });
});
function computerPlay() {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function playround(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return "Draw!";
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You Win!" + playerChoice + " beats " + computerChoice;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You Lose!" + computerChoice + " beats " + playerChoice;
  }
}
