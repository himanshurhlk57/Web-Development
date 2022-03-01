// every

const persons = [
	{name: 'rohit', age: 28},
	{name: 'sneha', age: 20},
	{name: 'rahul', age: 15},
	{name: 'kanhaiya', age: 40}
];

// based on our condition if all the condition is true then every return true 

let every = persons.every((person) => {
	return person.age >= 18;
});

console.log(every); // false

// because in the persons array rahul has age less than 18 so the condition is not true so it return false;

// some

let some = persons.some((person) => {
	return person.age >= 18;
});

console.log(some); //true

// some of the person in the persons array ahs age greater than 18 so the condition is true.
// If we have the logic age>=40 it will return false because no one has age greater than 40