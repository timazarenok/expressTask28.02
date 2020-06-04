module.exports = (Sequelize, sequelize) => (
    sequelize.define("company", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        PAN: {
            type: Sequelize.BIGINT(11),
            allownull: false
        },
        ownerType: {
            type: Sequelize.STRING,
            allowNull: false
        },
        organizationGroup: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        telephone: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isCustomer: {
          type: Sequelize.BOOLEAN,
          allowNull: false  
        },
        isProvider: {
            type: Sequelize.BOOLEAN,
            allowNull: false  
        },
        isOrganization: {
            type: Sequelize.BOOLEAN,
            allowNull: false  
        }
    })
);