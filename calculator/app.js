const input = document.querySelector("#result");
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const btnvalue = buttons[i].textContent;
    if (btnvalue == "C") {
      clearResult();
    } else if (btnvalue == "=") {
      calculateResult();
    } else {
      appendValue(btnvalue);
    }
  });
}

function clearResult() {
  input.value = "";
}
function calculateResult() {
  input.value = eval(input.value);
}
function appendValue(btnvalue) {
  input.value += btnvalue;
}
