import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Create from './pages/Create';
import Note from './pages/Note';
import Layout from './components/Layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#3f51b5'
      },
      secondary: {
        main: '#4a148c'
      }
    },
    typography: {
      fontFamily: 'Montserrat',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    }
})

const App = ({reloadData}) => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Layout>
        <Routes>
        <Route exact path="/" element={<Note reloadData={()=>reloadData()} />} />
        <Route path="/create" element={<Create />} />
        </Routes>
        </Layout>
    </Router>
    </ThemeProvider>
  )
}

export default App;
