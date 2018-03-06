// app/routes.js

// grab the nerd model we just created


var employee_model = require('./models/employee');
var student_model = require('./models/student');
var teacher_model = require('./models/teacher');
module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes
    app.get('/api/employee', function(req, res) {

        employee_model.find(function(err, data) {
            if (err)
                res.send(err);
            console.log(data);
            res.json(data); // return all nerds in JSON format
        });

    });

    app.get('/api/student', function(req, res) {

        student_model.find(function(err, data) {
            if (err)
                res.send(err);
            console.log(data);
            res.json(data); // return all nerds in JSON format
        });

    });

    app.get('/api/teacher', function(req, res) {

        teacher_model.find(function(err, data) {
            if (err)
                res.send(err);
            console.log(data);
            res.json(data); // return all nerds in JSON format
        });

    });




    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};