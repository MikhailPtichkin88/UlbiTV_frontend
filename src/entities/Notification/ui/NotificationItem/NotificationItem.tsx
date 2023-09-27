import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotificationItem.module.scss'
import { useTranslation } from 'react-i18next'
import { Notification } from '../../model/types/notifications'
import { Card, CardTheme } from '@/shared/ui/Card/Card'
import { Text } from '@/shared/ui/Text/Text'

interface NotificationItemProps {
  className?: string
  item: Notification
}

export const NotificationItem = ({
  className,
  item,
}: NotificationItemProps) => {
  const { t } = useTranslation()
  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(cls.notificationitem, {}, [className])}
    >
      <Text title={item.title} text={item.description} />
    </Card>
  )
  if (item.href) {
    return (
      <a
        className={cls.link}
        target={'_blank'}
        href={item.href}
        rel="noreferrer"
      >
        {content}
      </a>
    )
  }
  return (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(cls.notificationitem, {}, [className])}
    >
      <Text title={item.title} text={item.description} />
    </Card>
  )
}
