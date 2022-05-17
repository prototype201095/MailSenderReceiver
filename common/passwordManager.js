const Utility = require('./utility.js');
const Constants = require('../constants/constants.js');

class PasswordManager {
    constructor() {
    }

    encryptPassword(userName, password) {
        if (Utility.isNullOrEmpty(userName) || Utility.isNullOrEmpty(password)) {
            return false;
        }
        const passwordText = this.concatUserNamePassword(userName, password);
        let bufferObj = new Buffer.alloc(passwordText.length, passwordText);

        return bufferObj.toString('base64');
    }

    decryptPassword(hashValue) {
        if (Utility.isNullOrEmpty(hashValue)) return false;
        let decryptedValue =  Buffer.from(hashValue, "base64").toString();
        const splittedValue = decryptedValue.split(Constants.PASSWORD_SEPERATOR);
        return (splittedValue.length) ? splittedValue[1] : false;
    }

    concatUserNamePassword(userName, password) {
        return `${userName}${Constants.PASSWORD_SEPERATOR}${password}` //userName-password
    }
}

module.exports = PasswordManager;