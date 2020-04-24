import { ipcRenderer } from 'electron'
import {
  PING,
  PingAction,
  ServerRunningAction,
  SERVER_RUNNING,
  ServerStoppedAction,
  SERVER_STOPPED
} from '../store/types'

export function test(message: string) {
  return () => {
    // eslint-disable-next-line
    new window.Notification(message)
  }
}

export function sendPing(): PingAction {
  return {
    type: PING,
    time: new Date()
  }
}

export function serverIsRunning(): ServerRunningAction {
  return {
    type: SERVER_RUNNING
  }
}
export function serverStopped(): ServerStoppedAction {
  return {
    type: SERVER_STOPPED
  }
}

export function startServer() {
  return async (dispatch: Function) => {
    await ipcRenderer.invoke('startServer', 5678)
    dispatch(serverIsRunning())
  }
}

export function stopServer() {
  return async (dispatch: Function) => {
    await ipcRenderer.invoke('stopServer')
    dispatch(serverStopped())
  }
}
