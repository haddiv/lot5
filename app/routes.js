var employee_model = require('./models/employee');
var ObjectId = require('mongodb').ObjectID;

module.exports = function(app) {

    app.get('/api/employee', function(req, res) {

        employee_model.find(function(err, data) {
                       if (err)
                               res.send(err);
                  res.json(data);
                });

    });

    app.post('/api/employee', function(req, res) {

        var myData = new employee_model(req.body);
        myData.save(myData);

        res.json(myData);

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
        res.sendfile('./public/index.html');
    });

};