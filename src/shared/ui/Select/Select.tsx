import { ChangeEvent, memo, useMemo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOptions {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOptions[]
  value?: string
  readonly?: boolean
  onChange?: (value: string) => void
}

export const Select = memo(
  ({ className, label, options, value, onChange, readonly }: SelectProps) => {
    const optionsList = useMemo(() => {
      return options?.map((opt) => (
        <option key={opt.value} value={opt.value} className={cls.option}>
          {opt.content}
        </option>
      ))
    }, [options])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value)
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
)
