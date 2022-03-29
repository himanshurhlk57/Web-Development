Module1 -> 
  const { people, ages } = require("./Module2");

console.log(people);
console.log(ages);

console.log(__dirname);
console.log(__filename);

const os = require("os");
console.log(os.platform());

Module2 ->
  
  const people = ["rohit", "rahul"];
const ages = [20, 30];

module.exports = { people, ages };

  
