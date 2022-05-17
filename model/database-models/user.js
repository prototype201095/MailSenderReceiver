const { DataTypes } = require('sequelize');
const Utility = require('../../common/utility.js');
const SequelizeConnectionManager = require('../databaseConnectionManager/mysqlConnectionManager.js');

class User {
    constructor() {
        this.sequelizeConnectionManager = new SequelizeConnectionManager();
        this.model = null;
    }

    async initializeUserModel() {
        const sequelize = await this.sequelizeConnectionManager.createMysqlConnection();

        if (Utility.isNullOrEmpty(this.model)) {
            this.model = sequelize.define('user_details', {
                UserId: {
                    type: DataTypes.BIGINT,
                    primaryKey: true
                },
                FirstName: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                LastName: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                contact: {
                    type: DataTypes.BIGINT,
                    allowNull: false
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                password: {
                    type: DataTypes.TEXT,
                    allowNull: false
                },
                description: {
                    type: DataTypes.TEXT
                }
            })
        }

        return this.model;
    }
}

module.exports = User;