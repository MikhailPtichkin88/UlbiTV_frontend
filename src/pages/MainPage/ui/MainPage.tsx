import { BugButton } from 'app/providers/ErrorBoundary'
import { memo, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

const MainPage = memo(() => {
  const { t } = useTranslation('main')
  const [value, setValue] = useState('')
  return (
    <div style={{ padding: '30px' }}>
      <BugButton />
      <Input value={value} onChange={setValue} placeholder={'Введите текст'} />
      <div>{t('Главная страница')}</div>
    </div>
  )
})
export default MainPage
