import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/Home'
import { test, startServer, stopServer } from '../actions/server'
import { stateType } from '../reducers/types'

function mapStateToProps(state: stateType) {
  return {
    serverRunning: state.server.serverRunning,
    lastPing: state.server.lastPing
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      test,
      startServer,
      stopServer
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
