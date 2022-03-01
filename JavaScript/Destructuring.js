// with object
const user = {
	name: 'John Doe',
	age: 30,
};

//Destructring
// const { name, age} = user;

const { name: fullName, age} = user;

// console.log(name);
console.log(age);
console.log(fullName);


// with array
const data = ['Rakesh', 30, 'Engineer'];
const [name, age1, profession] = data;
console.log(name);