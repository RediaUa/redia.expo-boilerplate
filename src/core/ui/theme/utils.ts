import { Appearance } from 'react-native'

import { ThemeMode } from './types'

export const getCurrentThemeMode = (): ThemeMode => Appearance.getColorScheme() ?? 'light'
