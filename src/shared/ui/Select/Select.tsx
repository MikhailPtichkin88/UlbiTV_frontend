import { ChangeEvent, useMemo } from 'react'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOptions<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: SelectOptions<T>[]
  value?: T
  readonly?: boolean
  onChange?: (value: T) => void
}

export const Select = <T extends string>({
  className,
  label,
  options,
  value,
  onChange,
  readonly,
}: SelectProps<T>) => {
  const optionsList = useMemo(() => {
    return options?.map((opt) => (
      <option key={opt.value} value={opt.value} className={cls.option}>
        {opt.content}
      </option>
    ))
  }, [options])

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T)
  }
  const mods: Mods = {}

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}

      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  )
}
