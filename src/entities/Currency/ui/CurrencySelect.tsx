import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Currency } from '../model/types/currency'
import { ListBox } from 'shared/ui/ListBox/ListBox'

interface CurrencySelectorProps {
  className?: string
  value?: Currency
  readonly?: boolean
  onChange?: (value: Currency) => void
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectorProps) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency)
      },
      [onChange]
    )

    return (
      <ListBox
        className={classNames('', {}, [className])}
        defaultValue={t('Укажите валюту')}
        label={t('Укажите валюту')}
        items={options}
        value={value}
        readonly={readonly}
        onChange={onChangeHandler}
        direction="top"
      />
    )
  }
)
