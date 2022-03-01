// 1 -> Spread
// 
// Array

const array = ['c', 2, 3];

// With the help of spread operator i.e ... dot we can copy the element of array in the new array easily

// const newArray = [...array];
// console.log(newArray);

// can also add 1 in the begining very easily
// const newArray = [1, ...array];
// console.log(newArray);

// can also add element in the last 
const newArray = [...array, 5];
console.log(newArray);

const num1 = [1,2,4];
const num2 = [5,8,9];
let num3 = [...num1, ...num2];
console.log(num3);

// want to add newElement in front or between while copying

let num4 = [56, ...num1, 39, ...num2];

function sum(x, y, z){
	console.log(x+y+z);
}

let nums = [1,2,3];
sum(...nums);

// Object

const setting = {
	volume: 10,
	brightness: 80,
};

// // This copy is getting done by reference
// newSetting and settings both are same object newSetting is only pointing to settings object
// the objects key value has not been copied.
const newSetting = setting;
newSetting.volume = 20;
console.log(setting.volume); //20
console.log(newSetting);

// Copy object by value reference of both the object should be different
// With the help of spread operator
const settings = {
	volume: 10,
	brightness: 80,
};
// const newSettings = {...settings};
// //shallow copy
// newSettings.volume = 20;
// console.log(settings.volume); 
// Settings volume will be 10 only because we have changed the value of newSettings value and both are not pointing to same memory address


// const newSettings = {...settings, contrast: 50};
// A new key value has been added to newSettings object 

// After a shallow copy volume value also has been modified
const newSettings = {...settings, volume: 50};
console.log(newSettings);


// 2 -> Rest
// 
// Rest are also ... dot but it gets used with function

const result = (x,y, ..rest){
	console.log(rest); // [30 40]
	console.log(x + y + rest[0] + rest[1]);
}
result(10, 20, 30, 40);

const addItems = (a, b, c) => {
	console.log(a + b + c);
};

addItems(3,2,4);

// If we don't know how many parameter my function is going to recieve in that case i can use ...
// in my function parameter with any name
// Here items is array
const addItems1 = (...items) => {
	console.log(items);
}

addItems1(3,2,3,4);



























