//for mongodb version 2

//var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the Mongo db server');
  }
  console.log("Success connection to MongoDb server");

  //deleteMany
  // db.collection('Todos').deleteMany({text : 'walk the dog'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text : 'walk the dog'}).then((result) => {
  //   console.log(result);
  // });

  //FindOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('User').findOneAndDelete({_id : new ObjectID("5ab300a875fc95340069c546")}).then((result) => {
    console.log(result);
  });


//ObjectId("5ab300a875fc95340069c546")
  // db.close();
});
