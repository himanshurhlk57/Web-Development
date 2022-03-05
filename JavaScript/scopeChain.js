function a() {
	console.log(b); //can access b even if it is outside function scope
}
var b = 10;
a();


function a(){
	c();
	function c(){
		console.log(b); //still can access b
	}
}
var b = 10;
a();


function a(){
	var b = 10;
	c();
	function c(){
		console.log(b); //still can access b
	}
}
a();

First javascript engine tries to search b in the local space of
function c there it didnt find c then it tries searching for c 
in its lexical parent execution context there it find b so it printed b

function a(){
	var b = 10;
	c();
	function c(){
	}
}

a();
console.log(b); //now i cant acces b because b is function scope var is function scope

whenever an execution context is created lexical environment is also created

lexical environment is the local memory along with lexical environment of its parent










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