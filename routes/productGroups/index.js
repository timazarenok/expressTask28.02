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


router.post('/destroy', (req, res) => {
    ProductGroup.destroy({
      where: {
        name: req.body.name
      }
    })
  }
)

router.post('/', (req,res) => {
  ProductGroup.destroy({
    where: {},
    truncate: false
  })
  const productGroups = req.body.data;
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