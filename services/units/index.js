var { Unit } = require("../../modules");

const CreateUnit = (u) =>
  Unit.create({
    id: u.id,
    name: u.name,
    shortName: u.shortName,
  });

exports.create_unit = (req, res) => CreateUnit(req.body);

exports.destroy_unit = (req, res) => {
  Unit.destroy({
    where: {
      id: req.body.id,
    },
  });
};

exports.create_units = (req, res) => {
  Unit.destroy({
    where: {},
    truncate: false,
  });
  const units = req.body.data;
  for (var u of units) {
    CreateUnit(u);
  }
};

exports.get_all = (req, res) => {
  Unit.findAll()
    .then((units) => {
      res.send(units);
    })
    .catch((err) => res.send(err));
};
