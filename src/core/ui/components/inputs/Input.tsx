import React, { ForwardedRef, forwardRef, useState } from 'react'
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native'
import styled, { useTheme } from 'styled-components/native'

interface InputProps extends TextInputProps {
  value: string
  onChangeText: (text: string) => void
  error?: string | null
  label?: string
  height?: number
  width?: number
}

const DEFAULT_INPUT_HEIGHT = 48
const DEFAULT_LABEL_HEIGHT = 20

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      value,
      onChangeText,
      error,
      label,
      accessibilityLabel = 'Text input field',
      accessibilityHint = 'Input field',
      height = DEFAULT_INPUT_HEIGHT,
      onBlur,
      onFocus,
      width,
      ...rest
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const theme = useTheme()

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(false)
      onBlur?.(e)
    }

    return (
      <Container width={width}>
        {label && (
          <Label inputHeight={height} isFocused={isFocused || !!value}>
            {label}
          </Label>
        )}
        <StyledTextInput
          ref={ref}
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          selectionColor={theme.colors.primaryFocused}
          isFocused={isFocused}
          height={height}
          {...rest}
        />
        {error ? <ErrorText>{error}</ErrorText> : null}
      </Container>
    )
  },
)

const Container = styled.View<{ width?: number }>`
  margin-bottom: 16px;
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
`

const Label = styled.Text<{ isFocused: boolean; inputHeight: number }>`
  position: absolute;
  height: ${DEFAULT_LABEL_HEIGHT}px;
  top: ${({ isFocused, inputHeight }) =>
    isFocused ? -DEFAULT_LABEL_HEIGHT : `${(inputHeight - DEFAULT_LABEL_HEIGHT) / 2}`}px;
  left: 16px;
  padding: 0 4px;
  font-size: ${({ isFocused, theme }) => (isFocused ? theme.fontSize.x3 : theme.fontSize.x4)}px;
  color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.primaryFocused : theme.colors.primary};
`

const StyledTextInput = styled.TextInput<{
  isFocused: boolean
  height: number
  ref: ForwardedRef<TextInput>
}>`
  height: ${({ height }) => height}px;
  border: 1px solid
    ${({ isFocused, theme }) => (isFocused ? theme.colors.primaryFocused : theme.colors.primary)};
  border-radius: 4px;
  padding: 0 16px;
  font-size: ${({ theme }) => theme.fontSize.x4}px;
  color: ${({ theme }) => theme.colors.text};
`

const ErrorText = styled.Text`
  margin-top: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.error};
`

export default Input
