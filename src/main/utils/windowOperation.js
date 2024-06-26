import { ipcMain, BrowserWindow } from 'electron'
import windowsManager from './windowsManager'
export const windowOperation = () => {
  ipcMain.on('window-op', (event, action, closeType) => {
    const currentWindow = BrowserWindow.fromWebContents(event.sender)
    switch (action) {
      case 'close':
        currentWindow.close()
        break
      case 'unmaximize':
        currentWindow.unmaximize()
        break
      case 'Maximized':
        currentWindow.maximize()
        break
      case 'minimize':
        currentWindow.minimize()
        break
      default:
        break
    }
  })
}
export const createNewWindow = () => {
  ipcMain.on('create-window', (event, name, options) => {
    console.log(name, options)
    const window = new windowsManager(name, options)
    window.createWindow(name, options)
  })
}
