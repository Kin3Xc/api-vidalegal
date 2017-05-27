var express = require('express');
var router = express.Router();
var TypeService = require('../schemas/typeService');

router
// Get a type service list
.get('/', function (req, res) {
  TypeService.find(req.body, function (err, services) {
    if (err)
      res.send(err);
    else
      res.send(services);
  });
})

// Get a type service by Id
.get('/:id', function (req, res) {
  TypeService.findOne({_id: req.params.id}, function (err, service) {
    if (err)
      res.send(err);
    else
      res.send(service);
  });
})


// Add a new type service
.post('/', function (req, res) {
  var service = new TypeService(req.body);
  service.save(req.body, function (err, service) {
    if (err)
      res.send({err: err});
    else
      res.send({err: null, data: service});
  });
})

// Update a type service
.put('/', function (req, res) {
  TypeService.findOneAndUpdate({_id: req.body.id},req.body, {}, function (err, service) {
    if (err)
      res.send(err);
    else
      res.send({err:false, data:service});
  });
})

// Delete type service
.delete('/:id', function (req, res) {
  TypeService.findOne({_id: req.params.id}, function (err, service) {
    if (err) res.send(err);
    else {
      service.remove(function (err) {
        res.send(err);
      });
    }
  });
});

module.exports = router;
