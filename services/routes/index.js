var { Route } = require("../../modules");

const CreateRoute = (r) =>
  Route.create({
    number: r.number,
    numerator: r.numerator,
    seria: r.seria,
    customerAddress: r.customerAddress,
  });

exports.create_route = (req, res) => CreateRoute(req.body);

exports.destroy_route = (req, res) => {
  Route.destroy({
    where: {
      number: req.body.number,
    },
  });
};

exports.create_routes = (req, res) => {
  Route.destroy({
    where: {},
    truncate: false,
  });
  const routes = req.body.data;
  for (var r of routes) {
    CreateRoute(r);
  }
};

exports.get_all = (req, res) => {
  Route.findAll()
    .then((routes) => {
      res.send(routes);
    })
    .catch((err) => res.send(err));
};
