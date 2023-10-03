import { BugButton } from '@/app/providers/ErrorBoundary'
import { memo, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { Dropdown } from '@/shared/ui/Popups/ui/Dropdown/Dropdown'
import { Input } from '@/shared/ui/Input/Input'
import { Page } from '@/widgets/Page/Page'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { RatingCard } from '@/entities/RatingCard'

const MainPage = memo(() => {
  const { t } = useTranslation('main')
  const [value, setValue] = useState('')
  return (
    <Page>
      <BugButton />
      <Input value={value} onChange={setValue} placeholder={'Введите текст'} />
      <div>{t('Главная страница')}</div>
      <RatingCard
        title={'Оставьте отзыв'}
        feedbackTitle={'как вам статья?'}
        hasFeedback
      />
    </Page>
  )
})
export default MainPage
