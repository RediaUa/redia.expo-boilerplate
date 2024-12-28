import { combineReducers } from '@reduxjs/toolkit'

import authReducer from './auth'
import i18nReducer from './i18n'
import themeReducer from './theme'

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  i18n: i18nReducer,
})

export default rootReducer
