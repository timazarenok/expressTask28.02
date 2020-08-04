var { Warehouse } = require("../../modules");

const CreateWarehouse = (w) =>
  Warehouse.create({
    id: w.id,
    label: w.label,
  });

exports.create_warehouse = (req, res) => CreateWarehouse(req.body);

exports.destroy_warehouse = (req, res) => {
  Warehouse.destroy({
    where: {
      id: req.body.id,
    },
  });
};

exports.create_warehouses = (req, res) => {
  Warehouse.destroy({
    where: {},
    truncate: false,
  });
  const warehouses = req.body.data;
  for (var w of warehouses) {
    CreateWarehouse(w);
  }
};

exports.get_all = (req, res) => {
  Warehouse.findAll()
    .then((warehouses) => {
      res.send(warehouses);
    })
    .catch((err) => res.send(err));
};
