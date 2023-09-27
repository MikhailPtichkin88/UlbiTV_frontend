import { ErrorBoundary } from '@/app/providers/ErrorBoundary/index'
import { ThemeProvider } from '@/app/providers/ThemeProvider/index'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@/app/styles/index.scss'
import { App } from './app/App'

import './shared/config/i18n/i18n'
import { StoreProvider } from '@/app/providers/StoreProvider'

const container = document.getElementById('root')
if (!container) {
  throw new Error('Корневой элемент не найден')
}
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
)
