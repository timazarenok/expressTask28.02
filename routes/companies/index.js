var {Company}  = require('../../modules');
var express = require('express');
var router  = express.Router()

const CreateCompany = (c) => Company.create({
  name: c.name,
  PAN: c.PAN,
  ownerType: c.ownerType,
  organizationGroup: c.organizationGroup,
  address: c.address,
  telephone: c.telephone,
  email: c.email,
  isCustomer: c.isCustomer,
  isProvider: c.isProvider,
  isOrganization: c.isOrganization
})

router.post('/create', (req, res) => {
    CreateCompany(req.body);
})


router.post('/destroy', (req, res) => {
    Company.destroy({
      where: {
        name: req.body.name
      }
    })
  }
)

router.post('/', (req,res) => {
  Company.destroy({
    where: {},
    truncate: false
  })
  const companies = req.body.data;
  for(var c of companies)
  {
    CreateCompany(c);
  }
})

router.get('/', (req, res) => {
    Company.findAll().then(companies => {
      res.send(companies);
    }).catch(err => console.log(err))
})

module.exports = router