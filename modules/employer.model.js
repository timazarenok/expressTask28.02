module.exports = (Sequelize, sequelize) => (
    sequelize.define("employer", {
        login: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        surname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        avtive: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        block: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        lastActive: {
            type: Sequelize.DATE,
            allowNull: false
        }
    })
)