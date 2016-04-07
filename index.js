'use strict'
var React = require('react-native')

var {
  Component,
  NetInfo,
  StyleSheet,
  Text,
  View
} = React

const RequiresConnection = (WhenOnline, whenOffline) => class RequiresConnection extends Component {
  componentWillMount () {
    this.setState({ isConnected: true })

    let connect = (isConnected) => this.setState({ isConnected })

    NetInfo.isConnected.fetch().done(connect)
    NetInfo.isConnected.addEventListener('change', connect)
  }

  render () {
    if (this.state.isConnected) {
      return <WhenOnline {...this.props} />
    } else if (typeof whenOffline === 'function') {
      return whenOffline()
    } else {
      const message = whenOffline || 'We\'re sorry, there seems to be a problem with your internet connection. The application will resume as soon as it is able to reconnect to the internet.'

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
