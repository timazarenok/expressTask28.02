var { Company } = require("../../modules");

const CreateCompany = (c) =>
  Company.create({
    name: c.name,
    PAN: c.PAN,
    ownerType: c.ownerType,
    organizationGroup: c.organizationGroup,
    address: c.address,
    telephone: c.telephone,
    email: c.email,
    isCustomer: c.isCustomer,
    isProvider: c.isProvider,
    isOrganization: c.isOrganization,
  });

exports.create_company = (req, res) => {
  CreateCompany(req.body);
};

exports.destroy_company = (req, res) => {
  Company.destroy({
    where: {
      name: req.body.name,
    },
  });
};

exports.create_companies = (req, res) => {
  Company.destroy({
    where: {},
    truncate: false,
  });
  const companies = req.body.data;
  for (var c of companies) {
    CreateCompany(c);
  }
};

exports.get_all = (req, res) => {
  Company.findAll()
    .then((companies) => {
      res.send(companies);
    })
    .catch((err) => res.send(err));
};
