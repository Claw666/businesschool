var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var Todo = require('../models/Todo');

/* GET home page. */
router.get('/', function(req, res, next) {
   res.sendFile(path.join(__dirname, '../views', 'sp2vr', 'sp2vr.html'));
});
/* GET all staff members data. */
router.get('/sort-group-all', function(req,res){
    Todo.find(function(err, todos){
        res.json(todos);
    });
});
/* GET staff members' data alphabetically. */
router.get('/sort-group-A', function(req,res){
    Todo.find({"compname": {$regex: /^a/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-B', function(req,res){
    Todo.find({"compname": {$regex: /^b/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-C', function(req,res){
    Todo.find({"compname": {$regex: /^c/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-D', function(req,res){
    Todo.find({"compname": {$regex: /^d/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-E', function(req,res){
    Todo.find({"compname": {$regex: /^e/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-F', function(req,res){
    Todo.find({"compname": {$regex: /^f/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-G', function(req,res){
    Todo.find({"compname": {$regex: /^g/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-H', function(req,res){
    Todo.find({"compname": {$regex: /^h/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-I', function(req,res){
    Todo.find({"compname": {$regex: /^i/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-J', function(req,res){
    Todo.find({"compname": {$regex: /^j/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-K', function(req,res){
    Todo.find({"compname": {$regex: /^K/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-L', function(req,res){
    Todo.find({"compname": {$regex: /^l/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-M', function(req,res){
    Todo.find({"compname": {$regex: /^m/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-N', function(req,res){
    Todo.find({"compname": {$regex: /^n/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-O', function(req,res){
    Todo.find({"compname": {$regex: /^O/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-P', function(req,res){
    Todo.find({"compname": {$regex: /^p/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-Q', function(req,res){
    Todo.find({"compname": {$regex: /^q/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-R', function(req,res){
    Todo.find({"compname": {$regex: /^r/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-S', function(req,res){
    Todo.find({"compname": {$regex: /^s/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-T', function(req,res){
    Todo.find({"compname": {$regex: /^t/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-U', function(req,res){
    Todo.find({"compname": {$regex: /^u/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-V', function(req,res){
    Todo.find({"compname": {$regex: /^v/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-W', function(req,res){
    Todo.find({"compname": {$regex: /^w/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-X', function(req,res){
    Todo.find({"compname": {$regex: /^x/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-Y', function(req,res){
    Todo.find({"compname": {$regex: /^Y/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-Z', function(req,res){
    Todo.find({"compname": {$regex: /^z/, $options: 'i'}}).sort({compname: 1}).exec(function(err, todos){
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
    Todo.find({'staffdep': {'$regex': 'Accounting'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking', function(req,res){
    Todo.find({'staffdep': {'$regex': 'Banking', '$options': 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision', function(req,res){
    Todo.find({'staffdep': {'$regex': 'Decision', '$options': 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing', function(req,res){
    Todo.find({'staffdep': {'$regex': 'Marketing', '$options': 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr', function(req,res){
    Todo.find({'staffdep': {'$regex': 'HR', '$options': 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr', function(req,res){
    Todo.find({'staffdep': {'$regex': 'Entrepreneurship', '$options': 'i'}}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

/* GET Individual Dep staff members' data. - Accounting */

router.get('/depaccounting-sort-group-a', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^a/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-b', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^b/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-c', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^c/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-d', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^d/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-e', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^e/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-f', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^f/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-g', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^g/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-h', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^h/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-i', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^i/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-j', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^j/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-k', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^k/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-l', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^l/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-m', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^m/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-n', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^n/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-o', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^o/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-p', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^p/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-q', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^q/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-r', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^r/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-s', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^s/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-t', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^t/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-u', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^u/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-v', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^v/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-w', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^w/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-x', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^x/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-y', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^y/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depaccounting-sort-group-z', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Accounting'}}, {'compname': {'$regex' : /^z/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

/* GET Individual Dep staff members' data. - Banking */

router.get('/depbanking-sort-group-a', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^a/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-b', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^b/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-c', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^c/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-d', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^d/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-e', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^e/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-f', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^f/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-g', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^g/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-h', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^h/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-i', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^i/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-j', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^j/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-k', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^k/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-l', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^l/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-m', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^m/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-n', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^n/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-o', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^o/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-p', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^p/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-q', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^q/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-r', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^r/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-s', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^s/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-t', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^t/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-u', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^u/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-v', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^v/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-w', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^w/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-x', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^x/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-y', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^y/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depbanking-sort-group-z', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Banking'}}, {'compname': {'$regex' : /^z/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

/* GET Individual Dep staff members' data. - Decision */

router.get('/depdecision-sort-group-a', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^a/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-b', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^b/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-c', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^c/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-d', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^d/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-e', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^e/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-f', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^f/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-g', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^g/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-h', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^h/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-i', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^i/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-j', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^j/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-k', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^k/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-l', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^l/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-m', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^m/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-n', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^n/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-o', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^o/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-p', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^p/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-q', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^q/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-r', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^r/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-s', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^s/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-t', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^t/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-u', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^u/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-v', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^v/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-w', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^w/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-x', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^x/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-y', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^y/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depdecision-sort-group-z', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Decision'}}, {'compname': {'$regex' : /^z/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

/* GET Individual Dep staff members' data. - Marketing */

router.get('/depmarketing-sort-group-a', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^a/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-b', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^b/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-c', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^c/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-d', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^d/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-e', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^e/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-f', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^f/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-g', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^g/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-h', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^h/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-i', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^i/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-j', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^j/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-k', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^k/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-l', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^l/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-m', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^m/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-n', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^n/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-o', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^o/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-p', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^p/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-q', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^q/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-r', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^r/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-s', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^s/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-t', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^t/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-u', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^u/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-v', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^v/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-w', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^w/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-x', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^x/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-y', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^y/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depmarketing-sort-group-z', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Marketing'}}, {'compname': {'$regex' : /^z/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

/* GET Individual Dep staff members' data. - HR */

router.get('/dephr-sort-group-a', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^a/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-b', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^b/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-c', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^c/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-d', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^d/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-e', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^e/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-f', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^f/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-g', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^g/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-h', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^h/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-i', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^i/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-j', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^j/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-k', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^k/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-l', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^l/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-m', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^m/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-n', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^n/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-o', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^o/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-p', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^p/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-q', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^q/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-r', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^r/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-s', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^s/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-t', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^t/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-u', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^u/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-v', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^v/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-w', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^w/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-x', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^x/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-y', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^y/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/dephr-sort-group-z', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'HR'}}, {'compname': {'$regex' : /^z/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

/* GET Individual Dep staff members' data. - Entrepreneurship */

router.get('/depentr-sort-group-a', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^a/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-b', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^b/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-c', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^c/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-d', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^d/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-e', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^e/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-f', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^f/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-g', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^g/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-h', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^h/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-i', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^i/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-j', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^j/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-k', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^k/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-l', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^l/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-m', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^m/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-n', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^n/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-o', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^o/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-p', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^p/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-q', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^q/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-r', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^r/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-s', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^s/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-t', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^t/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-u', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^u/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-v', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^v/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-w', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^w/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-x', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^x/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-y', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^y/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/depentr-sort-group-z', function(req,res){
    Todo.find({$and: [{'staffdep': {'$regex': 'Entrepreneurship'}}, {'compname': {'$regex' : /^z/, '$options': 'i'}}]}).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});


module.exports = router;
