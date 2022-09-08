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

const NavigationBar = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))

    const HideOnScroll = (props) => {
        const { children } = props
        const trigger = useScrollTrigger()
        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        )
    }

    const HideAppBar = (props) => {
        return (
            <>
                <HideOnScroll {...props}>
                    <AppBar>
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
                </HideOnScroll>
            </>
        )
    }

    return (
        <>
            <HideAppBar />
        </>
    )
}

export default NavigationBar
