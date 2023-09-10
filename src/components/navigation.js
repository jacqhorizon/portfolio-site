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

// import { Link } from 'react-scroll'


const NavigationBar = ({handleScroll}) => {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down('sm'))

    const [drawer, setDrawer] = React.useState(false)

    const toggleDrawer = () => {
        setDrawer(!drawer)
    }

    const PAGES = [
        {
            label: 'WORK',
            link: '/',
            icon: <Computer />
        },
        // {
        //     label: 'WEB',
        //     link: '/web',
        //     icon: <Computer />
        // },
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
            <AppBar elevation='0' sx={{ zIndex: 1 }} position='sticky' >
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
                    <a href='#skills'>Skills</a>
                    <Link to='#skills'> About Me</Link>
                    <div onClick={() => handleScroll('skills')}>skills</div>
                    <div onClick={() => handleScroll()}>about</div>
                    {/* <Link activeClass='active' smooth spy to='about-me'>About Me</Link> */}
                    {/* {mobile ? <><IconButton
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
                        </>} */}
                </Toolbar>

            </AppBar>

            <Drawer
                anchor='right'
                open={drawer}
                onClose={toggleDrawer}
            >
                <List>
                    {/* {PAGES.map((page) => {
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
                    })} */}
                </List>
            </Drawer>
        </>
    )
}

export default NavigationBar
