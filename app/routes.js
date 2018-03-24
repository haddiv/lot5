var employee_model = require('./models/employee');
var ObjectId = require('mongodb').ObjectID;
var fs = require('file-system');

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

    getFiles('test', arr);
    resolve(arr);

});

module.exports = function(app) {

    app.get('/api/employee', function(req, res) {

        employee_model.find(function(err, data) {

            if (err)
                res.send(err);

            res.json(data);

        });

    });

    app.get('/api/tree', function(req, res) {

        promise.then(function(result){

            res.json(result);

        },function(error ){

            console.log(error.message);

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