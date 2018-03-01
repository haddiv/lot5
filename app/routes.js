var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var User = require('./models/User');

module.exports = function(app) {


    app.use( function( req, res, next ) {

        next();
    });

    app.get('/users', function (req, res) {
        // use mongoose to get all nerds in the database
        User.find(function (err, data) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(data); // return all nerds in JSON format
        });
    });

    app.post('/users', function (req, res) {
        var user = new User(req.body);      // create a new instance of the Nerd model
              // set the nerds name (comes from the request)
        console.log(req.body);

        // save the nerd and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Employee created!' });

        });
    });



};
