var mongoose = require('mongoose')


var User = mongoose.model('User', {
  email : {
    type : String,
    required : true,
    minlenght : 1,
    trim : true
  }
});

module.exports = {User};


// var newDoc = new User ({
//   email : 'shama358@gmail.com',
// });
//
// //save the insert in mongoDB
// newDoc.save().then((doc) => {
//   console.log('saved : ', doc);
// }, (err) => {
//   console.log('unable to save ', err);
// });
