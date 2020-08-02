var { Product } = require("../../modules");

const CreateProduct = (p) => {
  Product.create({
    barcode: p.barcode,
    name: p.name,
    productGroupId: p.productGroupId,
    manufactorName: p.manufactorName,
    country: p.country,
  });
};

exports.create_product = (req, res) => {
  console.log(req.body);
  Product.create(req.body);
};

exports.destroy_product = (req, res) => {
  Product.destroy({
    where: {
      barcode: req.body.barcode,
    },
  });
};

exports.create_products = (req, res) => {
  Product.destroy({
    where: {},
    truncate: false,
  });
  const products = req.body.data;
  for (var p of products) {
    CreateProduct(p);
  }
};

exports.get_all = (req, res) => {
  Product.findAll()
    .then((products) => {
      res.send(products);
    })
    .catch((err) => console.log(err));
};
