// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called

module.exports = mongoose.model('students', {
    FirstName : {type : String, default: 'test'},
    LastName : {type : String, default: 'test'},
    Email : {type : String, default: 'test'},
    Phone : {type : String, default: 'test'},

});



