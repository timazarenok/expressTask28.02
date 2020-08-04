var { Brand } = require("../../modules");

const CreateBrand = (b) =>
  Brand.create({
    code: b.code,
    label: b.label,
  });

exports.create_brand = (req, res) => CreateBrand(req.body);

exports.destroy_brand = (req, res) => {
  Brand.destroy({
    where: {
      code: req.body.code,
    },
  });
};

exports.create_brands = (req, res) => {
  Brand.destroy({
    where: {},
    truncate: false,
  });
  const brands = req.body.data;
  for (var b of brands) {
    CreateBrand(b);
  }
};

exports.get_all = (req, res) => {
  Brand.findAll()
    .then((brands) => {
      res.send(brands);
    })
    .catch((err) => res.send(err));
};
