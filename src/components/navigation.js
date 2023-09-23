import React, { forwardRef, useEffect, useRef, useState } from 'react'
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
import { Link } from 'react-router-dom'
import { Home, Computer, Brush, TagFaces, Animation } from '@mui/icons-material'

// import { Link } from 'react-scroll'

const NavigationBar = forwardRef((props, ref) => {
  let handleScroll = props.handleScroll
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [drawer, setDrawer] = React.useState(false)

  const toggleDrawer = () => {
    setDrawer(!drawer)
  }

  const headerRef = useRef(null)
  const [visibleSection, setVisibleSection] = useState('')

  const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect()
    const offsetTop = ele.offsetTop
    const offsetBottom = offsetTop + height

    return {
      height,
      offsetTop,
      offsetBottom
    }
  }
  const WORK_NAVIGATION = [
    { id: 'about-me', text: 'About Me' },
    { id: 'skills', text: 'Skills' },
    { id: 'recent-work', text: 'Recent Work' }
  ]
  useEffect(() => {
    const handleVisibleSection = () => {
      const { height: headerHeight } = getDimensions(headerRef.current)
      const scrollPosition = window.scrollY + headerHeight + 114

      const selected = WORK_NAVIGATION.find(({ id, text }) => {
        // const ele = ref.current
        const ele = document.getElementById(id)
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele)
          return scrollPosition > offsetTop && scrollPosition < offsetBottom
        }
      })
      if (selected && selected.id !== visibleSection) {
        setVisibleSection(selected.id)
      } else if (!selected && visibleSection) {
        // setVisibleSection('about-me')
      }
    }
    handleVisibleSection()
    window.addEventListener('scroll', handleVisibleSection)
    return () => {
      window.removeEventListener('scroll', handleVisibleSection)
    }
  }, [visibleSection])

  // const PAGES = [
  //     {
  //         label: 'WORK',
  //         link: '/',
  //         icon: <Computer />
  //     },
  //     // {
  //     //     label: 'WEB',
  //     //     link: '/web',
  //     //     icon: <Computer />
  //     // },
  //     {
  //         label: 'ART',
  //         link: '/art',
  //         icon: <Brush />

  //     },
  //     {
  //         label: 'ANIMATION',
  //         link: '/animation',
  //         icon: <Animation />
  //     },
  //     {
  //         label: 'ABOUT',
  //         link: '/about',
  //         icon: <TagFaces />
  //     }
  // ]

  return (
    <>
      <AppBar
        elevation='0'
        sx={{ zIndex: 1 }}
        position='sticky'
        ref={headerRef}
      >
        <Toolbar display='flex'>
          <Typography
            variant='h6'
            // component='div'
            sx={{ flexGrow: 1, color: 'neutral.main', textDecoration: 'none' }}
            component={Link}
            color='neutral'
            to='/'
          >
            JACQ KIRKMAN
          </Typography>

          {WORK_NAVIGATION.map((item) => (
            <Typography
              sx={{
                backgroundColor: visibleSection == item.id ? 'green' : null
              }}
              onClick={() => {
                let div = document.getElementById(item.id)
                div.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {item.text}
            </Typography>
          ))}
        </Toolbar>
      </AppBar>

      <Drawer anchor='right' open={drawer} onClose={toggleDrawer}>
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
})

export default NavigationBar
