import {
  PING,
  ActionTypes,
  SERVER_RUNNING,
  SERVER_STOPPED
} from '../store/types'

const initialState = {
  serverRunning: false,
  lastPing: null
}

export default function server(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case PING:
      return { ...state, lastPing: action.time }
    case SERVER_RUNNING:
      return { ...state, serverRunning: true }
    case SERVER_STOPPED:
      return { ...state, serverRunning: false, lastPing: null }
    default:
      return state
  }
}
