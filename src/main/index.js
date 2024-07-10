import { app, BrowserWindow, session, Menu, Tray } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { windowOperation, createNewWindow } from './utils/windowOperation.js'
import windowsManager from './utils/windowsManager.js'
import icon from '../../resources/th.jpg?asset'
function createWindow() {
  const window = new windowsManager()
  window.createWindow('mainWindow')
}

let tray = null
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

  // 创建系统托盘
  tray = new Tray(icon)
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '退出',
      click: () => {
        app.exit()
      }
    }
  ])
  tray.setToolTip('This is my application.')
  tray.on('click', () => {
    windowsManager.getInstance().windows.mainWindow.show()
  })
  tray.setContextMenu(contextMenu)

  //创建主窗口
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
