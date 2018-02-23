// app/routes.js

// grab the nerd model we just created

var Category = require('./models/category');
var Answers = require('./models/answer');
module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/category', function(req, res) {

        Answers.find(function(err, data) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(data); // return all nerds in JSON format
        });

    });
    app.get('/api/category/{{id}}', function(req, res) {
//get info for specific {{id}}

    });
    app.post('/api/category', function(req, res) {

    //get infor from request and store in to db

    });
    app.put('/api/category/{{id}}', function(req, res) {

       //upate info from request in post for data with {{id}}

    });
    app.delete('/api/category/{{id}}', function(req, res) {

        //delete info for {{id}}

    });


    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};
