import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList }
  from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchProfileData,
  getProfileForm,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer }  from '../../../entities/Profile/index'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const reducers:ReducersList = {
  profile: profileReducer
}

interface profilePageProps {
     className?: string
}

const ProfilePage = memo(({className, }:profilePageProps) => {
  const {t} = useTranslation()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchProfileData())
  },[dispatch])

  const onChangeFirstName = useCallback((value:string) => {
    dispatch(profileActions.updateProfile({first:value || ""}))
  }, [dispatch])

  const onChangeLastName = useCallback((value:string) => {
    dispatch(profileActions.updateProfile({lastname:value || ""}))
  }, [dispatch])

  const onChangeAge = useCallback((value:string | number) => {
    if(Number(value)){
      dispatch(profileActions.updateProfile({age:Number(value) || 0}))
    }
  }, [dispatch])

  const onChangeCity = useCallback((value:string) => {
    dispatch(profileActions.updateProfile({city:value || ""}))
  }, [dispatch])

  const onChangeUsername = useCallback((value:string) => {
    dispatch(profileActions.updateProfile({username:value || ""}))
  }, [dispatch])

  const onChangeAvatar = useCallback((value:string) => {
    dispatch(profileActions.updateProfile({avatar:value || ""}))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency:Currency) => {
    dispatch(profileActions.updateProfile({currency:currency}))
  }, [dispatch])

  const onChangeCountry = useCallback((country:Country) => {
    dispatch(profileActions.updateProfile({country:country}))
  }, [dispatch])

  return(
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames("", {}, [className])}>
        <ProfilePageHeader/>
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
      </div>
    </DynamicModuleLoader>
  )
})
export default ProfilePage