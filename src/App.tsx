import "./App.css";
import NavBar from "./NavBar/NavBar";
import { green, red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: green[100],
    },
    secondary: {
      main: green[500],
    },
   
  },
 
});

const App = () => {
  return (
  <ThemeProvider theme={theme}>
    <NavBar />
  </ThemeProvider>)
};

export default App;
