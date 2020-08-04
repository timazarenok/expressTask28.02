var { SaleTypes } = require("../../modules");

const CreateSaleType = (st) =>
  SaleTypes.create({
    code: st.code,
    label: st.label,
  });

exports.create_sale_type = (req, res) => CreateSaleType(req.body);

exports.destroy_sale_type = (req, res) => {
  SaleTypes.destroy({
    where: {
      code: req.body.code,
    },
  });
};

exports.create_sale_types = (req, res) => {
  SaleTypes.destroy({
    where: {},
    truncate: false,
  });
  const saleTypes = req.body.data;
  for (var st of saleTypes) {
    CreateSaleType(st);
  }
};

exports.get_all = (req, res) => {
  SaleTypes.findAll()
    .then((saleTypes) => {
      res.send(saleTypes);
    })
    .catch((err) => res.send(err));
};
