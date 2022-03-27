const redValue = document.querySelector('#red-input');
const greenValue = document.querySelector('#green-input');
const blueValue = document.querySelector('#blue-input');
const hexValue = document.querySelector('#hex-output');
const convertButton = document.querySelector('.convert');
const resetButton = document.querySelector('.reset');
const colorBox = document.querySelector('.color-box');

function rgbToHex(rgbValue) {
    const hexCode = Number(rgbValue).toString(16);
    if (hexCode.length < 2) {
        hex = `"0"${hexCode}`;
    }
    return hexCode;
}

convertButton.addEventListener('click', () => {
    const red = rgbToHex(redValue.value);
    const green = rgbToHex(greenValue.value);
    const blue = rgbToHex(blueValue.value);
    hexValue.value = `#${red}${green}${blue}`;
    colorBox.style.backgroundColor = hexValue.value;
});

resetButton.addEventListener('click', () => {
    redValue.value = '';
    greenValue.value = '';
    blueValue.value = '';
    hexValue.value = '';
    colorBox.style.backgroundColor = '';
});

convertButton.addEventListener('click', () => {
    if (redValue.value.length === 0) {
        alert("Input field can't be empty");
    }
});
