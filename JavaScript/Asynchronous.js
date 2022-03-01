// 1st Case

console.log('Hello World!');
console.log('Hello Again');


// After logging the above two statement in the console the setTimeout will log the inner log after 3 sec to the console because of the setTimeout property.

setTimeout(function(){
	console.log('I am from setTimeOut')
}, 3000);


// 2nd case

// if i put the asynchronous code between the two console statement it will not block the third console.log code to excute bot the console code will get excute and then after three second the 'I am from setTimeOut' will get logged in the console;

console.log('Hello World!');

setTimeout(function(){
	console.log('I am from setTimeOut')
}, 3000);


console.log('Hello Again');

// console.log('hello world') firstly it will go to callStack, callStack will check if it is a synchronous or aynchronous because it is synchronous it will get excuted instantly after that
// setTimeOut will go to callStack it is asynchronous so it will go to the webApis and will stay till the time its timer has been set 
// on that time the third console statement will get added to the callStack after staying for the time in the webApis now it will go to callback Queue now the 
// callStack function will go to callStack because it is synchronous it will get excuted instantly








