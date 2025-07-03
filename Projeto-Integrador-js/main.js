const { app, BrowserWindow } = require('electron');
const path = require('path');
const { createLoginWindon } = require('./src/janelaPrincipal');
const { registrarTodos } = require('./src/appListeners');

app.whenReady().then(function () {

createLoginWindon()
    registrarTodos();
 
    app.on('activate', function () {
        if (BrowserWindow.getAWindows().length === 0) {
            createLoginWindon()
        }
    });

}
);


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});