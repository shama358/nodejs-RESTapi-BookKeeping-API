var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the Mongo db server');
  }
  console.log("Success connection to MongoDb server");
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed : false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert into Todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
})
