const { QueryTypes } = require('sequelize');
const PasswordManager = require('../common/passwordManager.js');
const Utility = require('../common/utility.js');
const SequelizeConnectionManager = require('./databaseConnectionManager/mysqlConnectionManager.js');

class LoginDao {
    constructor() {
        this.sequelizeConnectionManager = new SequelizeConnectionManager();
        this.passwordManager = new PasswordManager();
    }

    async authenticateUser(emailId, selectedPassword) {
        if (!Utility.isNullOrEmpty(emailId) || !Utility.isNullOrEmpty(selectedPassword)) {
            console.log("HERE")
            const sequelize = await this.sequelizeConnectionManager.createMysqlConnection();
            let query = `select password from user_details where email like '${emailId}'`
            const passwordHash = await sequelize.query(query, {
                type: QueryTypes.SELECT
            });
            console.log(passwordHash)
            if (!Utility.isNullOrEmpty(passwordHash) && passwordHash instanceof Array) {
                let password = null;
                'password' in passwordHash[0] && (password = this.passwordManager.decryptPassword(passwordHash[0].password))
                return (password === selectedPassword);
            }

            return false;
        }
        return false;
    }

}

module.exports = LoginDao;