// app/routes.js

// grab the nerd model we just created

var Category = require('./models/category');
var Answers = require('./models/answer');
module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route


//     app.get('/api/category', function(req, res) {
//
//         Answers.find(function(err, data) {
//
//             // if there is an error retrieving, send the error.
//             // nothing after res.send(err) will execute
//             if (err)
//                 res.send(err);
//
//             res.json(data); // return all nerds in JSON format
//         });
//
//     });
//     app.get('/api/category/{{id}}', function(req, res) {
//         db.get().collection("someCollection").find().toArray(function (err, docs) {
//             if(err){
//                 console.log(err);
//                 return res.sendStatus(500);
//             }
//             res.send(docs);
//
//         })
// //get info for specific {{id}}
//
//     });
//     app.post('/api/category', function(req, res) {
//         var employee = {
//             name: req.body.name
//         };
//         db.get().collection("nameCollection").insert(nameCollection, function () {
//             if (err) {
//                 console.log(err);
//                 return res.sendStatus(500);
//             }
//             res.send(docs);
//
//         })
//     //get infor from request and store in to db
//
//     });
//     app.put('/api/category/{{id}}', function(req, res) {
//         db.get().collection('nameCollection').updateOn(
//             {_id:ObjectID(req.params.id)},
//             {name:req.body.name},
//             function (err, result) {
//                 if (err){
//                     console.log(err);
//                     return res.sendStatus(200);
//                 }
//             }
//         )
//
//        //upate info from request in post for data with {{id}}
//
//     });
//     app.delete('/api/category/{{id}}', function(req, res) {
//         db.get().collection("nameCollection").deleteOne(
//             {_id: ObjectID(req.params.id)},
//             function (err, result) {
//                 if(err){
//                     console.log(err);
//                     return res.sendStatus(500);
//                 }
//                 res.sendStatus(200);
//             }
//         )
//
//         //delete info for {{id}}
//
//     });
//
//     exports.get = function () {
//         return state.db;
//     };
    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};

