module.exports = (Sequelize, sequelize) => (
    sequelize.define('retailPrice', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        code: {
            type: Sequelize.BIGINT(11),
            allowNull: false
        },
        idCountry: {
            type: Sequelize.BIGINT(11),
            allowNull: false
        },
        idProvider: {
            type: Sequelize.BIGINT(11),
            allowNull: false
        },
        cost: {
            type: Sequelize.BIGINT(11),
            allowNull: false
        },
    })
)