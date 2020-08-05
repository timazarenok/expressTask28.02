var { Flight } = require("../../modules");

const CreateFlight = (f) =>
  Flight.create({
    number: f.number,
    seria: gs.seria,
    documentDate: f.createdAt,
    flightWeight: f.flightWeight,
    priceNDC: f.priceNDC,
  });

exports.create_flight = (req, res) => CreateFlight(req.body);

exports.destroy_flight = (req, res) => {
  Flight.destroy({
    where: {
      number: req.body.number,
    },
  });
};

exports.create_flights = (req, res) => {
  Flight.destroy({
    where: {},
    truncate: false,
  });
  const flights = req.body.data;
  for (var f of flights) {
    CreateFlight(f);
  }
};

exports.get_all = (req, res) => {
  Flight.findAll()
    .then((flights) => {
      res.send(flights);
    })
    .catch((err) => res.send(err));
};
