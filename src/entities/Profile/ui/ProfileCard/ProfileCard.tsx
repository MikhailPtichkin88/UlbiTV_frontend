import { getProfileData } from 'entities/Profile/model/selectors/getProfileData'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import {Text} from "shared/ui/Text/Text"
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'


interface ProfileCardProps {
     className?: string
    
}

export const ProfileCard = ({className, }:ProfileCardProps) => {
    
  const {t} = useTranslation('profile')
  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)

  return (
    <div className={classNames(cls.profilecard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')}/>
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>{t('Редактировать')}</Button>
      </div>

      <div className={cls.data}>
        <Input value={data?.first} placeholder='Ваше имя' className={cls.input}/>
        <Input value={data?.lastname} placeholder='Ваше фамилия' className={cls.input}/>
      </div>
    </div>
  )
}
