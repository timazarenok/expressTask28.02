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
        country: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
);