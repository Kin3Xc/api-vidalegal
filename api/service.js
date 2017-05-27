var express = require('express');
var router = express.Router();
var Service = require('../schemas/service');

router
// Get a service list
.get('/', function (req, res) {
  Service.find(req.body, function (err, services) {
    if (err)
      res.send(err);
    else
      res.send(services);
  });
})

// Get a service by Id
.get('/:id', function (req, res) {
  Service.findOne({_id: req.params.id}, function (err, service) {
    if (err)
      res.send(err);
    else
      res.send(service);
  });
})


// Add a new service
.post('/', function (req, res) {
  var service = new Service(req.body);
  service.save(req.body, function (err, service) {
    if (err)
      res.send({err: err});
    else
      res.send({err: null, data: service});
  });
})

// Update a service
.put('/', function (req, res) {
  Service.findOneAndUpdate({_id: req.body.id},req.body, {}, function (err, service) {
    if (err)
      res.send(err);
    else
      res.send({err:false, data:service});
  });
})

// Delete service
.delete('/:id', function (req, res) {
  Service.findOne({_id: req.params.id}, function (err, service) {
    if (err) res.send(err);
    else {
      service.remove(function (err) {
        res.send(err);
      });
    }
  });
});

module.exports = router;
