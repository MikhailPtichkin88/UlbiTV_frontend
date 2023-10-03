import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './RatingCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/Card/Card'
import { Text } from '@/shared/ui/Text/Text'
import { HStack, VStack } from '@/shared/ui/Stack'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { useCallback, useState } from 'react'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = ({
  className,
  title,
  feedbackTitle,
  hasFeedback,
  onCancel,
  onAccept,
}: RatingCardProps) => {
  const { t } = useTranslation()

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [starsCount, setStarsCount] = useState(0)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount)
      if (hasFeedback) {
        setIsOpenModal(true)
      } else {
        onAccept?.(selectedStarsCount)
      }
    },
    [hasFeedback, onAccept]
  )

  const acceptHandler = useCallback(() => {
    setIsOpenModal(false)
    onAccept?.(starsCount, feedback)
  }, [feedback, onAccept, starsCount])

  const cancelHandler = useCallback(() => {
    setIsOpenModal(false)
    onCancel?.(starsCount)
  }, [onCancel, starsCount])

  const onInputChange = (e: string) => {
    setFeedback(e)
  }

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={onInputChange}
        placeholder={t('Ваш отзыв')}
      />
    </>
  )

  return (
    <Card className={classNames(cls.ratingcard, {}, [className])}>
      <VStack align="center" gap="8">
        <Text title={title} />
        <StarRating size={40} onSelect={onSelectStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isOpenModal} lazy>
          <VStack gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button theme={ButtonTheme.OUTLINE_RED} onClick={cancelHandler}>
                {t('Закрыть')}
              </Button>
              <Button onClick={acceptHandler}>{t('Отправить')}</Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isOpenModal} lazy onClose={cancelHandler}>
          <VStack gap="32">
            {modalContent}
            <Button onClick={acceptHandler} size={ButtonSize.L} fullWidth>
              {t('Отправить')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  )
}
