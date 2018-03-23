var  mongoose = require('mongoose');

//one time call. telling we want to use promise instead of the call back(which is the defalut).
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.export = {mongoose};
