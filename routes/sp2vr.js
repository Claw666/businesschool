var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var Todo = require('../models/Todo');
var Home = require('../models/home');

/* GET home page. */
router.get('/', function(req, res, next) {
   res.sendFile(path.join(__dirname, '../views', 'sp2vr', 'sp2vr.html'));
});
/* GET all staff members data. */
router.get('/sort-group-all', function(req,res){
    Todo.find().sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

/* GET all home page data. */
router.get('/home-page', function(req,res){
    Todo.find().exec(function(err, home){
        res.json(home);
    });
});
/* GET staff members' data alphabetically. */
router.get('/sort-group-A', function(req,res){
    Todo.find({"stafflastname": {$regex: /^a/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-B', function(req,res){
    Todo.find({"stafflastname": {$regex: /^b/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-C', function(req,res){
    Todo.find({"stafflastname": {$regex: /^c/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-D', function(req,res){
    Todo.find({"stafflastname": {$regex: /^d/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-E', function(req,res){
    Todo.find({"stafflastname": {$regex: /^e/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-F', function(req,res){
    Todo.find({"stafflastname": {$regex: /^f/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-G', function(req,res){
    Todo.find({"stafflastname": {$regex: /^g/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-H', function(req,res){
    Todo.find({"stafflastname": {$regex: /^h/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-I', function(req,res){
    Todo.find({"stafflastname": {$regex: /^i/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-J', function(req,res){
    Todo.find({"stafflastname": {$regex: /^j/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-K', function(req,res){
    Todo.find({"stafflastname": {$regex: /^K/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-L', function(req,res){
    Todo.find({"stafflastname": {$regex: /^l/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-M', function(req,res){
    Todo.find({"stafflastname": {$regex: /^m/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-N', function(req,res){
    Todo.find({"stafflastname": {$regex: /^n/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-O', function(req,res){
    Todo.find({"stafflastname": {$regex: /^O/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-P', function(req,res){
    Todo.find({"stafflastname": {$regex: /^p/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-Q', function(req,res){
    Todo.find({"stafflastname": {$regex: /^q/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-R', function(req,res){
    Todo.find({"stafflastname": {$regex: /^r/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-S', function(req,res){
    Todo.find({"stafflastname": {$regex: /^s/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-T', function(req,res){
    Todo.find({"stafflastname": {$regex: /^t/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-U', function(req,res){
    Todo.find({"stafflastname": {$regex: /^u/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-V', function(req,res){
    Todo.find({"stafflastname": {$regex: /^v/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-W', function(req,res){
    Todo.find({"stafflastname": {$regex: /^w/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-X', function(req,res){
    Todo.find({"stafflastname": {$regex: /^x/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-Y', function(req,res){
    Todo.find({"stafflastname": {$regex: /^Y/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-Z', function(req,res){
    Todo.find({"stafflastname": {$regex: /^z/, $options: 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});
/* END of GET staff members' data alphabetically. */

router.get('/leadershipteam', function(req,res){
    Todo.find({staffledpos: {$in: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]}}).sort({staffledpos: 1}).collation({locale: "en_US", numericOrdering: true}).exec(function(err, todos){
        res.json(todos);
    });
});

/* GET Individual Dep staff members' data. */

router.get('/depaccounting', function(req,res){
    Todo.find({'staffdep': {'$regex': 'Accounting'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking', function(req,res){
    Todo.find({'staffdep': {'$regex': 'Banking', '$options': 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision', function(req,res){
    Todo.find({'staffdep': {'$regex': 'Decision', '$options': 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing', function(req,res){
    Todo.find({'staffdep': {'$regex': 'Marketing', '$options': 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr', function(req,res){
    Todo.find({'staffdep': {'$regex': 'HR', '$options': 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr', function(req,res){
    Todo.find({'staffdep': {'$regex': 'Entrepreneurship', '$options': 'i'}}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

/* GET Individual Dep staff members' data. - Accounting */

router.get('/depaccounting-sort-group-a', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^a/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-b', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^b/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-c', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^c/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-d', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^d/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-e', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^e/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-f', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^f/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-g', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^g/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-h', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^h/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-i', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^i/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-j', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^j/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-k', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^k/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-l', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^l/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-m', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^m/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-n', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^n/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-o', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^o/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-p', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^p/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-q', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^q/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-r', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^r/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-s', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^s/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-t', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^t/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-u', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^u/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-v', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^v/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-w', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^w/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-x', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^x/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-y', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^y/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-z', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'stafflastname': {'$regex' : /^z/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

/* GET Individual Dep staff members' data. - Banking */

router.get('/depbanking-sort-group-a', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^a/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-b', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^b/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-c', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^c/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-d', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^d/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-e', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^e/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-f', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^f/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-g', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^g/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-h', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^h/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-i', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^i/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-j', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^j/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-k', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^k/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-l', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^l/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-m', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^m/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-n', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^n/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-o', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^o/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-p', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^p/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-q', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^q/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-r', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^r/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-s', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^s/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-t', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^t/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-u', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^u/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-v', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^v/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-w', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^w/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-x', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^x/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-y', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^y/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-z', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'stafflastname': {'$regex' : /^z/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

/* GET Individual Dep staff members' data. - Decision */

router.get('/depdecision-sort-group-a', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^a/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-b', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^b/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-c', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^c/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-d', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^d/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-e', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^e/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-f', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^f/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-g', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^g/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-h', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^h/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-i', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^i/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-j', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^j/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-k', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^k/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-l', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^l/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-m', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^m/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-n', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^n/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-o', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^o/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-p', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^p/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-q', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^q/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-r', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^r/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-s', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^s/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-t', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^t/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-u', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^u/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-v', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^v/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-w', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^w/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-x', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^x/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-y', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^y/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-z', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'stafflastname': {'$regex' : /^z/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

/* GET Individual Dep staff members' data. - Marketing */

router.get('/depmarketing-sort-group-a', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^a/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-b', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^b/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-c', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^c/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-d', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^d/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-e', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^e/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-f', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^f/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-g', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^g/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-h', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^h/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-i', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^i/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-j', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^j/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-k', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^k/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-l', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^l/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-m', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^m/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-n', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^n/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-o', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^o/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-p', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^p/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-q', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^q/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-r', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^r/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-s', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^s/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-t', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^t/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-u', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^u/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-v', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^v/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-w', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^w/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-x', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^x/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-y', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^y/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-z', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'stafflastname': {'$regex' : /^z/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

/* GET Individual Dep staff members' data. - HR */

router.get('/dephr-sort-group-a', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^a/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-b', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^b/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-c', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^c/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-d', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^d/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-e', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^e/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-f', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^f/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-g', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^g/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-h', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^h/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-i', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^i/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-j', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^j/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-k', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^k/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-l', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^l/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-m', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^m/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-n', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^n/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-o', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^o/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-p', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^p/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-q', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^q/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-r', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^r/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-s', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^s/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-t', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^t/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-u', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^u/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-v', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^v/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-w', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^w/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-x', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^x/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-y', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^y/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-z', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'stafflastname': {'$regex' : /^z/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

/* GET Individual Dep staff members' data. - Entrepreneurship */

router.get('/depentr-sort-group-a', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^a/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-b', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^b/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-c', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^c/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-d', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^d/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-e', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^e/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-f', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^f/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-g', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^g/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-h', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^h/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-i', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^i/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-j', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^j/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-k', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^k/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-l', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^l/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-m', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^m/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-n', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^n/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-o', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^o/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-p', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^p/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-q', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^q/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-r', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^r/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-s', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^s/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-t', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^t/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-u', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^u/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-v', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^v/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-w', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^w/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-x', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^x/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-y', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^y/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-z', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'stafflastname': {'$regex' : /^z/, '$options': 'i'}}]}).sort({stafflastname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});


module.exports = router;
