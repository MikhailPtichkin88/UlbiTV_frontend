import { EditableProfileCard } from '@/features/editableProfileCard'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack'
import { Page } from '@/widgets/Page/Page'
interface profilePageProps {
  className?: string
}

const ProfilePage = memo(({ className }: profilePageProps) => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()

  // if (!id) {
  //   return <Text theme={TextTheme.ERROR} text={t('Профиль не найден')} />
  // }

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  )
})
export default ProfilePage
