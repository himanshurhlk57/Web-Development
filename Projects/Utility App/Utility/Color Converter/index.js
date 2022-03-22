const redValue = document.querySelector('#red-input');
const greenValue = document.querySelector('#green-input');
const blueValue = document.querySelector('#blue-input');
const hexValue = document.querySelector('#hex-output');
const convertButton = document.querySelector('.convert');
const resetButton = document.querySelector('.reset');
const colorBox = document.querySelector('.color-box');

// convertButton.addEventListener('click', () => {
//     if (redValue.value.length === 0) {
//         alert("Input field can't be empty");
//     }
// });

// resetButton.addEventListener('click', () => {
//     redValue.value = '';
//     greenValue.value = '';
//     blueValue.value = '';
// });

convertButton.addEventListener('click', () => {
    console.log('clicked');
    console.log(hexValue.value);
   const color = hexValue.value;
    colorBox.style.backgroundColor = color;
});
