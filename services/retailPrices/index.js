var { RetailPrice } = require("../../modules");

const CreateRetailPrice = (rp) =>
  RetailPrice.create({
    id: rp.id,
    code: rp.code,
    cost: rp.cost,
  });

exports.create_retail_price = (req, res) => CreateRetailPrice(req.body);

exports.destroy_retail_price = (req, res) => {
  RetailPrice.destroy({
    where: {
      id: req.body.id,
    },
  });
};

exports.create_retail_prices = (req, res) => {
  RetailPrice.destroy({
    where: {},
    truncate: false,
  });
  const retailPrices = req.body.data;
  for (var rp of retailPrices) {
    CreateRetailPrice(rp);
  }
};

exports.get_all = (req, res) => {
  RetailPrice.findAll()
    .then((retailPrices) => {
      res.send(retailPrices);
    })
    .catch((err) => res.send(err));
};
