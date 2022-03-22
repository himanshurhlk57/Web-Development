const inputField = document.querySelector('#input-field');
const result = document.querySelector('#output');
const md5 = document.querySelector('.md5');
const sha1 = document.querySelector('.sha-1');
const sha256 = document.querySelector('.sha-256');
const sha512 = document.querySelector('.sha-512');

md5.addEventListener('click', () => {
    if (inputField.value.length === 0) {
        alert("Input field can't be empty");
    } else {
        const hashValue = CryptoJS.MD5(inputField.value);
        result.value = hashValue;
    }
});

sha1.addEventListener('click', () => {
    if (inputField.value.length === 0) {
        alert("Input field can't be empty");
    } else {
        const hashValue = CryptoJS.SHA1(inputField.value);
        result.value = hashValue;
    }
});

sha256.addEventListener('click', () => {
    if (inputField.value.length === 0) {
        alert("Input field can't be empty");
    } else {
        const hashValue = CryptoJS.SHA256(inputField.value);
        result.value = hashValue;
    }
});

sha512.addEventListener('click', () => {
    if (inputField.value.length === 0) {
        alert("Input field can't be empty");
    } else {
        const hashValue = CryptoJS.SHA512(inputField.value);
        result.value = hashValue;
    }
});
