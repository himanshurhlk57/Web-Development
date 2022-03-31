Create or Switch to an existing database
use workattech;

Create a collection
db.createCollection("users");

Drop a collection
db.users.drop();

Insert a document
db.users.insertOne({
	"first_name": "Gaurav",
	"last_name": "Chandak",
	"location": {
		"city": "Bengaluru",
		"state": "KA",
		"country": "India"
	},
	"email": "gaurav@workat.tech"
});
The above command returns an acknowledgment and the id of the document (insertedId).

Insert multiple documents
db.<collection_name>.insertMany([<document1>, <document2>, ….]);

Find all the documents in a collection
db.users.find();
db.users.find().pretty();

Find documents based on query
db.users.find({"first_name": "Gaurav"}).pretty();

Find a single document based on query
db.users.findOne({"first_name": "Gaurav"});

Delete a single document based on query
db.users.deleteOne({"first_name": "Gaurav"});

Delete documents based on query
db.users.deleteMany({"first_name": "Gaurav"});

Update a single document
db.users.updateOne(
	{"first_name": "Gaurav"},
	{"$set": {email: "g@workat.tech"}}
);
