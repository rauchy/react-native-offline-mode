'use strict'
import React, { Component } from 'react'
import {
  NetInfo,
  StyleSheet,
  Text,
  View
} from 'react-native'

const RequiresConnection = (WhenOnline, WhenOffline) => class RequiresConnection extends Component {
  constructor (props) {
    super(props)
    this.state = { isConnected: true }
  }

  componentDidMount () {
    let connect = ({ type }) => this.setState({ isConnected: type !== 'none' })

    NetInfo.getConnectionInfo().done((connectionInfo) => {
      connect({ type: connectionInfo.type })
      NetInfo.addEventListener('connectionChange', connect)
    })
  }
  
  componentWillUnmount () {
      NetInfo.removeEventListener('connectionChange')
  }

  render () {
    if (this.state.isConnected) {
      return <WhenOnline {...this.props} />
    } else if (typeof WhenOffline === 'function') {
      return <WhenOffline {...this.props} />
    } else {
      const message = WhenOffline || "We're sorry, there seems to be a problem with your internet connection. The application will resume as soon as it is able to reconnect to the internet."

      return <View style={styles.container}>
        <Text style={styles.connectionProblemMessage}>
          {message}
        </Text>
      </View>
    }
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  connectionProblemMessage: {
    padding: 24,
    textAlign: 'center'
  }
})

module.exports = RequiresConnection
