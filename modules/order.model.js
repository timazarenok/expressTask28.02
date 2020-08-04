module.exports = (Sequelize, sequelize) => (
    sequelize.define('order', {
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
        idProvider: {
            type: Sequelize.BIGINT(11),
            allowNull: false
        },
        idBuyer: {
            type: Sequelize.BIGINT(11),
            allowNull: false
        },
        dateOfStart: {
            type: Sequelize.DATE,
            allowNull: false
        },
        dateOfFinish: {
            type: Sequelize.DATE,
            allowNull: false
        },
        numberOfContract: {
            type: Sequelize.BIGINT(11),
            allowNull: true
        },
        soldFor: {
            type: Sequelize.STRING,
            allowNull: true
        },
        dateLastUsed: {
            type: Sequelize.DATE,
            allowNull: true
        },
        lastUsedFor: {
            type: Sequelize.STRING,
            allowNull: true
        }
    })
)