import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';


export default createTheme({
  palette: {
    primary: {
      main: '#cfa09c',
    },
    secondary: {
      main: '#c8a0ce',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
               dense: {
          height: 102,
          minHeight: 102
        }
      }
    }
    
  }
})