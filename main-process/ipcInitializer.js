const LoginController = require("./Login/login-async");

class IpcInitializer {
    constructor() {}

    static ipcInitialization() {
        // All IPC main event handling will be done here
        new LoginController();
    }

}

module.exports = IpcInitializer;