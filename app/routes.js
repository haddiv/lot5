var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('file-system');
router.use(bodyParser.urlencoded({ extended: true }));

var User = require('./models/User');

var arr = [];

var promise = new Promise(function(resolve, reject) {

    function getFiles(dirName, array) {

        fs.readdir(__dirname + '/../'+dirName, function (err, files) {

            for(var i = 0; i < files.length; i++){

                if(files[i].substring(files[i].lastIndexOf('.'),files[i].length) === '.txt'){

                    array.push({"title": files[i], "nodes": []});

                }else {

                    array.push({"title": files[i], "nodes": []});
                    getFiles(dirName + '/' + files[i], array[i]["nodes"]);

                }

            }

        });

    }

    getFiles('file', arr);
    resolve(arr);

});

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
