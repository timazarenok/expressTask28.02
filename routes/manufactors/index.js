var modules  = require('../../modules');
var express = require('express');
var router  = express.Router()

router.post('/create', (req, res) => {
    modules.Company.create({
        name: req.body.name
    })
})

router.get('/:manufactor/destroy', function(req, res) {
    models.User.destroy({
      where: {
        id: req.params.manufactor
      }
    })
  })
router.get('/', (req, res) => {
    
})

module.exports = router;