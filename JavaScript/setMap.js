 // Set will not contain duplicate value 
 // the duplicate element if we try to add to the set will not be added to it.

 const uniqueNumber = new Set();
 uniqueNumber.add(3);
 uniqueNumber.add(5);
 uniqueNumber.add(6);
 uniqueNumber.add(3);
 console.log(uniqueNumber);
 console.log(uniqueNumber.size);
 
 
 
 // Remove duplicate from array using set
 
 const numbers = [4,5,6,4,7,6];
 const uniqueNumber2 = new Set(numbers);
 console.log(uniqueNumber2);
 console.log(Array.from(uniqueNumber2));
 
 
 
 // Map i.e HashTable we can store in the form of key and value pair
 
 const urls = new Map();
 urls.set('development', 'dev.example.com');
 urls.set('production', 'prod.example.com');
 console.log(urls.get('production'));
 
 urls.forEach((value, key) => {
     console.log(key, value);
 })
 