var { Manufactor } = require("../../modules");

const CreateManufactor = (m) =>
  Manufactor.create({
    name: m.name,
  });

exports.create_manufactor = (req, res) => {
  CreateManufactor(req.body);
};

exports.destroy_manufactor = (req, res) => {
  Manufactor.destroy({
    where: {
      name: req.body.name,
    },
  });
};

exports.create_manufactors = (req, res) => {
  Manufactor.destroy({
    where: {},
    truncate: false,
  });
  const manufactors = req.body.data;
  for (var m of manufactors) {
    console.log(m);
    CreateManufactor(m);
  }
};

exports.get_all = (req, res) => {
  Manufactor.findAll()
    .then((manufactors) => {
      res.send(manufactors);
    })
    .catch((err) => res.send(err));
};
