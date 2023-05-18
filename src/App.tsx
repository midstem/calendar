import { Paper, ThemeProvider } from '@mui/material'

import Calendar from './features/Calendar'
import theme from './theme/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          borderRadius: '5px',
          px: 0,
          py: 1.25
        }}
      >
        <Calendar selectedEvent="98f6c30c-a95e-4794-b2ee-5c0143cbe0b5" />
      </Paper>
    </ThemeProvider>
  )
}

export default App
