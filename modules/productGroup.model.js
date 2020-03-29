module.exports = (Sequelize, sequelize) => (
    sequelize.define("productGroup", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
);