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

                    <Button
                        href='#landing-page'
                        color='inherit'
                    >
                        HOME
                    </Button>
                    <Button
                        href='#web'
                        color='inherit'
                    >
                        WEB
                    </Button>
                    <Button
                        href='#art'
                        color='inherit'
                    >
                        ART
                    </Button>
                    <Button
                        href='#about'
                        color='inherit'
                    >
                        ABOUT
                    </Button>
                </Toolbar>

            </AppBar>
            <div style={{display: 'flex'}}>
                <Box component='div' sx={{ marginTop: '0px', backgroundImage: `url(${headerImg1})`, backgroundPosition: 'top', height: '250px', width: '250px', backgroundSize: '250px'}}></Box>
                <Box component='div' sx={{ marginTop: '0px', backgroundImage: `url(${footerImg})`, backgroundPosition: 'top', width: '100vw', height: '250px', backgroundSize: '250px', backgroundRepeat: 'repeat-x' }}></Box>
            </div>
        </>
    )
}

export default NavigationBar
