const inputField = document.querySelector('#input-field');
const outputBox = document.querySelector('.output-color');

inputField.addEventListener('input', () => {
    outputBox.style.backgroundColor = inputField.value;
})