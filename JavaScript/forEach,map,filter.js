const nums = [1,2,3,4];

// for loop method
for(let i= 0; i<nums.length; i++){
	console.log(nums[i]);
}

// forEach return number one by one based on the logic

nums.forEach((num) => {
	console.log(num);
});

//Print lastName one by one using forEach
const person = [
	{firstName: 'rohit', lastName: 'kumar'},
	{firstName: 'rahul', lastName: 'kumar'},
	{firstName: 'anand', lastName: 'kumar'}
];

person.forEach((person) => {
	console.log(person.lastName);
})

// map return a new array based on our logic

const mapArray = nums.map((num) => {
	return num * 10;
});

console.log(nums);
console.log(mapArray);

// array of object in the object we have firstName and lastName we want to group firstName in the form of array for that we can use map

const person1 = [
	{firstName: 'rohit', lastName: 'kumar'},
	{firstName: 'rahul', lastName: 'kumar'},
	{firstName: 'anand', lastName: 'kumar'}
];


const firstName = person1.map((person1) => {
	return person1.firstName;
});
console.log(firstName);















// All three methods are present in the array in javascript

// i -> forEach

// forEach will give the value of array one by one
// we can do whatever we want to to that with that value
// forEach is a function of nums in which we passed a arrow function 

// forEach will give one value from nums array and in that
// function paramter we need to pass that value to an unnamed
// or arrow function in this arrow function we can perform any operation

let nums = [1,2,3,4];

nums.forEach((n) => {

console.log(n*n);

});


// ii -> Filter

// filter is a method present in the array that gives
// the filter value according to your logic
// lets say from the given array you only want even Element

let nums1 = [2,3,4,5,6];

console.log(nums1.filter((n) => n%2 === 0 ));

// once you got the filter value on the same value
// now just print the even value one by one using forEach method

let nums2 = [2,3,4,5,6];

nums2.filter((n) => n%2 === 0)

.forEach((n) => {
    console.log(n);
});


// iii-> map
// take a value and then change it
// lets say after filtering the value i want to double the
// filtered value and then print the value one by one using 
// forEach method of Array.

let nums3 = [2,3,4,5,6];

nums3.filter((n) => n%2 === 0)

.map((n) => n*2)

.forEach((n) => {
    console.log(n);
});

// iv -> reduce

// want to sum the array Element

let nums4 = [2,3,4,5,6];

let result = nums4.filter((n) => n%2 === 0)

.map((n) => n*2)

.reduce((a,b) => a + b);

console.log(result);