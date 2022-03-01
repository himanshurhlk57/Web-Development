// filter
// return array of object based on our logic

const persons = [
	{name: 'rohit', gender: 'male'},
	{name: 'sneha', gender: 'female'},
	{name: 'rahul', gender: 'male'}
];

const malePerson = persons.filter((person) => {
	return person.gender === 'male';
});

console.log(malePerson);


// find
// works in the sameway as find but the difference is as soon as it find the true condition it terminates and return the first object from the array

const personsFind = [
	{name: 'sneha', gender: 'female'},
	{name: 'rohit', gender: 'male'},
	{name: 'rahul', gender: 'male'}
];

const malePersonFind = personsFind.find((person) => {
	return person.gender === 'male';
});

console.log(malePersonFind);