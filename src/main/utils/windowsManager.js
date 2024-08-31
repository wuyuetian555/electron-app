import { is } from '@electron-toolkit/utils'
import { shell, BrowserWindow } from 'electron'
import { join } from 'path'
import icon from '../../../resources/th.jpg?asset'
const isDev = is.dev && process.env['ELECTRON_RENDERER_URL']
const loadURLDev = process.env['ELECTRON_RENDERER_URL']
const loadFileDev = join(__dirname, '../../renderer/index.html')
class WindowsManager {
  static instance = null
  windows = {}
  constructor() {
    if (WindowsManager.instance) {
      return WindowsManager.instance
    }
    WindowsManager.instance = this
  }
  static getInstance() {
    if (!WindowsManager.instance) {
      WindowsManager.instance = new WindowsManager()
    }
    return WindowsManager.instance
  }
  static getWindowInstance(name) {
    if (!WindowsManager.instance) {
      WindowsManager.instance = new WindowsManager()
    }
    return WindowsManager.instance.windows[name]
  }
  addWindow(name, window) {
    this.windows[name] = window
  }
  createWindow(name, options) {
    // 判断窗口是否存在
    if (this.windows[name]) {
      return this.windows[name]
    }
    const newWindow = new BrowserWindow({
      width: 1200,
      height: 670,
      show: false,
      autoHideMenuBar: true,
      icon: icon,
      titleBarStyle: 'hidden',
      webPreferences: {
        preload: join(__dirname, '../preload/index.js'),
        sandbox: false,
        contextIsolation: true
      },
      ...options
    })
    this.addWindow(name, newWindow)
    newWindow.webContents.setWindowOpenHandler((details) => {
      shell.openExternal(details.url)
      return { action: 'deny' }
    })
    newWindow.on('maximize', () => {
      newWindow.webContents.send('window-maximized')
    })

    newWindow.on('unmaximize', () => {
      newWindow.webContents.send('window-unmaximized')
    })
    newWindow.on('closed', () => {
      delete this.windows[name]
    })
    if (isDev) {
      newWindow.loadURL(options?.route ? `${loadURLDev}#/${options.route}` : loadURLDev)
    } else {
      newWindow.loadFile(options?.route ? `${loadFileDev}#/${options.route}` : loadFileDev)
    }
    return newWindow
  }
}

export default WindowsManager
