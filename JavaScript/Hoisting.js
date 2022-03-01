// 1 ->
// var age = 23;
// console.log(age); 
// 23

// 2 ->
// console.log(age); 
// reference error age is not defined

// 3 ->

console.log(age);
var age = 23;

//undefined
/* Even before running javascript code javascript 
engine knows there's a variable name age somewhere
in the file gobally and going to check the entire file
in the creation phase and it is going to take all the
variable which are there globally and it is going 
to assign space for them
SO in the creation phase your age got some space in
memory and javascript simply given undefined to it
the real value will be asssign in execution phase

In the creation phase only memory was allocated in the
execution phase the value is also put in the memory


***Hoisting***
This mechanism of giving memory to variable in the
creation phase is nothing but hoisting
*/

console.log(age);
var age = 19;
//Output

console.log(name);
let name = 'rohit';
//refrenceError

Whether you declare your variable with var let or const it is definitely going to get hoisted i.e memory will assign in the creation phase in case of var it will be assigned undefined 
but in case of let and const it is not going to get initilaize with any value

Use let and const in that case you can expect behaviour of your program

if theres only one line of code

let age = 10;

in the creation phase in the GEC you will not see let keyword only window and this will be there

It is also called temporal deadzone it is the timespan in which your variable is created but it is not initilaize any value and until you initilaize any value you cant aacces it