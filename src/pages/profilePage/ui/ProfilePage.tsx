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
        />
      </div>
    </DynamicModuleLoader>
  )
})
export default ProfilePage