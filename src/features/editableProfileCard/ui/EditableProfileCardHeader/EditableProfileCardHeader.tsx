import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Text } from '@/shared/ui/Text/Text'

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { profileActions } from '../../model/slice/profileSlice'
import { useCallback } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { HStack } from '@/shared/ui/Stack/HStack/HStack'
import { getUserAuthData } from '../../../../entities/User'

interface ProfilePageHeaderProps {
  className?: string
}

export const EditableProfileCardHeader = ({
  className,
}: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile')

  const readonly = useSelector(getProfileReadonly)
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])
  return (
    <HStack justify="between" max className={classNames('', {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <>
          {readonly ? (
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onEdit}
              data-testid={'EditableProfileCardHeader.EditButton'}
            >
              {t('Редактировать')}
            </Button>
          ) : (
            <HStack gap="8">
              <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onSave}
                data-testid={'EditableProfileCardHeader.SaveButton'}
              >
                {t('Сохранить')}
              </Button>
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                onClick={onCancelEdit}
                data-testid={'EditableProfileCardHeader.CancelButton'}
              >
                {t('Отменить')}
              </Button>
            </HStack>
          )}
        </>
      )}
    </HStack>
  )
}
