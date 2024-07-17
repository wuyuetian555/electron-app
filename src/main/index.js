import { app, BrowserWindow, session, Menu, Tray, nativeImage, globalShortcut } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { windowOperation, createNewWindow } from './utils/windowOperation.js'
import { initGlobalShortcut } from './utils/globalShortcut.js'
import WindowsManager from './utils/windowsManager.js'
import icon from '../../resources/th.jpg?asset'
function createWindow() {
  const window = new WindowsManager()
  // 创建主窗口
  const mainWindow = window.createWindow('mainWindow')
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
  // 创建剪切板窗口
  window.createWindow('clipboard', {
    route: 'clipboardUtil',
    width: 310,
    height: 420,
    resizable: false
  })
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
      label: '退出精灵小助手',
      icon: nativeImage.createFromPath(icon).resize({
        width: 16,
        height: 16,
        quality: 'best'
      }),
      click: () => {
        app.exit()
      }
    }
  ])
  tray.setToolTip('This is my application.')
  tray.on('click', () => {
    WindowsManager.getInstance().windows.mainWindow.show()
  })
  tray.setContextMenu(contextMenu)

  // 注册快捷键
  initGlobalShortcut()
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
app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})
