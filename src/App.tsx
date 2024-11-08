import {createTheme, ThemeProvider, CssBaseline} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode:'dark'
  }
})
const App = () => {


  return (
<ThemeProvider theme={darkTheme}>
  <CssBaselIne/>
  <h1>
    Dark Mode
  </h1>
</ThemeProvider>
  )
}

export default App
