import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className, }: LoginFormProps) => {
  const { t } = useTranslation()
  return <div className={classNames(cls.loginform, {}, [className])}>
    <input type="text" />
    <input type="text" />
    <Button>{t("Войти")}</Button>
  </div>
}
