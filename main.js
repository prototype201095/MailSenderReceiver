const { app, BrowserWindow } = require("electron");
const path = require('path');
let IpcInitializer = require('./main-process/ipcInitializer.js');

function createWindow() {
    console.log(path.join(`${__dirname}/src/components/login`, 'preload.js'))
    let windowRef = new BrowserWindow({
        height: 800,
        width: 1400,
        show: false,
        webPreferences: {
            preload: path.join(`${__dirname}/src/components`, 'preload.js'),
            nodeIntegration: true
        }
    });
    windowRef.loadFile('src/components/login/login.html');

    let splash = new BrowserWindow({
        width: 400,
        height: 300,
        frame: false,
    });
    splash.loadFile('src/components/splash-screen/splash-screen.html')
    splash.center();

    app.on('close', () => {
        windowRef = null;
        splash = null;
    });

    setTimeout(function() {
        splash.close();
        windowRef.show();
    }, 200);
}

app.whenReady().then(() => {
    createWindow();
    IpcInitializer.ipcInitialization();

})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})