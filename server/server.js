//this file will be run when the user wants to run the app
var express = require('express');
var bodyParser = require('body-parser');


//using ES6 destructuring
var {mongoose} = require('./db/db.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');


var app = express();

app.use(bodyParser.json());

//route
app.post('/todos', (req, res) => {
  var newDoc = new Todo ({
    text : req.body.text,
  });

  //save the insert in mongoDB
  newDoc.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.listen(3000, () => console.log('started on port 3000'));
