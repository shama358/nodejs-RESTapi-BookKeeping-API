//for mongodb version 2

//var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the Mongo db server');
  }
  console.log("Success connection to MongoDb server");

  //find one and update
  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID("5ab30b3375fc95340069c910")
  // }, {
  //   $set : {
  //     completed : true
  //   }
  // }, {
  //   returnOriginal : false
  // }). then((result) => {
  //   console.log(result);
  // });

  db.collection('User').findOneAndUpdate({
    _id : new ObjectID("5ab3006c75fc95340069c52a")
  }, {
    $set : {
      Name : 'Shama Hegde'
    },
    $inc : {
      Age : 1
    }
  }, {
    returnOriginal : false
  }). then((result) => {
    console.log(result);
  });

//ObjectId("5ab300a875fc95340069c546")
  // db.close();
});
