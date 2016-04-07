# react-native-offline-mode
A higher-order component for React Native which will conditionally show a component OR something else depending on internet connection availability.

[![ScreenShot](https://raw.githubusercontent.com/rauchy/react-native-offline-mode/master/example.gif)]

Install
-------

Make sure that you are in your React Native project directory and run:

```npm install react-native-offline-mode --save```

## Usage

Import `RequiresConnection` as a JavaScript module:

```js
import RequiresConnection from 'react-native-offline-mode';
```

Then simply wrap whichever component you want to be connection-aware with a call to `RequiresConnection`.

### Showing a default "no connectivity" message

For example, if you want the entire app to go on hold with a "no connectivity" message, simply wrap your main component:

```js
module.exports = RequiresConnection(Main)
```

### Specifying a custom message

If you want to display a different message, simply pass it as a second parameter to `RequiresConnection`:

```js
module.exports = RequiresConnection(Main, 'no internetz for you :(')
```

### Using a custom offline component

Instead of just showing a message, you can have your app deliver different functionality when offline. To accomplish this, simply pass in the offline component as a second parameter:

```js
module.exports = RequiresConnection(OnlineMain, OfflineMain)
```

## Contributing

1. Fork it ( https://github.com/rauchy/react-native-offline-mode/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
