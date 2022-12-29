import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className, }: LoginFormProps) => {
  const { t } = useTranslation()
  return <div className={classNames(cls.loginform, {}, [className])}>
    <Input type="text" className={cls.input}
      placeholder={t("Введите имя")}
      autoFocus
    />
    <Input type="text" className={cls.input}
      placeholder={t("Введите пароль")}
  
    />
    <Button className={cls.loginBtn}>{t("Войти")}</Button>
  </div>
}
