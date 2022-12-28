import { ChangeEvent, FC, InputHTMLAttributes, memo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HtmlInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  type?: string
  placeholder?: string
}

export const Input: FC<InputProps> = memo(({
  className,
  value,
  onChange,
  type = "text",
  placeholder,
  ...otherProps
}: InputProps) => {

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.currentTarget.value)
  }
  const [isFocused, setIsFocused] = useState(false)

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  return <div
    className={classNames(cls.inputWrapper, {}, [className])}>

    {placeholder && (
      <div className={cls.placeholder}>
        {`${placeholder}>`}
      </div>
    )}
    <div className={cls.caretWrapper}>
      <input
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        onFocus={onFocus}
        onBlur={onBlur}
        {...otherProps}
      />
      
      {isFocused && (
        <span className={cls.caret} />
      )}

    </div>

  </div>
})
