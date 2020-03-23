const Sequelize = require("sequelize");

const sequelize = new Sequelize("shit", "root", "1111", {
  dialect: "mysql",
  host: "localhost"
})

const Employer = require('./employer.model')(Sequelize, sequelize);
const Company = require('./company.model')(Sequelize, sequelize);

Company.hasMany(Employer, { onDelete: "cascade"});

sequelize.sync({force:true}).then(()=>{
    console.log("Tables have been created");
}).catch(err=>console.log(err));