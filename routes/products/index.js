var modules  = require('../../modules');
var express = require('express');
var router  = express.Router()

router.post('/create', (req, res) => {
    modules.Company.create({
        barcode: req.body.barcode,
        name: req.body.name,
        manufactor: req.body.manufactor,
        country: req.body.country
    })
})

router.get('/:product_id/destroy', function(req, res) {
    models.User.destroy({
      where: {
        id: req.params.productId
      }
    })
  }
  )
router.get('/', (req, res) => {
    
})

module.exports = router;