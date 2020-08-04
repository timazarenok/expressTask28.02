var { PriceTypes } = require("../../modules");

const CreatePriceType = (prt) =>
  PriceTypes.create({
    code: prt.code,
    label: prt.label,
  });

exports.create_price_type = (req, res) => CreatePriceType(req.body);

exports.destroy_price_type = (req, res) => {
  PriceTypes.destroy({
    where: {
      code: req.body.code,
    },
  });
};

exports.create_price_types = (req, res) => {
  PriceTypes.destroy({
    where: {},
    truncate: false,
  });
  const priceTypes = req.body.data;
  for (var prt of priceTypes) {
    CreatePriceType(prt);
  }
};

exports.get_all = (req, res) => {
  PriceTypes.findAll()
    .then((priceTypes) => {
      res.send(priceTypes);
    })
    .catch((err) => res.send(err));
};
