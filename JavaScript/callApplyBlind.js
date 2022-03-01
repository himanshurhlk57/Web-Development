function displayName(){
	console.log('rohit');
}
// displayName();

// when we invoke any function the call method is used to invoke it by default
// Behind the scene always your function is actually getting call by using the call() method
displayName.call(); 

// Same in case of apply() method

displayName.apply();

// Use case of call and apply

// Resusing the 

let participant1 = {
	name: 'Lily',
	battery: 70, 
	chargeBattery: function(){
		this.battery = 100;
	}
}

// Participant2 doesnot have chargeBattery function
// want to charge the battery of participant2 without copying the function from participant1
let participant2 = {
	name: 'John',
	battery: 30
}

// I want to take chargeBattery method of participant1 but i want to use data from participant2

participant1.chargeBattery.call(participant2);

participant1.chargeBattery();
console.log(participant1);
console.log(participant2);

in case of call and apply your function is immediately called
In case of bind it doesnot get called it return another function that we can call later

let chargeBatteryOfParticipant2 = participant1.chargeBattery.bind(participant2);
chargeBatteryOfParticipant2();

summary call apply and bind are used to find the different value of this to a function
the first argument you pass will be the value of this inside any function







