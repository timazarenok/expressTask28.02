var { Country } = require("../../modules");

const CreateCountry = (c) =>
  Country.create({
    id: c.id,
    label: c.label,
  });

exports.create_country = (req, res) => CreateCountry(req.body);

exports.destroy_country = (req, res) => {
  Country.destroy({
    where: {
      id: req.body.id,
    },
  });
};

exports.create_countries = (req, res) => {
  Country.destroy({
    where: {},
    truncate: false,
  });
  const countries = req.body.data;
  for (var c of countries) {
    CreateCountry(c);
  }
};

exports.get_all = (req, res) => {
  Country.findAll()
    .then((countries) => {
      res.send(countries);
    })
    .catch((err) => res.send(err));
};
