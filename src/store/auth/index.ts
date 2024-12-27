import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '@core/types/user'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
