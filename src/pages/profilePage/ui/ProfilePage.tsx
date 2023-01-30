import { profileReducer } from '../../../entities/Profile/index'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import {classNames} from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } 
  from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import cls from './profilePage.module.scss'


const reducers:ReducersList = {
  profile: profileReducer
}

interface profilePageProps {
     className?: string
    
}

const ProfilePage = memo(({className, }:profilePageProps) => {
  const {t} = useTranslation()
    
  return(
 
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames("", {}, [className])}> {t("PROFILE_PAGE")}</div>
    </DynamicModuleLoader>
     

  ) 
})
export default ProfilePage