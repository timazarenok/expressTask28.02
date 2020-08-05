const Sequelize = require("sequelize");

const sequelize = new Sequelize("shit", "root", "1111", {
  dialect: "mysql",
  host: "localhost",
});

const Employer = require("./employer.model")(Sequelize, sequelize); //---
const Company = require("./company.model")(Sequelize, sequelize); //---
const Product = require("./product.model")(Sequelize, sequelize); //---
const ProductGroup = require("./productGroup.model")(Sequelize, sequelize); //---
const Unit = require("./unit.model")(Sequelize, sequelize);  //---
const Manufactor = require("./manufactor.model")(Sequelize, sequelize); //?
const Contracts = require("./contracts.model")(Sequelize, sequelize); //---
const Driver = require("./driver.model")(Sequelize, sequelize);  //---
const Car = require("./car.model")(Sequelize, sequelize); //---
const CarModel = require("./carModel.model")(Sequelize, sequelize); //---
const Route = require("./route.model")(Sequelize, sequelize); //---
const Flight = require("./flight.model")(Sequelize, sequelize); //---
const Wallet = require("./wallet.model")(Sequelize, sequelize); //?
const SaleTypes = require("./saleTypes.model")(Sequelize, sequelize); //---
const Sale = require("./sale.model")(Sequelize, sequelize); //---
const PriceTypes = require("./priceTypes.model")(Sequelize, sequelize); //---
const Country = require("./country.model")(Sequelize, sequelize); //---
const CurrentPrice = require("./currentPrice.model")(Sequelize, sequelize); //---
const Document = require("./driver.model")(Sequelize, sequelize); //---
const DocumentType = require("./documentType.model")(Sequelize, sequelize); //---
const InternetOrder = require("./internetOrder.model")(Sequelize, sequelize); //---
const InternetOrderStatus = require("./internetOrderStatus.model")(
  Sequelize,
  sequelize
); //---
const Order = require("./order.model")(Sequelize, sequelize); //---
const RetailPrice = require("./retailPrice.model")(Sequelize, sequelize); //---
const Warehouse = require("./warehouse.model")(Sequelize, sequelize); //---


Company.hasMany(Order,{
  foreignKey: 'provider',
  where: {
    isProvider: true,
  },
  onDelete: 'cascade',
})
Company.hasMany(Order,{
  foreignKey: 'customer',
  where: {
    isCustomer: true,
  },
  onDelete: 'cascade',
})
PriceTypes.hasMany(Order,{
  foreignKey: {
    name: 'currency',
    allowNull: false,
  },
  onDelete: 'cascade',
})
InternetOrderStatus.hasMany(InternetOrder,{
  foreignKey: {
    name: 'orderStatus',
    allowNull: false,
  },
  onDelete: 'cascade',
})
Company.hasMany(InternetOrder,{
  foreignKey: 'providerCompany',
    where: {
      isProvider: true,
    },
  onDelete: 'cascade',
})
Country.hasMany(Warehouse,{
  foreignKey: {
    name: 'country',
    allowNull: false,
  },
  onDelete: 'cascade'
})
Company.hasMany(Warehouse,{
  foreignKey: {
    name: 'company',
    allowNull: false,
  },
  onDelete: 'cascade',
})
DocumentType.hasMany(Document,{
  foreignKey: {
    name: 'documentType',
    allowNull: false,
  },
  onDelete: 'cascade',
})
Country.hasMany(Company,{
  foreignKey:{
    name: 'country',
    allowNull: false,
  },
  onDelete: 'cascade',
})
PriceTypes.hasMany(RetailPrice,{
  foreignKey:{
    name: 'currency',
    allowNull: false,
  },
  onDelete: 'cascade',
})
PriceTypes.hasMany(CurrentPrice,{
  foreignKey:{
    name: 'currency',
    allowNull: false,
  },
  onDelete: 'cascade',
})
SaleTypes.hasMany(Sale,{
  foreignKey: {
    name: 'saleType',
    allowNull: false,
  },
  onDelete: 'cascade',
})
Route.hasMany(Flight,{
  foreignKey: {
    name: "route",
    allowNull: false,
  },
  onDelete: "cascade",
})
Company.hasMany(Employer,{
  foreignKey: {
    name: "company",
    allowNull: false,
  },
  onDelete: 'cascade',
})
Unit.hasMany(Product,{
  foreignKey: {
    name: 'unit',
    allowNull: false,
  }
})
ProductGroup.hasMany(Product,{
  foreignKey: 'productGroup',
  allowNull: false,
})
Company.hasMany(Product, {
  foreingKey: 'manufactorId',
 where: {
 isManufactor: true
 },
 onDelete: 'cascade',
})
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
module.exports.Brand = Brand;
module.exports.Country = Country;
module.exports.CurrentPrice = CurrentPrice;
module.exports.Document = Document;
module.exports.DocumentType = DocumentType;
module.exports.GiftSerteficate = GiftSerteficate;
module.exports.InternetOrder = InternetOrder;
module.exports.InternetOrderStatus = InternetOrderStatus;
module.exports.Order = Order;
module.exports.RetailPrice = RetailPrice;
module.exports.Warehouse = Warehouse;
