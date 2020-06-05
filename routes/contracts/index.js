var {Contracts, Company}  = require('../../modules');
var express = require('express');
var router  = express.Router()

const CreateContract = (c) => Contracts.create({
  customer: c.customer,
  provider: c.provider,
  customerAddress: c.customerAddress,
  providerAddress: c.providerAddress,
  createdAt: c.createdAt,
  seria: c.seria,
  number: c.number
})

router.post('/create', (req, res) => {
    CreateContract(req.body);
})


router.post('/destroy', (req, res) => {
  console.log(req.body)
  Contracts.destroy({
      where: {
        id: req.body.id
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