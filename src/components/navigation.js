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
    Box,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from "react-router-dom"
import { Home, Computer, Brush, TagFaces, Animation } from '@mui/icons-material'


const NavigationBar = () => {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down('sm'))

    const [drawer, setDrawer] = React.useState(false)

    const toggleDrawer = () => {
        setDrawer(!drawer)
    }

    const PAGES = [
        {
            label: 'HOME',
            link: '/',
            icon: <Home />
        },
        {
            label: 'WEB',
            link: '/web',
            icon: <Computer />
        },
        {
            label: 'ART',
            link: '/art',
            icon: <Brush />

        },
        {
            label: 'ANIMATION',
            link: '/animation',
            icon: <Animation />
        },
        {
            label: 'ABOUT',
            link: '/about',
            icon: <TagFaces />
        }
    ]

    return (
        <>
            <AppBar elevation='0' sx={{ zIndex: 1 }} >
                <Toolbar
                    display='flex'
                >
                    <Typography
                        variant='h6'
                        // component='div'
                        sx={{ flexGrow: 1, color: 'neutral.main', textDecoration: 'none' }}
                        component={Link} color='neutral' to='/'
                    >
                        JACQ KIRKMAN
                    </Typography>
                    {mobile ? <><IconButton
                        onClick={toggleDrawer}>
                        <MenuIcon color='neutral' />
                    </IconButton></>
                        : <>
                            {PAGES.map((page) => {
                                return (
                                    <React.Fragment key={page.label}>
                                        <Button component={Link} color='neutral' to={page.link} startIcon={page.icon || null} sx={{ margin: '0px 1%' }}>
                                            {page.label}
                                        </Button>
                                    </React.Fragment>
                                )
                            })}
                        </>}
                </Toolbar>

            </AppBar>

            <Drawer
                anchor='right'
                open={drawer}
                onClose={toggleDrawer}
            >
                <List>
                    {PAGES.map((page) => {
                        return (
                            <React.Fragment key={page.label}>
                                <ListItemButton
                                    component={Link}
                                    to={page.link}
                                    onClick={() => {
                                        toggleDrawer()
                                    }}
                                >
                                    <ListItemIcon sx={{ color: 'neutral.main' }}>{page.icon}</ListItemIcon>
                                    <ListItemText>{page.label}</ListItemText>
                                </ListItemButton>
                            </React.Fragment>
                        )
                    })}
                </List>
            </Drawer>
        </>
    )
}

export default NavigationBar
