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
            allowNull: false
        },
        seria: {
            type: Sequelize.BIGINT(11),
            allowNull: false
        },
    })
)