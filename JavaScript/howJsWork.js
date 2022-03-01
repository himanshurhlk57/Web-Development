/* Javascript engine is basically going to take your javascript
code and convert it into machine readible code.

Inside javascript engine in case of chrome(V8) there are
two main things

i-> Memory Heap
Anyhting that has to be stored and has some value will be
actually stored inside your memory heap

ii > Call Stack
Any line of code will be excuted in the call stack
Lets say i want to excute console.log(2) first it will 
be pushed in the call stack then excuted once it is excuted
then it is pop from the stack

**JavaScript is a single threaded language

Inside your call stack you can only excute one task
at a time.
You can't have multiple statement excuting at the same time
Therefore your program is running at one thread.
JavaScript has only one call stack and that's why it is a
single threaded language 
*/

console.log("1");
setTimeout(() => {
 console.log("2");
}, 2000);
console.log("3");  // 1 3 2

// Call Stack -> Web API -> Callback queue -> Event Loop -> Call Stack
// If there's any asynchoronus code or settimeOut first it
// will come to call stack call stack will identify as 
// asynchronous it is not part of javascript but web api
// so it will go to web api and wait till the set time out 
// gets ended and the console statement will go to the callback queue
// Now comes the event loop it constantly keep checking whether
// the call stack is empty if it is empty and something needs 
// to be excuted it will send it to the call stack from call back queue
// so finally the statement will get excuted.