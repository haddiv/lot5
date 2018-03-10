// app/routes.js

// grab the nerd model we just created

/*var Category = require('./models/category');
var Answers = require('./models/answer');*/
var teacher_model = require('./models/teacher');
module.exports = function(app) {


    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route

    app.get('/api/teacher', function(req, res) {

        teacher_model.find(function(err, data) {
            if (err)
                res.send(err);
            console.log(data);
            res.json(data); // return all nerds in JSON format
        });
    });


    app.post('/api/teacher', function(req, res) {
        var myData = new teacher_model(req.body);
        myData.save();
        res.send("item saved to database");
    });


    /*app.get('/api/teacher/create', function(req, res) {

        teacher_model.find(function(err, data) {
            if (err)
                res.send(err);
            console.log(data);
            res.json(data); // return all nerds in JSON format
        });
    });*/





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
