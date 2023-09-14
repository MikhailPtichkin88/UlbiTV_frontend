import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

interface AdminPanelPageProps {
  className?: string
}

const AdminPanelPage = ({ className }: AdminPanelPageProps) => {
  const { t } = useTranslation()

  return (
    <Page className={classNames('', {}, [className])}>{t('админ_панель')}</Page>
  )
}
export default AdminPanelPage
