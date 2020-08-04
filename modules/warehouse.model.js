module.exports = (Sequelize, sequelize) => (
    sequelize.define('warehouse', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        label: {
            type: Sequelize.STRING,
            allowNull: false
        },
        idCompany: {
            type: Sequelize.BIGINT(11),
            allowNull: false
        },
    })
)