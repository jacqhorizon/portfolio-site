import { createTheme, responsiveFontSizes } from '@mui/material'
import gridImg from './images/gridEX1pink256.jpg'
import bgGrid from './images/10_26_website_grid.png'

let theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'rgb(255,186,210)',
          backgroundImage: `url(${bgGrid})`,
          backgroundImage: `url(${bgGrid}), linear-gradient(180deg, rgba(255, 212, 212, 1) 0%, rgba(185, 200, 255,1) 100%)`,
          backgroundSize: '200px'
          // backgroundColor: 'rgb(191, 255, 223)',
          // backgroundImage: `linear-gradient(19deg, rgba(191, 255, 223, 1) 0 %, rgba(117, 184, 255, 1) 52 %, rgba(77, 225, 255, 1) 100 %)`
          // backgroundImage: `url(${gridImg})`
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#fff",
          elevation: '1'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Comfortaa',
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          color: '#6E7992'
        }
      }
    }
  },
  palette: {
    // mode: 'dark',
    primary: { main: '#FF7E96', light: '#FF9C9C' },
    secondary: {main: '#B9C8FF', dark: '#7e99fc'},
    neutral: {
      main: '#6E7992'
    }
  },
  typography: {
    h1: {
      fontFamily: 'Comfortaa',
      fontWeight: 700,
      fontSize: '5rem'
    },
    h2: {
      fontFamily: 'Comfortaa',
      // fontWeight: 700,
      fontSize: '3rem'
    },
    h3: {
      fontFamily: 'Comfortaa'
      // fontWeight: 500
    },
    h4: {
      fontFamily: 'Comfortaa',
      // fontWeight: 700
    },
    h5: {
      fontFamily: 'Comfortaa',
      fontWeight: 700
    },
    h6: {
      fontFamily: 'Comfortaa'
    },
    body1: {
      color: '#6E7992'
    }
  }
})
theme = responsiveFontSizes(theme)
export default theme