const Sequelize = require('sequelize');
const Utility = require('../../common/utility.js');
const DbConstants = require('../constants/dbConstants.js');

class MysqlConnectionManager {
    constructor() {
        this.connection = null;
    }

    createMysqlConnection() {
        return new Promise(async(resolve, reject) => {
            try {
                if (Utility.isNullOrEmpty(this.connection)) {
                    this.connection = new Sequelize(DbConstants.SQL_DB.DATABASE, DbConstants.SQL_DB.USER, DbConstants.SQL_DB.PASSWORD, {
                        dialect: 'mysql',
                        dialectOptions: {
                            host: DbConstants.SQL_DB.HOST,
                            port: DbConstants.SQL_DB.PORT,
                        },
                        pool: {
                            max: 5,
                            min: 0,
                            acquire: 6000000,
                            idle: 10000
                        }
                    });
                    await this.connection.authenticate();
                    resolve(this.connection)
                } else {
                    resolve(this.connection);
                }
            } catch (excp) {
                reject(excp)
            }

        })
    }

}

module.exports = MysqlConnectionManager;