var { Employer } = require("../../modules");

const CreateEmployer = (e) =>
  Employer.create({
    login: e.login,
    name: e.name,
    surname: e.surname,
    active: e.active,
    block: e.block,
    lastActive: e.lastActive,
  });

exports.create_employer = (req, res) => CreateEmployer(req.body);

exports.destroy_employer = (req, res) => {
  Employer.destroy({
    where: {
      login: req.body.login,
    },
  });
};

exports.create_employers = (req, res) => {
  Employer.destroy({
    where: {},
    truncate: false,
  });
  const employers = req.body.data;
  for (var e of employers) {
    CreateEmployer(e);
  }
};

exports.get_all = (req, res) => {
  Employer.findAll()
    .then((employers) => {
      res.send(employers);
    })
    .catch((err) => res.send(err));
};
