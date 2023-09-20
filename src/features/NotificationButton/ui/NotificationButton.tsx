import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotificationButton.module.scss'

import { NotificationList } from 'entities/Notification'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon'
import NotificationsIcon from 'shared/assets/icons/notification-20-20.svg'
import { Popover } from 'shared/ui/Popups'

interface NotificationButtonProps {
  triggerClassName?: string
}

export const NotificationButton = ({
  triggerClassName,
}: NotificationButtonProps) => {
  return (
    <Popover
      className={triggerClassName}
      trigger={
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={NotificationsIcon} inverted />
        </Button>
      }
    >
      <NotificationList
        className={classNames(cls.notificationbutton, {}, [cls.notifications])}
      />
    </Popover>
  )
}
