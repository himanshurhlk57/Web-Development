Lexical -> where in the code it is defined and not where we are calling it

var name = 'simran';

function displayName(){
	var age = 23;
	console.log(name);
	function displayAge(){
		console.log(age);
	}
	displayAge();
}
displayName();

In the GEC
name: 'simran'
displayName: fn()

in the displayName Execution Context
age: undefined
displayAge: fn()

And inside the displayAge execution context there 
is not any variable

displayAge will have reference to the lexical environment of displayName

Whenever your function is trying to access any variable if it is not present in the local memory of that function it will try to look in the local memory of its lexical parent and again if it is not present then it will look in its lexical parent