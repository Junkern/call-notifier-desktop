import * as ip from 'ip'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import CheckIcon from '@material-ui/icons/Check'
import styles from './Home.css'

type Props = {
  test: (message: string) => void
  startServer: () => void
  stopServer: () => void
  serverRunning: boolean
  lastPing?: Date
}

// eslint-disable-next-line
export default function Home(props: Props) {
  const { test, startServer, stopServer, serverRunning, lastPing } = props

  const handleClick = () => {
    // eslint-disable-next-line
    test('hello')
  }

  const [buttonText, setButtonText] = useState('Start Server')

  const handleStartServer = () => {
    if (serverRunning) {
      stopServer()
      setButtonText('Start Server')
    } else {
      startServer()
      setButtonText('Stop Server')
    }
  }

  const lastPingText = `Running (Last Ping at ${lastPing?.getHours()}:${lastPing?.getMinutes()})`

  return (
    <div className={styles.container} data-tid="container">
      <h2>Call-Notifier</h2>
      <Button onClick={handleClick}>send test</Button>
      <div>
        <Button onClick={handleStartServer}>{buttonText}</Button>
        {serverRunning ? (
          <span>
            <CheckIcon />
            {lastPingText}
          </span>
        ) : (
          ''
        )}
      </div>
      <div>
        Open the app and connect to:
        {ip.address()}
      </div>
    </div>
  )
}
