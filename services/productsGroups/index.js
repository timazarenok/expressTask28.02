var { ProductGroup } = require("../../modules");

const CreateProductGroup = (pg) => {
  ProductGroup.create({
    name: pg.name,
  });
};

exports.create_products_group = (req, res) => {
  CreateProductGroup(req.body);
};

exports.destroy_products_group = (req, res) => {
  ProductGroup.destroy({
    where: {
      name: req.body.name,
    },
  });
};

exports.create_products_groups = (req, res) => {
  ProductGroup.destroy({
    where: {},
    truncate: false,
  });
  const productGroups = req.body.data;
  for (var pg of productGroups) {
    CreateProductGroup(pg);
  }
};
exports.get_all = (req, res) => {
  ProductGroup.findAll()
    .then((productGroups) => {
      res.send(productGroups);
    })
    .catch((err) => res.send(err));
};
