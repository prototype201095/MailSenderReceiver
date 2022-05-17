const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ipcLogin", {
    authenticateUser: async(emailId, password) => {
        return ipcRenderer.invoke("login", emailId, password);
    }
})