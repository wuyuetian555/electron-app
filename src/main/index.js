import { app, BrowserWindow, session } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { windowOperation, createNewWindow } from './utils/windowOperation.js'
import windowsManager from './utils/windowsManager.js'
function createWindow() {
  const window = new windowsManager()
  window.createWindow('mainWindow')
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')
  // 添加跨域请求头
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Access-Control-Allow-Origin': ['*'],
        'Access-Control-Allow-Methods': ['GET', 'POST'],
        'Access-Control-Allow-Headers': ['Content-Type']
      }
    })
  })
  //
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })
  //
  createWindow()
  //添加监听事件
  windowOperation()
  createNewWindow()
  //
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
