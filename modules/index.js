const Sequelize = require("sequelize");

const sequelize = new Sequelize("shit", "root", "1111", {
  dialect: "mysql",
  host: "localhost"
})

const Employer = require('./employer.model')(Sequelize, sequelize);
const Company = require('./company.model')(Sequelize, sequelize);
const Product = require('./product.model')(Sequelize, sequelize);
const ProductGroup = require('./productGroup.model')(Sequelize, sequelize);
const Unit = require('./unit.model')(Sequelize, sequelize);
const Manufactor = require('./manufactor.model')(Sequelize, sequelize);

Company.hasMany(Employer, { onDelete: "cascade"});
ProductGroup.hasMany(Product, { onDelete: "cascade"});
Unit.hasMany(Product, { onDelete: "cascade"});
Manufactor.hasMany(Product, { onDelete: "cascade"});

const init = async () => {
  await sequelize.sync({force:true})
}

module.exports.ProductGroup = ProductGroup;
module.exports.Product = Product;
module.exports.Company = Company;
module.exports.sequelize = sequelize;
