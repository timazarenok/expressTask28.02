var { Driver } = require("../../modules");

const CreateDriver = (d) =>
  Driver.create({
    id: d.id,
    surname: d.surname,
    name: d.name,
    position: d.position,
    personalNumber: d.personalNumber,
    class: d.class,
  });

exports.create_driver = (req, res) => CreateDriver(req.body);

exports.destroy_driver = (req, res) => {
  Driver.destroy({
    where: {
      id: req.body.id,
    },
  });
};

exports.create_drivers = (req, res) => {
  Driver.destroy({
    where: {},
    truncate: false,
  });
  const drivers = req.body.data;
  for (var d of drivers) {
    CreateDriver(d);
  }
};

exports.get_all = (req, res) => {
  Driver.findAll()
    .then((drivers) => {
      res.send(drivers);
    })
    .catch((err) => res.send(err));
};
