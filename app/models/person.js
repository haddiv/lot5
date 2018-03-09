// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('lists', {
    _id:{type : String, default: 'test'},
    firstname : {type : String, default: 'test'},
    lastname : {type : String, default: 'test'},
    email : {type : String, default: 'test'},
    phone : {type : Number, default: 1234},
    salary : {type : Number, default: 1234}

});
