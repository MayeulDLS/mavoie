import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
    primary: {
      main: '#ffeef6',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  }
});

export default theme;
