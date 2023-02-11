import { useState } from 'react'
import './App.css'
import FormWithoutUseChecker from './component/FormWithoutUseChecker'
import theme from './theme'
import {
  ThemeProvider,
  CssBaseline
} from "@mui/material";
import FormUseChecker from './component/FormUseChecker'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormUseChecker/>
    </ThemeProvider>
  )
}

export default App
