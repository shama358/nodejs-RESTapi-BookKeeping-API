const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//findOneAndRemove
//findByIdAndRemove
// 
// Todo.findOneAndRemove({id :'5ab42b7efd7a15a018ebf9fc'}).then((todo) => {
//   console.log({todo});
// })

Todo.findByIdAndRemove('5ab42b7efd7a15a018ebf9fc').then((todo) => {
  console.log({todo});
})
