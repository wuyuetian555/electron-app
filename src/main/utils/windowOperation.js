import { ipcMain, BrowserWindow } from 'electron'
import WindowsManager from './windowsManager.js'
export const windowOperation = () => {
  ipcMain.on('window-op', (event, action, closeType) => {
    const currentWindow = BrowserWindow.fromWebContents(event.sender)
    switch (action) {
      case 'close':
        currentWindow.hide()
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
    const window = new WindowsManager(name, options)
    window.createWindow(name, options)
  })
}
