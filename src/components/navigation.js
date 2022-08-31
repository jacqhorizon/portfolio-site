import React from "react"
import {
    Slide,
    AppBar,
    useScrollTrigger,
    Toolbar,
    Typography,
    Button
} from '@mui/material'


const NavigationBar = () => {

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
                            <Typography 
                            variant="h6" 
                            component="div"
                            sx={{flexGrow: 1}}
                            >
                                JACQ KIRKMAN
                            </Typography>

                            <Button
                                href='#landing-page'
                                color='inherit'
                            >
                                HOME
                            </Button>
                            <Button
                                color='inherit'
                            >
                                WEB
                            </Button>
                            <Button
                                color='inherit'
                            >
                                ART
                            </Button>
                            <Button
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
