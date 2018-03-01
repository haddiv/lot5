var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var userSchema = new Schema({
    f_name: {type: String},
    l_name: {type: String},
    email: {type: String, unique: true},
    phone: {type: Number},
    salary: {type: Number},
    date: {type: Date, default: Date.now}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('users', userSchema);