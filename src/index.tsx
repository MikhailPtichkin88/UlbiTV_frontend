import { ErrorBoundary } from 'app/providers/ErrorBoundary/index'
import { ThemeProvider } from 'app/providers/ThemeProvider/index'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'app/styles/index.scss'
import { App } from './app/App'

import './shared/config/i18n/i18n'
import { StoreProvider } from 'app/providers/StoreProvider'

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
