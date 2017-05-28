var express = require('express');
var router = express.Router();
var Service = require('../schemas/service');
var email = require ('./email');

router
// Get a service list
.get('/', function (req, res) {
  Service.find(req.body, function (err, services) {
    if (err)
      res.send(err);
    else
      Service.populate(services, {path: 'type'}, function(err, data){
        if (err)
          res.send(err);
        else
          res.send(data);
      });
  });
})

// Get a service by Id
.get('/:id', function (req, res) {
  Service.findOne({_id: req.params.id}, function (err, service) {
    if (err)
      res.send(err);
    else
      Service.populate(service, {path: 'type'}, function(err, data){
        if (err)
          res.send(err);
        else
          res.send(data);
      });
  });
})


// Add a new service
.post('/', function (req, res) {
  var objService = {};
  objService = req.body;
  objService.status = "Sin pagar";

  // generate a code number for tracking
  objService.code = Math.random().toString(36).substr(2, 5);

  // evidence for service
  if (req.files.evidence) {
    objService.evidence = req.files.evidence.name;  
  }
  

  var service = new Service(objService);

  service.save(objService, function (err, service) {
    if (err)
      res.send({err: err});
    else
      email.sendMailCreateService(objService);
      res.send({err: false});
  });
})


// Get status for a service
.get('/status/:code', function (req, res) {
  Service.findOne({code: req.params.code}, function (err, service) {
    if (err)
      res.send(err);
    else
      Service.populate(service, {path: 'type'}, function(err, data){
        if (err)
          res.send(err);
        else
          res.send(data);
      });
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
