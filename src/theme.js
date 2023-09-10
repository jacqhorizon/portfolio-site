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
          backgroundSize: '200px',
          backgroundAttachment: 'fixed'
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
          boxShadow: 'none',
          color: '#fff',
          backgroundColor: '#ff4b6c',
          '&:hover': {
            color: '#ff4b6c',
            boxShadow: 'inset 0 0 0 1px #ff4b6c',
            backgroundColor: 'rbga(255, 255, 255, 0)',
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          color: '#6E7992'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {color: '#505b75', backgroundColor:'rgba(217, 228, 255, 0.5)'}
      }
    }
  },
  palette: {
    // mode: 'dark',
    primary: { main: '#FF7E96', dark: '#ff4b6c', light: '#FF9C9C' },
    secondary: {main: '#B9C8FF', dark: '#7e99fc'},
    neutral: {
      main: '#6E7992', dark: '#505b75'
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
      fontWeight: 700,
      fontSize: '2.7rem',
      color: '#FF7E96',
      lineHeight: 2,
    },
    h3: {
      fontFamily: 'Comfortaa',
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 2,
      color: '#6E7992'
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
      // color: '#6E7992',
      color: '#505b75',
      lineHeight: 2
    }
  }
})
theme = responsiveFontSizes(theme)
export default theme