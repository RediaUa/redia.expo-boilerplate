import { Theme } from './types'

const commonTheme = {
  fontSize: {
    x1: 4,
    x2: 8,
    x3: 12,
    x4: 16,
  },
}

export const lightTheme: Theme = {
  colors: {
    background: '#ffffff',
    text: '#000000',
    error: '#e53935',
    primary: '#7c3aed',
    primaryFocused: '#310099',
  },
  ...commonTheme,
}

export const darkTheme: Theme = {
  colors: {
    background: '#000000',
    text: '#ffffff',
    error: '#e53935',
    primary: '#ff80cb',
    primaryFocused: '#ff4caf',
  },
  ...commonTheme,
}
