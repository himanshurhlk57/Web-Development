const inputField = document.querySelector('#input-field');
const encodeButton = document.querySelector('.btn-encode');
const decodeButton = document.querySelector('.btn-decode');
const result = document.querySelector('#output');

encodeButton.addEventListener('click', () => {
    if (inputField.value.length === 0) {
        alert("Input field can't be empty");
    } else {
        const stringToEncode = inputField.value;
        const encoded = btoa(inputField.value);
        result.value = encoded;
    }
});

decodeButton.addEventListener('click', () => {
    if (inputField.value.length === 0) {
        alert("Input field can't be empty");
    } else {
        const stringToDecode = inputField.value;
        const decoded = atob(inputField.value);
        result.value = decoded;
    }
});
