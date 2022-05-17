const PasswordManager = require('../common/passwordManager.js');
const PrimaryKeyProcessor = require('../common/primaryKeyProcessor.js');
const Utility = require('../common/utility.js');
const User = require('./database-models/user.js');

class SignupDao {
    constructor() {
        this.userInstance = new User();
        this.passwordManager = new PasswordManager();
        this.primaryKeyProcessor = new PrimaryKeyProcessor();
    }

    async createNewUser(requestPayload) {
        const user = await this.userInstance.initializeUserModel();
        if (!Utility.isNullOrEmpty(requestPayload)) {
            let { firstName, lastName, contact, email, password, description } = requestPayload;

            const userId = this.primaryKeyProcessor.generatePrimaryKey(email,"user"); // generating primary key
            const encryptedPassword = this.passwordManager.encryptPassword(firstName, password); // generating password hash

            user.create({
                "UserId":userId,
                "FirstName": firstName,
                "LastName": lastName,
                "contact": contact,
                "email": email,
                "password": encryptedPassword,
                "Description": description

            })
        }

    }
}

module.exports = SignupDao;