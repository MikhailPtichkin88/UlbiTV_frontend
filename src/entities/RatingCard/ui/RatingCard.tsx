import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './RatingCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/Card'
import { Text } from '@/shared/ui/Text'
import { HStack, VStack } from '@/shared/ui/Stack'
import { StarRating } from '@/shared/ui/StarRating'
import { useCallback, useState } from 'react'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from '@/shared/ui/Drawer'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  rate?: number
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
  rate = 0,
}: RatingCardProps) => {
  const { t } = useTranslation()

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [starsCount, setStarsCount] = useState(rate)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount)
      if (!hasFeedback) {
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
        data-testid={'RatingCard.Input'}
        value={feedback}
        onChange={onInputChange}
        placeholder={t('Ваш отзыв')}
      />
    </>
  )

  return (
    <Card className={classNames(cls.ratingcard, {}, [className])}>
      <VStack align="center" gap="8">
        <Text title={starsCount ? t('Спасибо за оценку!') : title} />
        <StarRating
          size={40}
          onSelect={onSelectStars}
          selectedStars={starsCount}
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isOpenModal} lazy>
          <VStack gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button
                data-testid={'RatingCard.Close'}
                theme={ButtonTheme.OUTLINE_RED}
                onClick={cancelHandler}
              >
                {t('Закрыть')}
              </Button>
              <Button data-testid={'RatingCard.Send'} onClick={acceptHandler}>
                {t('Отправить')}
              </Button>
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
