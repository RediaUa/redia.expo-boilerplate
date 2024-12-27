import { Platform } from 'react-native'
import Constants, { ExecutionEnvironment } from 'expo-constants'

export const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient
export const isIos = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'
