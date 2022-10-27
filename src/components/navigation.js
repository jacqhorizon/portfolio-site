import React from "react"
import {
    Slide,
    AppBar,
    useScrollTrigger,
    Toolbar,
    Typography,
    Button,
    useMediaQuery,
    useTheme,
    Box
} from '@mui/material'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import footerImg from '../images/9_30_website_header_rep1.png'
import headerImg1 from '../images/9_30_website_header_rep2.png'
import { Link } from "react-router-dom"


const NavigationBar = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <AppBar elevation='0' sx={{ position: 'static' }}>
                <Toolbar
                    display='flex'
                >
                    {matches ?
                        <Box
                            component='span'
                            sx={{ flexGrow: 1 }}>
                            <TagFacesIcon />
                        </Box>
                        : <>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{ flexGrow: 1 }}
                            >
                                JACQ KIRKMAN
                            </Typography></>}
                    <Button component={Link} color='inherit' to='/'>
                        HOME
                    </Button>
                    <Button component={Link} color='inherit' to='/web'>
                        WEB
                    </Button>
                    <Button component={Link} color='inherit' to='/art'>
                        ART
                    </Button>
                    <Button component={Link} color='inherit' to='/about'>
                        ABOUT
                    </Button>
                </Toolbar>

            </AppBar>
            {/* <div style={{ display: 'flex' }}>
                <Box component='div' sx={{ marginTop: '0px', backgroundImage: `url(${headerImg1})`, backgroundPosition: 'top', height: '250px', width: '250px', backgroundSize: '250px' }}></Box>
                <Box component='div' sx={{ marginTop: '0px', backgroundImage: `url(${footerImg})`, backgroundPosition: 'top', width: '100vw', height: '250px', backgroundSize: '250px', backgroundRepeat: 'repeat-x' }}></Box>
            </div> */}
        </>
    )
}

export default NavigationBar
