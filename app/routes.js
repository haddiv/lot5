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
    app.put('/api/employee/{{id}}', function(req, res) {
        db.get().collection('nameCollection').updateOne(
            {_id: ObjectID(req.params.id)},
            {name: req.body.name},
            function (err, result) {
                if (err) {
                    console.log(err);
                    return res.sendStatus(200);
                }
            });
    });

    app.delete('/api/employee/{{id}}', function(req, res) {
        db.get().collection("employee").deleteOne(
            {_id: ObjectID(req.params.id)},
            function (err, result) {
                if(err){
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.sendStatus(200);
            }
        )
    });
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};

exports.get = function () {
    return state.db;
};