// 1 -> Callbacks

function computeAndPrint(firstNum, secondNum, func){
	console.log(func(firstNum, secondNum));
}

function add(firstNum, secondNum){
	return firstNum + secondNum;
}

computeAndPrint(42,5,add);

// Assignin a function named func to another function add

const add1 = function func(firstNum, secondNum){
	return firstNum + secondNum;
}

console.log(add1(2,3));

// we can also write the upper function as 

const add2 = (firstNum, secondNum) => {
	return firstNum + secondNum;
}

console.log(add2(3,3));

// also if the return statement is doing only one task we can do
const add3 = (firstNum, secondNum) => firstNum + secondNum;
console.log(add3(3,7));


//passing arrow function as a argument 
computeAndPrint(42,7, (firstNum, secondNum) => firstNum + secondNum);