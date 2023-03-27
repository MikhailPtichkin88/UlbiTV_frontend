import { ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HtmlInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  type?: string
  placeholder?: string
  autoFocus?: boolean
  readonly?:boolean
}

export const Input: FC<InputProps> = memo(({
  className,
  value = '',
  onChange,
  type = "text",
  placeholder,
  autoFocus,
  readonly,
  ...otherProps
}: InputProps) => {

  const [isFocused, setIsFocused] = useState(false)
  const [caretPositions, setCaretPosition] = useState(0)

  const isCaretVisible = isFocused && !readonly
  const ref = useRef<HTMLInputElement>(null)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (value?.toString().length > e?.target?.value?.length) {
      onChange?.(e.target.value)
      setCaretPosition(e?.target?.selectionStart || 0)
      return
    }
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autoFocus])

  const mods:Mods = {
    [cls.redonly]: readonly
  }

  return <div
    className={classNames(cls.inputWrapper, mods, [className])}>

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
        onSelect={onSelect}
        ref={ref}
        readOnly={readonly}
        {...otherProps}
      />

      {isCaretVisible && (
        <span className={cls.caret}
          style={{ left: `${caretPositions * 9}px` }} />
      )}

    </div>

  </div>
})
