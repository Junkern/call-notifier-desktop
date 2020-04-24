import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux'

export type stateType = {
  server: {
    serverRunning: boolean
    lastPing: Date
  }
}

export type GetState = () => stateType

export type Dispatch = ReduxDispatch<Action<string>>

export type Store = ReduxStore<stateType, Action<string>>
