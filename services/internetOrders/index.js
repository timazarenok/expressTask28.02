var { InternetOrder } = require("../../modules");

const CreateInternetOrder = (io) =>
  InternetOrder.create({
    id: io.id,
    number: io.number,
    seria: io.seria,
    createdDate: io.createAt,
    cost: io.cost,
    deliveryDate: io.deliveryDate,
  });

exports.create_internet_order = (req, res) => CreateInternetOrder(req.body);

exports.destroy_internet_order = (req, res) => {
  InternetOrder.destroy({
    where: {
      id: req.body.id,
    },
  });
};

exports.create_internet_orders = (req, res) => {
  InternetOrder.destroy({
    where: {},
    truncate: false,
  });
  const internetOrders = req.body.data;
  for (var io of internetOrders) {
    CreateInternetOrder(io);
  }
};

exports.get_all = (req, res) => {
  InternetOrder.findAll()
    .then((internetOrders) => {
      res.send(internetOrders);
    })
    .catch((err) => res.send(err));
};
