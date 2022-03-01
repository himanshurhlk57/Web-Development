/*
Event though you have written any js code you will have
Global Execution Context has been created.
Any code you will write will get excuted inside the 
global Execution context and its remain throughout
the execution of our program.
Without excuting any code we have access to window : global Object

document.getElementById is also the property of window Object.

*** 
Without writing any piece of code we have access to the
global excution context all your code gets excuted inside the
global excution context and the global excution context
by default gives access to two things 
i- window : global object
ii- this: window
ANd inside of your global excution context the value 
of this is same as the value of window
this === window

*/

var name = "rohit";

function displayName(){
    var name = "rohit";
    console.log("Hi rohit");
    function displayAge(){
        console.log("Age is 23");
    }
    displayName();
}
displayName();

/* First in the creation phase we have access to window and
this and anyother varibale or function we declared globally 
in the first creation phase in the GEC
we have access to name : undefined and displayName();

Now the phase will change to execution in the execution
phase the function will get invoked and everything will get assigned
name will get name: "rohit" 
And now in the execution phase of our GEC an execution
context of displayName() has been created and again in that
if there any function will get invoked a new execution context
will be created 

whenever a function is done executing the execution function
for that function is completely removed
*/