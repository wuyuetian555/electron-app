import { is } from '@electron-toolkit/utils'
import { shell, BrowserWindow } from 'electron'
import { join } from 'path'
import icon from '../../../resources/th.jpg?asset'
const isDev = is.dev && process.env['ELECTRON_RENDERER_URL']
const loadURLDev = process.env['ELECTRON_RENDERER_URL']
const loadFileDev = join(__dirname, '../../renderer/index.html')
class windowsManager {
  constructor() {
    if (windowsManager.instance) {
      return windowsManager.instance
    }
    this.windows = {}
    windowsManager.instance = this
  }
  static getInstance() {
    if (!windowsManager.instance) {
      windowsManager.instance = new windowsManager()
    }
    return windowsManager.instance
  }
  addWindow(name, window) {
    this.windows[name] = window
  }
  createWindow(name, options) {
    // 判断窗口是否存在
    for (let i in this.windows) {
      if (i === name) {
        console.log(this.windows[i])
        this.windows[i].focus()
        return
      }
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
        contextIsolation: false
      },
      ...options
    })
    this.addWindow(name, newWindow)
    newWindow.once('ready-to-show', () => {
      newWindow.show()
    })
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
  }
}

export default windowsManager
