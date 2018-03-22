var mongoose = require('mongoose');


//create the model adn specify attribute
var Todo = mongoose.model('Todo', {
  text : {
    type : String,
    required : true,
    minlenght : 1,
    trim : true
  },
  completed : {
    type : Boolean,
    default : false
  },
  completedAt : {
    type : Number,
    default : null
  }
});

module.exports = {Todo};

// var newDoc = new Todo ({
//   text : 'cook',
// });

//save the insert in mongoDB
// newDoc.save().then((doc) => {
//   console.log('saved : ', doc);
// }, (err) => {
//   console.log('unable to save ', err);
// });
