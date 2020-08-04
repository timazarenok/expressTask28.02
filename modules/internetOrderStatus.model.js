module.exports = (Sequelize, sequelize) => (
    sequelize.define("internetOrderStatus", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        label: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
);