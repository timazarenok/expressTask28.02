module.exports = (Sequelize, sequelize) => (
    sequelize.define('documentType', {
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
    })
)