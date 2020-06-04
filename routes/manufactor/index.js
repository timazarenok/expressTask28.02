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
    Manufactor.destroy({
      where: {},
      truncate: false
    });
    const manufactors = req.body.data;
    for(var m of manufactors)
    {
      console.log(m)
      CreateManufactor(m);
    }
  })
  
  router.get('/', (req, res) => {
    Manufactor.findAll().then(manufactors => {
        res.send(manufactors);
      }).catch(err => console.log(err))
  })
  
  module.exports = router