// 1 ->

const course = {
    name: 'Introduction to JavaScript',
    website: 'workat.tech',
    isPaid: true,
    const: {
        amount: 999,
        currency: {
            short: 'INR',
            full: 'Indian National Rupee'
        }
    },
    authors: [
        {
            firstName: 'Sagar',
            lastName: 'Jain'
        },
        {
            firstName: 'Gaurav',
            lastName: 'Chandak'
        }
    ],
    enroll: function enroll(){
        console.log('enrolling....');
    }
};

// console.log(course);
// console.log(course.authors[1].firstName);
// course.enroll()
// console.log(course.enroll());

const key = 'isPaid';
console.log(course[key]);

// The above redundant code can be written as below thats
// the best practise

const courseName = 'Introduction to JavaScript';
const website = 'workat.tech';

const course = {
    name: courseName,
    website,
    isPaid: true,
    cost: {
        amount: 999,
        currency: 'INR'
    },
    authors: [ {
        firstName: 'Gaurav',
        lastName: 'Chandak'
    }, {
        firstName: 'Sagar',
        lastName: 'Jain'
    }],
    enroll() {
        console.log('enrolled');
    }
};

/*
A object named course inside that there is const object,
and a authors array inside array there are two objects
in the zeroth index of authors first object contains
firstName key with value sagar and in second object firstName
key has value gaurav.
Inside course object there is another object named enroll
enroll object contains a function

if we will do console.log(course.enroll); it will print the
function name i.e enroll
To invoke the function so that it print enrolling we have to
do course.enroll();

if we do this
console.log(course.enroll())
then first it will print enrolling.. because of course.enroll()
because enroll function has no return type the console.log
will contain undefined so it will print undefined then.


*/

// 2->

const elon = {
	firstName: 'Elon',
	lastName: 'Musk',
		getFullName(){
		console.log(`${this.firstName} ${this.lastName}`);
	}
};
elon.getFullName();

/*
If we want to use any of the properties of the elon
object in one of the elon object method we can use their 
value by this Keyboard

*/

// 3 ->

// Let's look at two functions which allow us to iterate Objects:

// i - Object.keys(obj);
// Object.keys(obj) returns an array with all the keys of obj.

// ii- Object.values(obj);
// Object.values(obj) returns an array with the values of all the keys of obj.

// iii -If we want to print all the key-value pairs in the form of key: value, we can do the following:

// const keys = Object.keys(course);
// for (key of keys) {
//     console.log(key + ": " + course[key]);
// }

// Overall 

const course = {
    name: 'Introduction to JavaScript',
    website: 'workat.tech',
    isPaid: true,
    cost: 999
};
const keys = Object.keys(course);
console.log(keys);

const values = Object.values(course);
console.log(values);

for (key of keys) {
    console.log(key + ": " + course[key]);
}

// Output

// [ 'name', 'website', 'isPaid', 'cost' ]
// [ 'Introduction to JavaScript', 'workat.tech', true, 999 ]
// name: Introduction to JavaScript
// website: workat.tech
// isPaid: true
// cost: 999