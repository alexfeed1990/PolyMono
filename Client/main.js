const { app, BrowserWindow } = require('electron')

function createWindow () {
    //Modules
    const { screen } = require('electron') //Cant load until app is ready

    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.workAreaSize //Get h, w of display

    const win = new BrowserWindow({width, height, autoHideMenuBar: true})
    win.loadFile('index.html') //Load index.html
}

function reqModules() {
    const { screen } = require('electron')

}

app.whenReady().then(() => {
    reqModules()
    createWindow()
})