// app/routes.js

// grab the nerd model we just created


var employee_model = require('./models/employee');
module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes
    app.get('/api/employee', function(req, res) {
        console.log(employee_model);

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
    
     app.delete('/api/employee/:id', function(req, res) {

        employee_model.remove({ _id : ObjectId(req.params.id)}, function(err, data) {
            if (err)
                res.send(err);
            res.send('deleted');
        });

    });

    app.put('/api/employee', function(req, res) {

        employee_model.update({ _id: ObjectId(req.body._id)}, { $set: req.body}, function(err, data) {
            if (err)
                res.send(err);
            res.send('updated');
        });

    });
    

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};

//exports.get = function () {
//    return state.db;
//};