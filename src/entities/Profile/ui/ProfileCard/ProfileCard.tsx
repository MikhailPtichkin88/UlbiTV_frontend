
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text"
import { Profile } from "../../model/types/profile"
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?:boolean
  onChangeFirstName?: (value:string) => void
  onChangeLastName?: (value:string) => void
}

export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstName,
  onChangeLastName,
}:ProfileCardProps) => {
    
  const {t} = useTranslation('profile')

  if(isLoading){
    return (
      <div className={classNames(cls.profilecard, {[cls.loading]: true}, [className])}>
        <Loader/>
      </div>
    )
  }

  if(error){
    return (
      <div className={classNames(cls.profilecard, {}, [className, cls.error])}>
        <Text title={t("Произошла ошибка при загрузке профиля")}
          text={t("Попробуйте перезагрузить страницу")}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  return (
    <div className={classNames(cls.profilecard, {}, [className])}>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder='Ваше имя'
          className={cls.input}
          readonly={readonly}
          onChange={onChangeFirstName}/>

        <Input
          value={data?.lastname}
          placeholder='Ваше фамилия'
          className={cls.input}
          readonly={readonly}
          onChange={onChangeLastName}
        />
      </div>
    </div>
  )
}
