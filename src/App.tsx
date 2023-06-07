import { ThemeProvider } from '@mui/material'

import Calendar from './features/Calendar'
import theme from './theme/theme'
import './index.css'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="paper">
        <Calendar selectedEvent="98f6c30c-a95e-4794-b2ee-5c0143cbe0b5" />
      </div>
    </ThemeProvider>
  )
}

export default App
