var {Contracts}  = require('../../modules');
var express = require('express');
var router  = express.Router()

const CreateContract = (c) => Contracts.create({
  number: c.number,
  seria: c.seria
})

router.post('/create', (req, res) => {
    CreateContract(req.body);
})


router.get('/:contract_id/destroy', (req, res) => {
    Company.destroy({
      where: {
        id: req.params.contractId
      }
    })
  }
)

router.post('/', (req,res) => {
  const contracts = req.body.contracts;
  for(var c of contracts)
  {
    CreateContract(c);
  }
})

router.get('/', (req, res) => {
    Contracts.findAll().then(contracts => {
      res.send(contracts);
    }).catch(err => console.log(err))
})

module.exports = router