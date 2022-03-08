const redData = document.querySelector('#red');
const greenData = document.querySelector('#green');
const blueData = document.querySelector('#blue');
const converterButton = document.querySelector('#convert-button');
const hexValue = document.querySelector('#hex-value');

converterButton.addEventListener('click', () => {
    if(redData.value.length === 0 && greenData.value.length === 0 && redData.value.length === 0){
        alert("Input field can't be empty");
    }else{

        const hexResult = '#' + parseInt(redData.value).toString(16) + parseInt(greenData.value).toString(16) + parseInt(blueData.value).toString(16);
        hexValue.value = hexResult;
    }
 
})