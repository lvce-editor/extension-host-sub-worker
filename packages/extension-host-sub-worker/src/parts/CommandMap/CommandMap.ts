import * as LoadFile from '../LoadFile/LoadFile.ts'
import * as WebView from '../WebView/WebView.ts'

export const commandMap = {
  'LoadFile.loadFile': LoadFile.loadFile,
  '_WebView.create': WebView.create,
  '_WebView.setPort': WebView.setPort,
}