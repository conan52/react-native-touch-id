
import {
  Platform
} from 'react-native'

module.exports = Platform.OS === 'android' ? require('./TouchID.android') : require('./TouchID.ios').default
