const { dialog, BrowserWindow } = require('electron');

async function mostrarAlert(event, mensagem) {
    const win = BrowserWindow.getFocusedWindow();
    await dialog.showMessageBox(win, {
        type: 'info',
        message: mensagem,
        buttons: ['OK']
    });
}

async function mostrarConfirm(event, mensagem) {
    const win = BrowserWindow.getFocusedWindow();
    const result = await dialog.showMessageBox(win, {
        type: 'question',
        message: mensagem,
        buttons: ['Sim', 'Não'],
        cancelId: 1
    });
    console.log(result.response)
    return result.response === 0;
    
}

module.exports = {
    mostrarAlert,
    mostrarConfirm
};