import { FC, memo, useEffect, useState } from 'react'
import { Switch, SwitchProps } from 'react-native'
import { useTheme } from 'styled-components/native'

interface ToggleProps extends SwitchProps {
  isOn?: boolean
  onValueChange: (value: boolean) => Promise<void>
}

const Toggle: FC<ToggleProps> = ({ isOn, onValueChange, ...rest }) => {
  const theme = useTheme()
  // use local state to make an immediate update on user's touch
  const [isOnLocal, setIsOnLocal] = useState(() => isOn)

  useEffect(() => {
    if (isOn !== isOnLocal) {
      // sync states
      setIsOnLocal(isOn)
    }
  }, [isOn, isOnLocal])

  const handleOnValueChange = (newValue: boolean) => {
    setIsOnLocal(newValue)
    onValueChange?.(newValue).catch(() => {
      // rollback if it fails
      setIsOnLocal(isOn)
    })
  }

  return (
    <Switch
      value={isOnLocal}
      onValueChange={handleOnValueChange}
      trackColor={{
        false: theme.colors.toggles.off.background,
        true: theme.colors.toggles.on.background,
      }}
      thumbColor={isOnLocal ? theme.colors.toggles.on.thumb : theme.colors.toggles.off.thumb}
      ios_backgroundColor={theme.colors.toggles.off.background}
      {...rest}
    />
  )
}

export default memo(Toggle)
