const { app, BrowserWindow } = require('electron')
require('electron-reload')(__dirname);

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 400,
    height: 710,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile('iphone/iphone-7.html')
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});