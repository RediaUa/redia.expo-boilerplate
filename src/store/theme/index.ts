import { createSlice } from '@reduxjs/toolkit'
import { ThemeMode } from '@core/ui/theme/types'
import { getCurrentThemeMode } from '@core/ui/theme/utils'
import { PURGE } from 'redux-persist'

interface State {
  mode: ThemeMode
}
const initialState: State = {
  mode: getCurrentThemeMode(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action) => {
      state.mode = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState
    })
  },
})

export const { setThemeMode } = themeSlice.actions

export default themeSlice.reducer
