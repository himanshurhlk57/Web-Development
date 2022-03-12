const inputField = document.querySelector('#input-field');
const encodeButton = document.querySelector('.btn-encode');
const decodeButton = document.querySelector('.btn-decode');
const result = document.querySelector('#output');



encodeButton.addEventListener('click', () => {
    if(inputField.value.length === 0){
        alert("Input field can't be empty");
    }else{
        const urlToEncode = inputField.value;
        const encodedUrl = encodeURIComponent(urlToEncode);
        result.value = encodedUrl;
    }
})

decodeButton.addEventListener('click', () => {
    if(inputField.value.length === 0){
        alert("Input field can't be empty");
    }else{
        const urlToDecode = inputField.value;
        const decodedUrl = decodeURIComponent(urlToDecode);
        result.value = decodedUrl;
    }
})





