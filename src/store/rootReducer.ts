import { combineReducers } from '@reduxjs/toolkit'

import authReducer from './auth'
import themeReducer from './theme'

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
})

export default rootReducer
