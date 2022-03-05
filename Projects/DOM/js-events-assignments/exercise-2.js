const counterButton = document.querySelector('#counter-button');
const decrement = document.querySelector('#decrement');
const increment = document.querySelector('#increment');

let counter = 0;

decrement.addEventListener('click', () => {
    counter--;
    counterButton.value = counter;
})

increment.addEventListener('click', () => {
    counter++;
    counterButton.value = counter;
})