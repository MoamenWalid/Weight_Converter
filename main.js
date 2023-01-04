const inputNumber = document.querySelector('input[type= "number"]');

inputNumber.addEventListener('change', () => {
  makeUnits(inputNumber.value);
})

// Function to make units 
function makeUnits(num) {
  const gramsSpan = document.querySelector('.grams p');
  const kilogramsSpan = document.querySelector('.kilograms p');
  const ouncesSpan = document.querySelector('.ounces p');

  const grams = parseFloat(num / 0.0022046);
  const kilograms = parseFloat(num / 2.2046);
  const ounces = parseFloat(num * 16);

  gramsSpan.innerHTML = grams;
  kilogramsSpan.innerHTML = kilograms;
  ouncesSpan.innerHTML = ounces;
}