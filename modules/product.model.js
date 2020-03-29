module.exports = (Sequelize, sequelize) => (
    sequelize.define("product", {
        barcode: {
            type: Sequelize.BIGINT(11),
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        manufactor: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
);