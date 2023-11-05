import { ReducersMapObject } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTests from '@/shared/config/i18n/i18nForTest'
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider'
import '@/app/styles/index.scss'

export interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  themeProvider?: Theme
}
interface IProps {
  children: ReactNode
  options?: componentRenderOptions
}
export const TestProvider = (props: IProps) => {
  const { children, options = {} } = props
  const {
    route = '/',
    initialState,
    asyncReducers,
    themeProvider = Theme.LIGHT,
  } = options
  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>
          <ThemeProvider initialTheme={themeProvider}>
            <div className={`app ${themeProvider}`}>{children}</div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}

export function componentRender(
  component: ReactNode,
  options: componentRenderOptions = {}
) {
  return render(<TestProvider options={options}>{component}</TestProvider>)
}
