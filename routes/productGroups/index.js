var {ProductGroup}  = require('../../modules');
var express = require('express');
var router  = express.Router();

const CreateProductGroup = pg => {
    ProductGroup.create({
        name: pg.name
    })
}

router.post('/create', (req, res) => {
    CreateProductGroup(req.body);
})


router.get('/:productGroup_id/destroy', (req, res) => {
    ProductGroup.destroy({
      where: {
        id: req.params.productGroupId
      }
    })
  }
)

router.post('/', (req,res) => {
  const productGroups = req.body.productGroups;
  for(var pg of productGroups)
  {
    CreateProductGroup(pg);
  }
})

router.get('/', (req, res) => {
    ProductGroup.findAll().then(productGroups => {
      res.send(productGroups);
    }).catch(err => console.log(err))
})

module.exports = router