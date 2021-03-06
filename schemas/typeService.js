var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TypeServiceSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: String,
  price: Number
});

module.exports = mongoose.model('TypeService', TypeServiceSchema);