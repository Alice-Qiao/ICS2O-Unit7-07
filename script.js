let number = 0
let coefficient = 0
let counter = 0
let sum = 0

document.getElementById('submit').addEventListener('click', calculate)
// will activate function calculate when button is clicked

function calculate () {
  number = document.getElementById('number').value
  coefficient = document.getElementById('coefficient').value
  number = parseInt(number)
  coefficient = parseInt(coefficient)
  sum = 0

  for (counter = 0; counter < coefficient; counter++) {
    sum = sum + number
  }
  document.getElementById('sum').innerHTML = sum
}
