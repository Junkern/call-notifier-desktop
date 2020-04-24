export const START_SERVER = 'START_SERVER'
export const SERVER_RUNNING = 'SERVER_RUNNING'
export const SERVER_STOPPED = 'SERVER_STOPPED'
export const PING = 'PING'

export interface PingAction {
  type: typeof PING
  time: Date
}

export interface ServerRunningAction {
  type: typeof SERVER_RUNNING
}

export interface ServerStoppedAction {
  type: typeof SERVER_STOPPED
}

export type ActionTypes = PingAction | ServerRunningAction | ServerStoppedAction
