import { ColorSchemeName } from 'react-native'

export type Theme = {
  colors: ColorMap
  fontSize: FontSizeMap
}

type ColorMap = {
  background: string
  text: string
  error: string
  primary: string
  primaryFocused: string
  primaryDisabled: string
  toggles: {
    on: {
      background: string
      thumb: string
    }
    off: {
      background: string
      thumb: string
    }
  }
  buttons: {
    text: string
  }
}

type FontSizeMap = {
  x1: number
  x2: number
  x3: number
  x4: number
}

export type ThemeMode = NonNullable<ColorSchemeName>
