import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TextInput } from 'react-native'
import { useRouter } from 'expo-router'
import Button from '@core/ui/components/buttons/Button'
import { ScreenContainer } from '@core/ui/components/containers'
import Input from '@core/ui/components/inputs/Input'
import { login } from '@store/auth'
import { useAppDispatch } from '@store/hooks'

type FormData = {
  name: string
  password: string
}

type FormErrors = Record<keyof FormData, string>

export const DEFAULT_CREDENTIALS: FormData = {
  name: 'Guest',
  password: 'Guest',
}

const SignInScreen = () => {
  const nameInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const router = useRouter()
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const [formData, setFormData] = useState<Partial<FormData> | null>(null)
  const [errors, setErrors] = useState<Partial<FormErrors> | null>(null)

  useEffect(() => {
    setErrors(null)
  }, [formData])

  const hasErrors = !!errors && Object.values(errors).some(Boolean)

  const setName = (name: string) => {
    setFormData((data) => ({ ...data, name: name.trim() }))
  }

  const setPassword = (password: string) => {
    setFormData((data) => ({ ...data, password }))
  }

  const handleBtnPress = () => {
    if (!formData?.name) {
      setErrors({ name: t('auth.errors.empty.username') })
      nameInputRef.current?.focus()
      return
    }

    if (!formData?.password) {
      setErrors({ password: t('auth.errors.empty.password') })
      passwordInputRef.current?.focus()
      return
    }

    const isValidCredentials = Object.entries(DEFAULT_CREDENTIALS).every(
      ([key, value]) => formData[key as keyof FormData] === value,
    )

    if (!isValidCredentials) {
      setErrors({ password: t('auth.errors.credentials') })
      return
    }

    // success
    dispatch(login({ name: formData.name }))
    router.navigate('/home')
  }

  return (
    <ScreenContainer>
      <Input
        width={200}
        ref={nameInputRef}
        error={errors?.name}
        label={t('auth.labels.username')}
        value={formData?.name ?? ''}
        secure={false}
        testID='username-input'
        onChangeText={setName}
      />
      <Input
        width={200}
        ref={passwordInputRef}
        error={errors?.password}
        label={t('auth.labels.password')}
        value={formData?.password ?? ''}
        secure
        testID='password-input'
        onChangeText={setPassword}
      />
      <Button
        testID='submit-btn'
        disabled={hasErrors}
        title={t('auth.actions.goToApp')}
        onPress={handleBtnPress}
      />
    </ScreenContainer>
  )
}

export default SignInScreen
