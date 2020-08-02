var { Contracts } = require("../../modules");

const CreateContract = (c) =>
  Contracts.create({
    customer: c.customer,
    provider: c.provider,
    customerAddress: c.customerAddress,
    providerAddress: c.providerAddress,
    createdAt: c.createdAt,
    seria: c.seria,
    number: c.number,
  });

exports.create_contract = (req, res) => {
  CreateContract(req.body);
};

exports.destroy_contract = (req, res) => {
  Contracts.destroy({
    where: {
      id: req.body.id,
    },
  });
};

exports.create_contracts = (req, res) => {
  Contracts.destroy({
    where: {},
    truncate: false,
  });
  const contracts = req.body.data;
  for (var c of contracts) {
    CreateContract(c);
  }
};

exports.get_all = (req, res) => {
  Contracts.findAll()
    .then((contracts) => {
      res.send(contracts);
    })
    .catch((err) => res.send(err));
};
