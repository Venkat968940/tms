import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './components/Routes/Routes'
import { ThemeSetup } from './components/ThemeSetup/Theme'
import { CustomizedSnackbar } from './components/Hooks/Snackbar/Snackbar'

function App() {

  return (
   <ThemeSetup>
    <CustomizedSnackbar />
    <Router><AppRoutes/></Router>
   </ThemeSetup>
  )
}

export default App
