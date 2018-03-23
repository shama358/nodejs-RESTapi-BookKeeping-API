//this file will be run when the user wants to run the app
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');


//using ES6 destructuring
const {mongoose} = require('./db/db.js');
const {Todo} = require('./models/todo.js');
const {User} = require('./models/user.js');


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

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    res.status(404).send();
  }
  Todo.findById(id).then((todos) => {
    if (!todos) {
      res.status(404).send();
    } else {
      res.send({todos});
    }
  }, (e) => {
    res.status(400).send();
  });
});

app.listen(3000, () => console.log('started on port 3000'));

module.exports = {app};
