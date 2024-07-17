import { globalShortcut } from 'electron'
const path = require('path')
const { execFile } = require('child_process')
// eslint-disable-next-line no-unused-vars
const clipboardListener = require('clipboard-event')
import WindowsManager from './windowsManager.js'
export const initGlobalShortcut = () => {
  globalShortcut.register('Ctrl+Alt+E', async () => {
    try {
      // 获取系统中聚焦的光标位置
      const { x, y, height } = await getFocusTracker()
      const clipboardWindow = WindowsManager.getWindowInstance('clipboard')
      clipboardWindow.setPosition(x, y + height)
      clipboardWindow.show()
    } catch (error) {
      console.log('error', error)
      // 通知渲染进程
    }
  })
}
export const getFocusTracker = () => {
  return new Promise((resolve, reject) => {
    const getFocusTracker = path.join(__dirname, '../../resources/getFocusTracker.exe')
    execFile(getFocusTracker, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      }
      if (stderr) {
        reject(new Error(stderr))
      }
      const obj = {}
      stdout.split(',').forEach((item) => {
        const [key, value] = item.split('=')
        obj[key] = Number(value)
      })
      resolve({ x: obj.X || 0, y: obj.Y || 0, width: obj.Width || 0, height: obj.Height || 0 })
    })
  })
}
