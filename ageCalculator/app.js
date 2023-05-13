const date = document.getElementById("age");
const result = document.getElementById("result");
const btn = document.getElementById("calc");

function calculate() {
  const dateValue = date.value;

  if (dateValue == "") {
    alert("please enter your age");
  } else {
    const ageResult = getAge(dateValue);

    // console.log(ageResult);
    result.innerText = `Your age is ${ageResult}`;
  }
}
function getAge(dateValue) {
  const currDate = new Date();
  const birthdayDate = new Date(dateValue);
  let age = currDate.getFullYear() - birthdayDate.getFullYear();

  const month = currDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

btn.addEventListener("click", calculate);
