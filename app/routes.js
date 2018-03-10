// app/routes.js

// grab the nerd model we just created
/*
var Category = require('./models/category');
var Answers = require('./models/answer');*/
var person_model = require('./models/person');
module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/person', function(req, res) {

        person_model.find(function(err, data) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                   res.send(err);
            /*console.log(data);*/
            res.json(data); // return all nerds in JSON format
        });

    });

    app.post('/api/employee', function(req, res) {
        var myData = new person_model(req.body);
        myData.save();
        res.send(myData);
    });


    app.delete('/api/person/:lists_id', function(req, res) {
       /* person_model.find({_id : req.params.lists_id},function(err, data){*/
            person_model.remove({
                _id : req.params.lists_id
            }, function(err, todo){
                if(err){
                    res.send(err);
                }
                console.log( typeof (req.params.lists_id));
                res.send(todo);

                });
          /*  })*/
       /* })*/
        /*res.send(myData);*/
    });



/*    app.get('/api/category/{{id}}', function(req, res) {
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

    });*/


    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};
