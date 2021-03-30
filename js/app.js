const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const calculation = document.querySelector(".calculation");
const answer = document.querySelector(".answer");
const clear = document.querySelector(".utility")
const equals = document.querySelector(".equals")
const squareRoot = document.querySelector(".sqrt")

// -----------------NUMBERS------------
numbers.forEach(num => {
  num.addEventListener("click", (e) => {
    calculation.textContent += e.target.textContent
  })
})

// -----------OPERATOR------------------

operators.forEach(operate => {
  operate.addEventListener("click", (e) => {
    calculation.textContent += " " + e.target.textContent + " "
  })
})

squareRoot.addEventListener("click", () => {
  const calc = calculation.textContent.replace(/\s+/g, "");
    answer.textContent = Math.sqrt(eval(calc)).toFixed(2)
    calculation.textContent = answer.textContent
})


equals.addEventListener("click", ()=> {
  if (calculation.textContent) {
    const calc = calculation.textContent.replace(/\s+/g, "");
    answer.textContent = eval(calc).toFixed(2)
    calculation.textContent = answer.textContent
  }
})


// -------------CLEAR SCREEN--------------

clear.addEventListener("click", () => {calculation.textContent = ""
answer.textContent = ""})