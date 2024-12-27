import { isExpoGo } from '@core/constants'

class MockedMMKV {
  private readonly store: Map<string, unknown>

  constructor() {
    this.store = new Map()
  }

  getString(key: string) {
    return this.store.get(key) || null
  }

  set(key: string, value: unknown) {
    this.store.set(key, value)
  }

  delete(key: string) {
    this.store.delete(key)
  }
}

const MMKVStorage = isExpoGo ? MockedMMKV : require('react-native-mmkv').MMKV

export default MMKVStorage
