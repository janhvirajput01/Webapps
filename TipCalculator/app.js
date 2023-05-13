const bill = document.getElementById("amount");
const tip = document.getElementById("tip");
const btn = document.getElementById("calc");
const total = document.getElementById("total");
function calculate() {
  const billValue = bill.value;
  const tipValue = tip.value;
  const totalValue = (billValue * (1 + tipValue)) / 100;
  total.innerText = totalValue.toFixed(2);
}

btn.addEventListener("click", calculate);
