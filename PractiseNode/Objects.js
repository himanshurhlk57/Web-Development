
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
