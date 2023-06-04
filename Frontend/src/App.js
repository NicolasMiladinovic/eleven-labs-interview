import Home from './pages/Home.js'
// Mui
import { yellow } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: { main: yellow[500] }
  },
})

function App() {
  return <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
}

export default App

