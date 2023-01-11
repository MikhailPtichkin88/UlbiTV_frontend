import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from "shared/ui/Text/Text"
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

import { DynamicModuleLoader, ReducersList }
  from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface LoginFormProps {
  className?: string
}

const initialReducers:ReducersList={
  loginForm: loginReducer
}

const LoginForm = memo(({ className, }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const {username, password, isLoading, error} = useSelector(getLoginState)


  const onChangeUserName = useCallback((value:string)=>{
    dispatch(loginActions.setUserName(value))
  },[dispatch])

  const onChangePassword = useCallback((value:string)=>{
    dispatch(loginActions.setPassword(value))
  },[dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({username,password}))
  },[username, password, dispatch])

  return (
    <DynamicModuleLoader  reducers={initialReducers}>
      <div className={classNames(cls.loginform, {}, [className])}>
        <Text title={t('Форма авторизации')}/>
        {error && <Text text={t("Вы ввели неправильный логин или пароль")} theme={TextTheme.ERROR}/>}
        <Input type="text" 
          className={cls.input}
          placeholder={t("Введите имя")}
          autoFocus
          onChange={onChangeUserName}
          value={username}
        />
        <Input type="text" 
          className={cls.input}
          placeholder={t("Введите пароль")}
          onChange={onChangePassword}
          value={password}
        />
        <Button theme={ButtonTheme.OUTLINE}
          className={cls.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >{t("Войти")}</Button>
      </div>
    </DynamicModuleLoader>)
})
export default LoginForm