import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Country } from '../model/types/country'
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox'

interface CountrySelectorProps {
  className?: string
  value?: Country
  readonly?: boolean
  onChange?: (value: Country) => void
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
]

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectorProps) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country)
      },
      [onChange]
    )

    return (
      <ListBox
        className={classNames('', {}, [className])}
        defaultValue={t('Укажите страну')}
        label={t('Укажите страну')}
        items={options}
        value={value}
        readonly={readonly}
        onChange={onChangeHandler}
      />
    )
  }
)
