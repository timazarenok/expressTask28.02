var {Manufactor}  = require('../../modules');
var express = require('express');
var router  = express.Router();

const CreateManufactor = (m) => Manufactor.create({
    name: m.name
  })
  
  router.post('/create', (req, res) => {
      CreateManufactor(req.body);
  })
  
  
  router.get('/:manufactor_id/destroy', (req, res) => {
      Company.destroy({
        where: {
          id: req.params.manufactorId
        }
      })
    }
  )
  
  router.post('/', (req,res) => {
    const manufactors = req.body.manufactors;
    for(var m of manufactors)
    {
      CreateCompany(m);
    }
  })
  
  router.get('/', (req, res) => {
      Company.findAll().then(manufactors => {
        res.send(manufactors);
      }).catch(err => console.log(err))
  })
  
  module.exports = router