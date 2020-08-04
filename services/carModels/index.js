var { CarModel } = require("../../modules");

const CreateCarModel = (cm) =>
  CarModel.create({
    label: cm.label,
  });

exports.create_car_model = (req, res) => CreateCarModel(req.body);

exports.destroy_car_model = (req, res) => {
  CarModel.destroy({
    where: {
      label: req.body.label,
    },
  });
};

exports.create_car_models = (req, res) => {
  CarModel.destroy({
    where: {},
    truncate: false,
  });
  const carModels = req.body.data;
  for (var cm of carModels) {
    CreateCarModel(cm);
  }
};

exports.get_all = (req, res) => {
  CarModel.findAll()
    .then((carModels) => {
      res.send(carModels);
    })
    .catch((err) => res.send(err));
};
