module.exports = (Sequelize, sequelize) => (
    sequelize.define("company", {
        name: {
            type: Sequelize.STRING,
            primaryKey: true,
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
          allowNull: true  
        },
        isProvider: {
            type: Sequelize.BOOLEAN,
            allowNull: true  
        },
        isOrganization: {
            type: Sequelize.BOOLEAN,
            allowNull: true  
        }
    })
);