//for mongodb version 2

//var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the Mongo db server');
  }
  console.log("Success connection to MongoDb server");

  // db.collection('Todos').find({completed : false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // } )

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos count ',count);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // } )

  db.collection('User').find({Name :{$ne : 'Shama Hegde'}}).toArray().then((docs) => {
    console.log('User');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err)
  } );


  // db.close();
});
