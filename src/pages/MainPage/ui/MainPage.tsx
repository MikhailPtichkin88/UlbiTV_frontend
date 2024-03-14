import { memo } from 'react'

import GitHubIcon from '@/shared/assets/icons/github-octocat.svg'
import StorybookIcon from '@/shared/assets/icons/storybook-icon.svg'
import { Page } from '@/widgets/Page/Page'
import { useTranslation } from 'react-i18next'
import cls from './MainPage.module.scss'
const MainPage = memo(() => {
  const { t } = useTranslation('main')

  return (
    <Page data-testid="MainPage">
      <div className={cls.mainDescription}>
        <h2>{t('Полезные статьи на тему IT и не только')}</h2>
        <p>{t(`Описание`)}</p>
        <h3>{t('Учетные записи для тестирования функционала')}</h3>
        <ul>
          <li>
            <strong>{t('Администратор')}</strong>{' '}
            {t('(функционал в разработке) логин: admin, пароль: 123')}
          </li>
          <li>
            <strong>{t('Пользователь')}</strong> {t('логин: user, пароль: 123')}
          </li>
        </ul>

        <h3>{t('Особенности проекта')}</h3>
        <ul>
          <li>
            {' '}
            <strong>{t('Стэк')}</strong>{' '}
            {t('React, Redux Toolkit, Typescript, RTK Query')}
          </li>
          <li>
            <strong>{t('Сборщик')}</strong>{' '}
            {t('Webpack, конфиг написан вручную')}
          </li>
          <li>
            <strong>{t('Архитектура')}</strong> {t('Feature sliced design')}
          </li>
          <li>
            <span className={cls.testsTitle}>{t('Тесты')}</span>
            <span className={cls.testItem}>
              {t('Обычные unit тесты на Jest')}
            </span>
            <span className={cls.testItem}>
              {t('Тесты на компоненты с React Testing Library')}
            </span>
            <span className={cls.testItem}>
              {t('Скриншотное тестирование с Loki')}
            </span>
            <span className={cls.testItem}>
              {t('E2E тестирование с Cypress')}
            </span>
          </li>
        </ul>

        <div className={cls.links}>
          <a href="https://mikhailptichkin88.github.io/UlbiTV_frontend">
            <span>{t('Ссылка на сторибук основных компонентов')}</span>
            <StorybookIcon width={50} height={50} />
          </a>
          <a href="https://github.com/MikhailPtichkin88/UlbiTV_frontend">
            <span>{t('Ссылка на Git репозиторий')}</span>
            <GitHubIcon width={50} height={50} />
          </a>
        </div>
      </div>
    </Page>
  )
})
export default MainPage
