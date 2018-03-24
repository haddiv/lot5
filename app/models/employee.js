// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('employees', {
    firstname : {type : String, default: 'test'},
    lastname : {type : String, default: 'test'},
    email : {type : String, default: 'test'},
    salary : {type : String, default: 'test'},
    phone : {type : String, default: 'test'}
});
