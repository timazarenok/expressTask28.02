module.exports = (Sequelize, sequelize) => (
    sequelize.define("unit", {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
          allowNull: false  
        },
        name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        shortName: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        }
    })
);