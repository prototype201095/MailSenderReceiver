const { ipcMain } = require('electron');
const Utility = require('../../common/utility.js');
const LoginDb = require('../../model/login.js');

class LoginController {
    constructor() {
        this.registerLoginIpcEvents();
        this.loginDb = new LoginDb();
    }
    registerLoginIpcEvents() {
        ipcMain.handle('login', (event, emailId, password) => {
            if (Utility.isNullOrEmpty(emailId) || Utility.isNullOrEmpty(password)) {
                return false;
            }
            const response = this.loginDb.authenticateUser(emailId, password).then((result) => {
                console.log("Result", result)
            }).finally(() => {
                return response;
            })
        });
    }
}

module.exports = LoginController;