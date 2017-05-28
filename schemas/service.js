var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema for the service
var ServiceSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  type: {
    type: Schema.Types.ObjectId,
    ref: 'TypeService'
  },
  client: String,
  email: String,
  phone: String,
  price: Number,
  status: String,
  city: String,
  country: String,
  code: {type: String, unique:true},
  description: String,
  evidence: String
});

module.exports = mongoose.model('Service', ServiceSchema);