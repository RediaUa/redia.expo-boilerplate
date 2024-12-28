import { createSlice } from '@reduxjs/toolkit'
import { SupportedLanguages } from '@core/i18n/constants'
import { getCurrentLanguage } from '@core/i18n/utils'
import { PURGE } from 'redux-persist'

interface LanguageState {
  language: SupportedLanguages
}

const initialState: LanguageState = {
  language: getCurrentLanguage(),
}

const languageSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState
    })
  },
})

export const { setLanguage } = languageSlice.actions

export default languageSlice.reducer
