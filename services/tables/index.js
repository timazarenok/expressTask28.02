const { Company } = require("../../modules");

exports.get_customers = (req, res) => {
  Company.findAll({
    where: {
      isCustomer: true,
    },
  }).then((customers) => res.send(customers));
};

exports.get_providers = (req, res) => {
  Company.findAll({
    where: {
      isProvider: true,
    },
  }).then((providers) => res.send(providers));
};
