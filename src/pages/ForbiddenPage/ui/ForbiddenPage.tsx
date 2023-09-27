import { classNames } from '@/shared/lib/classNames/classNames'
// import cls from './ForbiddenPage.module.scss'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'

interface ForbiddenPageProps {
  className?: string
}

const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
  const { t } = useTranslation()

  return (
    <Page className={classNames('', {}, [className])}>{t('нет_прав')}</Page>
  )
}
export default ForbiddenPage
