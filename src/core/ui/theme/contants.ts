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
    error: '#c62828',
    primary: '#7c3aed',
    primaryFocused: '#310099',
    primaryDisabled: '#c4b5fd',
    toggles: {
      on: {
        background: '#7c3aed',
        thumb: '#310099',
      },
      off: {
        background: '#c4b5fd',
        thumb: '#7c3aed',
      },
    },
    buttons: {
      text: '#f8f8ff',
    },
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
    primaryDisabled: '#803D60',
    toggles: {
      on: {
        background: '#ff80cb',
        thumb: '#ffffff',
      },
      off: {
        background: '#ffffff',
        thumb: '#ff80cb',
      },
    },
    buttons: {
      text: '#ffffff',
    },
  },
  ...commonTheme,
}
