// sum of array element using for loop
const numbers = [1,2,3];
let sum = 0;
for(let i = 0; i<numbers.length; i++){
	sum += numbers[i];
}
console.log(sum);


// sum of array element using reduce helper
// here previous is 4
const sumUsingReduce = numbers.reduce((previous, number) => {
	
	return previous + number;
}, 4);

console.log(sumUsingReduce); // 4+1+2+3

// maximum inside an array

const numbers = [1,2,3,4];

const maximum = numbers.reduce((previous, number) => {
    if(number > previous){
         previous = number;
     }
     return previous;
}, numbers[0]);

console.log(maximum);


// reduce on two different array

const firstNames = ['John', 'Jane', 'Mary'];
const lastNames = ['smith', 'brown', 'doe'];

const fullNames = firstNames.reduce((previous, firstName, index) => {
	previous.push(firstName + ' ' + lastNames[index]);
	return previous;
}, []);

console.log(fullNames);