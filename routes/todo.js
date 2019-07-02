var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var path = require('path');  
var multer = require('multer');

//require fs to delete image on update
const fs= require("fs");

//Set Storage Engine
var storageLogo = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/logos')
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString().replace(/[-T:\.Z]/g, "") + file.originalname);
}
});
var upload = multer({storage: storageLogo});

var Todo = require('../models/Todo');

router.get('/', ensureAuthenticated, function(req, res, next) {
    Todo.find().sort({compname: 1}).exec(function(err, todos){
        if(err) res.render('error', { error: 'Could not fetch items from database :('});
        res.render('todos', { todos: todos, title: 'Companies' });
    });
});

router.get('/create', ensureAuthenticated, function(req, res, next) {
    res.render('addtodo', {title: 'AddCompanies'});
});

router.get('/maps', ensureAuthenticated, function(req, res, next) {
    res.render('maps', {title: 'Maps'});
});

router.get('/:id', ensureAuthenticated, function(req, res, next) {
    Todo.find({ _id: req.params.id }, function(err, todo){
        res.render('todo', { todo: todo[0] })
    });
});

router.post('/create', upload.single('complogo'), function(req, res, next) {
    var todoContent = req.body.compname;
    var todoLastName = req.body.stafflastname;
    var todoLead = req.body.staffledpos;
    var todoTitle = req.body.stafftitle;
    var todoPos = req.body.staffpos;
    var todoText = req.body.stafftext;
    var todoEmail = req.body.compemail;
    var todoPhone = req.body.compphone;
    var todoRoom = req.body.comproom;
    var todoDep = req.body.staffdep;
    if(req.file){
        console.log('Uploading File...');
        console.log(req.file.originalname);
        var complogo = req.file.filename;
    } else {
        console.log('No File Uploaded...');
        console.log(req.file);
        var complogo = 'noimage.jpg';
    }
    // create todo
    Todo.create({ compname: todoContent, stafflastname: todoLastName, staffledpos:todoLead, stafftitle: todoTitle, staffpos: todoPos, staffdep: todoDep, stafftext: todoText, compemail: todoEmail, compphone: todoPhone, comproom: todoRoom, complogo: complogo}, function(err, todo){
        if(err) res.render('error', { error: 'Error creating your todo :('})
        // reload collection
    req.flash('success', 'You added a new company to the wayfinding!');
    res.redirect('/todos');
});
});

router.post('/destroy/:id' ,function(req, res, next) {
    var id = req.params.id;

    Todo.findByIdAndRemove(id, function(err, todo){
        if(err) res.render('error', { error: 'Error deleting todo'});
        req.flash('error', 'You deleted a staff member from the wayfinding!');
        res.redirect('/todos');
    });
});

router.post('/edit/:id',  upload.single('complogo'), function(req, res, next) {
    var newcompname = req.body.compname;
    var newlastname = req.body.stafflastname;
    var newstafftile = req.body.stafftitle;
    var newstaffpos = req.body.staffpos;
    var newstafftext = req.body.stafftext;
    var newcompemail = req.body.compemail;
    var newcompphone = req.body.compphone;
    var newcomproom = req.body.comproom;
    var hidden = req.body.hidden;
    var newstaffdep = req.body.staffdep;
    var hiddenstaffdep = req.body.hiddenstaffdep;
    var hiddenstaffled = req.body.hiddenstaffled;
    var complogo = "";
    if(req.body.staffledpos == undefined) {
        var newstafflead = hiddenstaffled;
    } else {
        var newstafflead = req.body.staffledpos;
    }
    if(req.body.staffdep == undefined){
        var newstaffdep = hiddenstaffdep;
    } else {
        var newstaffdep = req.body.staffdep;
    }

    //if the file input comes as undefined
    if(req.file == undefined){
        //set the data to the hidden input which is the already uploaded logo
        var complogo = hidden;
    }
    else {
        //else set the value to the new logo
        var complogo = req.file.filename;

        //delete the previous logo here
        var filePath = "./public/uploads/logos/" + hidden;
        fs.unlink(filePath, (err)=>{
           if (err) throw err;
       });
    } 
    Todo.findOneAndUpdate({ _id: req.params.id }, {compname: newcompname, stafflastname: newlastname, staffledpos:newstafflead, stafftitle: newstafftile, staffpos: newstaffpos, staffdep: newstaffdep, stafftext: newstafftext, compemail: newcompemail, compphone: newcompphone, comproom: newcomproom, complogo: complogo}, function(err, todo){
        req.flash('success', 'You modified a staff member!');
        res.redirect('/todos');
    });
});


function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
}
res.redirect('/users/login');
}

module.exports = router;