import { ipcMain, BrowserWindow } from 'electron'
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
