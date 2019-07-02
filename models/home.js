var mongoose = require('mongoose');

// homepage model
var homeSchema = mongoose.Schema ({
  homemaintitle: {
    type: String
  },
  homesecondtitle: {
    type: String
  }
});


var home = module.exports = mongoose.model('home', homeSchema);

