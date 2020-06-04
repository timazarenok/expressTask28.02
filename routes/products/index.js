var {Product}  = require('../../modules');
var express = require('express');
var router  = express.Router();

const CreateProduct = (p) => {
  Product.create({
      barcode: p.barcode,
      name: p.name,
      productGroupId: p.productGroupId,
      manufactorName: p.manufactorName,
      country: p.country
  })
}

router.post('/create', (req, res) => {
  console.log(req.body)
    Product.create(req.body)
})

router.get('/:product_id/destroy', (req, res) => {
    models.User.destroy({
      where: {
        id: req.params.productId
      }
    })
  }
)

router.post('/', (req,res) => {
  const products = req.body.data;
  for(var p of products)
  {
    CreateProduct(p);
  }
})

router.get('/', (req, res) => {
  Product.findAll().then(products => {
    res.send(products);
  }).catch(err => console.log(err));
})

module.exports = router;