import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#d3d3d3',
    },
  },
  typography: {
    fontFamily: '"Segoe UI"',
  }
});
theme = responsiveFontSizes(theme);

export default theme;