module.exports = (Sequelize, sequelize) => (
    sequelize.define('contract', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        number: {
            type: Sequelize.BIGINT(11),
            allowNull: true
        },
        seria: {
            type: Sequelize.BIGINT(11),
            allowNull: true
        },
        customerAddress: {
            type: Sequelize.STRING,
            allowNull: false
        },
        providerAddress: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
)