var { Order } = require("../../modules");

const CreateOrder = (o) =>
  Order.create({
    id: o.id,
    number: o.number,
    seria: o.seria,
    dateOfStart: o.dateOfStart,
    dateOfFinish: o.dateOfFinish,
    numberOfOrder: o.numberOfOrder,
  });

exports.create_order = (req, res) => CreateOrder(req.body);

exports.destroy_order = (req, res) => {
  Order.destroy({
    where: {
      id: req.body.id,
    },
  });
};

exports.create_orders = (req, res) => {
  Order.destroy({
    where: {},
    truncate: false,
  });
  const orders = req.body.data;
  for (var o of orders) {
    CreateOrder(o);
  }
};

exports.get_all = (req, res) => {
  Order.findAll()
    .then((orders) => {
      res.send(orders);
    })
    .catch((err) => res.send(err));
};
