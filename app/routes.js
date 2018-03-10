// app/routes.js

// grab the nerd model we just created


var employee_model = require('./models/employee');
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


    app.post('/api/employee', function(req, res) {
        var myData = new employee_model(req.body);
        myData.save();
        res.send("item saved to database");
    });





    app.get('/api/employee', function(req, res){
        Employee.find(function(err, employee){
            if(err)
                res.send(err);
            res.json(employee);
        });
    });

    app.get('/api/employee/:id', function(req, res){
        Employee.findOne({_id:req.params.id}, function(err, employe){
            if(err)
                res.send(err);
            res.json(employee);
        });
    });
    app.post('/api/employee', function(req, res){
        Employee.create( req.body, function(err, employee){
            if(err)
                res.send(err);
            res.json(employee);
        });
    });

    app.delete('/api/employee/:id', function(req, res){
        Employee.findOneAndRemove({_id:req.params.id}, function(err, employee){
            if(err)
                res.send(err);
            res.json(employee);
        });
    });
    app.put('/api/employee/:id', function(req, res){
        var query = {
            name:req.body.FirstName,
            LastName:req.body.LastName,
            Email:req.body.Email

        };
        Employee.findOneAndUpdate({_id:req.params.id}, query, function(err, employee){
            if(err)
                res.send(err);
            res.json(employee);
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
