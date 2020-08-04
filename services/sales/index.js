var { Sale } = require("../../modules");

const CreateSale = (s) =>
  Sale.create({
    number: s.number,
    label: s.label,
  });

exports.create_sale = (req, res) => CreateSale(req.body);

exports.destroy_sale = (req, res) => {
  Sale.destroy({
    where: {
      number: req.body.number,
    },
  });
};

exports.create_sales = (req, res) => {
  Sale.destroy({
    where: {},
    truncate: false,
  });
  const sales = req.body.data;
  for (var s of sales) {
    CreateSale(s);
  }
};

exports.get_all = (req, res) => {
  Sale.findAll()
    .then((sales) => {
      res.send(sales);
    })
    .catch((err) => res.send(err));
};
