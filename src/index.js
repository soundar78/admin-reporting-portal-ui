import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from 'components/App'
import { ThemeProvider } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import theme from 'theme'
import GlobalStyle from 'globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </>
)
