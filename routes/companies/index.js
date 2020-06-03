var {Company}  = require('../../modules');
var express = require('express');
var router  = express.Router()

router.post('/create', (req, res) => {
    Company.create({
        name: req.body.name
    })
})


router.get('/:company_id/destroy', (req, res) => {
    Company.destroy({
      where: {
        id: req.params.companyId
      }
    })
  }
)

router.get('/', (req, res) => {
    
})

module.exports = router