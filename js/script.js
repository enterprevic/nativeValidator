const input = document.querySelector('#integer')
const output = document.querySelector('.result')

input.addEventListener('input', e => {

  output.innerText = input.validationMessage;
})