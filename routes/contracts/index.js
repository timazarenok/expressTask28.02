var {Contracts}  = require('../../modules');
var express = require('express');
var router  = express.Router()

const CreateContract = (c) => Contracts.create({
  number: c.number,
  seria: c.seria,
  customer: c.customer,
  provider: c.provider,
  createdAt: c.createdAt
})

router.post('/create', (req, res) => {
    CreateContract(req.body);
})


router.post('/destroy', (req, res) => {
  Contracts.destroy({
      where: {
        id: req.body.contractId
      }
    })
  }
)

router.post('/', (req,res) => {
  Contracts.destroy({
    where: {},
    truncate: false
  })
  const contracts = req.body.data;
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