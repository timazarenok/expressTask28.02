var { Car } = require("../../modules");

const CreateCar = (c) =>
  Car.create({
    number: c.number,
    class: c.class,
  });

exports.create_car = (req, res) => CreateCar(req.body);

exports.destroy_car = (req, res) => {
  Car.destroy({
    where: {
      number: req.body.number,
    },
  });
};

exports.create_cars = (req, res) => {
  Car.destroy({
    where: {},
    truncate: false,
  });
  const cars = req.body.data;
  for (var c of cars) {
    CreateCar(c);
  }
};

exports.get_all = (req, res) => {
  Car.findAll()
    .then((cars) => {
      res.send(cars);
    })
    .catch((err) => res.send(err));
};
