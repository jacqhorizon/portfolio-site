import { createTheme } from '@mui/material'
import gridImg from './images/gridEX1pink256.jpg'
import bgGrid from './images/10_26_website_grid.png'

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#FAACA8',
          backgroundImage: `url(${bgGrid})`,
          backgroundImage: `url(${bgGrid}), linear-gradient(19deg, #bfffdf 0%, #75b8ff 100%)`,
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
    }
  },
  palette: {
    // mode: 'dark',
    primary: { main: '#ff7a7c' },
  },
  typography: {
    h1: {
      fontFamily: 'Comfortaa',
      fontWeight: 700
    },
    h3: {
      fontFamily: 'Comfortaa'
      // fontWeight: 500
    },
  }
})
export default theme