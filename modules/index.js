const Sequelize = require("sequelize");

const sequelize = new Sequelize("shit", "root", "1111", {
  dialect: "mysql",
  host: "localhost",
});

const Employer = require("./employer.model")(Sequelize, sequelize);
const Company = require("./company.model")(Sequelize, sequelize);
const Product = require("./product.model")(Sequelize, sequelize);
const ProductGroup = require("./productGroup.model")(Sequelize, sequelize);
const Unit = require("./unit.model")(Sequelize, sequelize);
const Manufactor = require("./manufactor.model")(Sequelize, sequelize);
const Contracts = require("./contracts.model")(Sequelize, sequelize);
const Driver = require("./driver.model")(Sequelize, sequelize);
const Car = require("./car.model")(Sequelize, sequelize);
const CarModel = require("./carModel.model")(Sequelize, sequelize);
const Route = require("./route.model")(Sequelize, sequelize);
const Flight = require("./flight.model")(Sequelize, sequelize);
const Wallet = require("./wallet.model")(Sequelize, sequelize);
const SaleTypes = require("./saleTypes.model")(Sequelize, sequelize);
const Sale = require("./sale.model")(Sequelize, sequelize);
const PriceTypes = require("./priceTypes.model")(Sequelize, sequelize);

CarModel.hasMany(Car, {
  foreignKey: {
    name: "carModel",
    allowNull: false,
  },
  onDelete: "cascade",
});

Car.hasMany(Flight, {
  foreignKey: {
    name: "car",
    allowNull: false,
  },
  onDelete: "cascade",
});

Driver.hasMany(Flight, {
  foreignKey: {
    name: "driver_id",
    allowNull: false,
  },
});

Company.hasMany(Contracts, {
  foreignKey: {
    name: "customer",
    allowNull: false,
  },
  onDelete: "cascade",
});

Company.hasMany(Contracts, {
  foreignKey: {
    name: "provider",
    allowNull: true,
  },
  onDelete: "cascade",
});

Company.hasMany(Employer, { onDelete: "cascade" });
ProductGroup.hasMany(Product, { onDelete: "cascade" });
Unit.hasMany(Product, { onDelete: "cascade" });
Manufactor.hasMany(Product, { onDelete: "cascade" });

const init = async () => {
  await sequelize.sync({ force: true });
};

module.exports.Contracts = Contracts;
module.exports.Employer = Employer;
module.exports.Manufactor = Manufactor;
module.exports.ProductGroup = ProductGroup;
module.exports.Product = Product;
module.exports.Company = Company;
module.exports.sequelize = sequelize;
module.exports.Car = Car;
module.exports.CarModel = CarModel;
module.exports.Driver = Driver;
module.exports.Route = Route;
module.exports.Wallet = Wallet;
module.exports.SaleTypes = SaleTypes;
module.exports.Sale = Sale;
module.exports.PriceTypes = PriceTypes;
module.exports.Flight = Flight;
module.exports.Unit = Unit;
