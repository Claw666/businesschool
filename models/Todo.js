var mongoose = require('mongoose');

// todo model
var todoSchema = mongoose.Schema ({
  compname: {
    type: String
  },
  staffledpos: {
    type: String
  },
  staffdep: {
    type: String
  },
  compemail: {
    type: String
  },
  stafftitle: {
    type: String
  },
  staffpos: {
    type: String
  },
  stafftext: {
    type: String
  },
  compphone: {
    type: String
  },
  comproom: {
    type: String
  },
  complogo: {
    type: String
  }
});


var Todo = module.exports = mongoose.model('Todo', todoSchema);

