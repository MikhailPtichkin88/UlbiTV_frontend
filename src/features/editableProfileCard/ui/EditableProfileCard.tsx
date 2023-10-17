import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ProfileCard } from '@/entities/Profile'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Text, TextTheme } from '@/shared/ui/Text'

import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../model/slice/profileSlice'
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm'

import { getProfileError } from '../model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { EditableProfileCardHeader } from './EditableProfileCardHeader/EditableProfileCardHeader'
import { VStack } from '@/shared/ui/Stack'
import { ValidateProfileError } from '../model/consts/consts'

interface EditableProfileCardProps {
  className?: string
  id?: string
}
const reducers: ReducersList = {
  profile: profileReducer,
}

export const EditableProfileCard = ({
  className,
  id,
}: EditableProfileCardProps) => {
  const { t } = useTranslation()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()
  const validateErrors = useSelector(getProfileValidateErrors)

  const validateErrorTranslates = {
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
  }
  useInitialEffect(() => id && dispatch(fetchProfileData(id)))

  const onChangeFirstName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ first: value || '' }))
    },
    [dispatch]
  )

  const onChangeLastName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }))
    },
    [dispatch]
  )

  const onChangeAge = useCallback(
    (value: string | number) => {
      if (Number(value)) {
        dispatch(profileActions.updateProfile({ age: Number(value) || 0 }))
      }
    },
    [dispatch]
  )

  const onChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }))
    },
    [dispatch]
  )

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }))
    },
    [dispatch]
  )

  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }))
    },
    [dispatch]
  )

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency: currency }))
    },
    [dispatch]
  )

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country: country }))
    },
    [dispatch]
  )
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack gap="8" max className={classNames('', {}, [className])}>
        <EditableProfileCardHeader />
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              key={err}
              theme={TextTheme.ERROR}
              text={validateErrorTranslates[err]}
              data-testid="EditableProfileCard.Error"
            />
          ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </VStack>
    </DynamicModuleLoader>
  )
}
