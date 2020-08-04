var { CurrentPrice } = require("../../modules");

const CreateCurrentPrice = (cp) =>
  CurrentPrice.create({
    id: cp.id,
    code: cp.code,
    label: cp.label,
    cost: cp.cost,
  });

exports.create_current_price = (req, res) => CreateCurrentPrice(req.body);

exports.destroy_current_price = (req, res) => {
  CurrentPrice.destroy({
    where: {
      id: req.body.id,
    },
  });
};

exports.create_current_prices = (req, res) => {
  CurrentPrice.destroy({
    where: {},
    truncate: false,
  });
  const currentPrices = req.body.data;
  for (var cp of currentPrices) {
    CreateCurrentPrice(cp);
  }
};

exports.get_all = (req, res) => {
  CurrentPrice.findAll()
    .then((currentPrices) => {
      res.send(currentPrices);
    })
    .catch((err) => res.send(err));
};
