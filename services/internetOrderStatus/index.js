var { InternetOrderStatus } = require("../../modules");

const CreateInternetOrderStatus = (ios) =>
  InternetOrderStatus.create({
    id: ios.id,
    label: ios.label,
  });

exports.create_internet_order_status = (req, res) =>
  CreateInternetOrderStatus(req.body);

exports.destroy_internet_order_status = (req, res) => {
  InternetOrderStatus.destroy({
    where: {
      id: req.body.id,
    },
  });
};

exports.create_internet_order_statuses = (req, res) => {
  InternetOrderStatus.destroy({
    where: {},
    truncate: false,
  });
  const internetOrderStatuses = req.body.data;
  for (var ios of internetOrderStatuses) {
    CreateInternetOrderStatus(ios);
  }
};

exports.get_all = (req, res) => {
  InternetOrderStatus.findAll()
    .then((internetOrderStatuses) => {
      res.send(internetOrderStatuses);
    })
    .catch((err) => res.send(err));
};
