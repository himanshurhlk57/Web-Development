// obj1.displayName()

// this refers to the object on which we call our function

// before the . i.e obj1 and i.e value of this inside displayName() -> this = obj1;

// function displayAge(){
// 	console.log(23, this);
// }
// displayAge(); 

// value of this inside displayAge is window object becuse the default is window.displayAge();


let obj1 = {
	displayAge: function(){
		console.log(23, this);
	}
}
obj1.displayAge();

value of this inside the function is obj1 i.e the key and value of obj1
