//for mongodb version 2

//var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the Mongo db server');
  }
  console.log("Success connection to MongoDb server");

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed : false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert into Todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('User').insertOne({
  //   Name : 'Shama Hegde',
  //   Age : 25,
  //   location : 'Sunnyvale, USA'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert into Todo', err);
  //   }
  //   console.log(result.ops);
  // });

  db.close();
})
