import React, { forwardRef, useEffect, useRef, useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
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
import { Computer, TagFaces, Lightbulb } from '@mui/icons-material'

const NavigationBar = forwardRef((props, ref) => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [drawer, setDrawer] = React.useState(false)

  const toggleDrawer = () => {
    setDrawer(!drawer)
  }

  const headerRef = useRef(null)
  const [visibleSection, setVisibleSection] = useState('hero-section')

  const LANDING_SECTIONS = [
    { id: 'hero-section', text: 'Hero', icon: null, hideNavigation: true },
    { id: 'about-me', text: 'About Me', icon: <TagFaces /> },
    { id: 'skills', text: 'Skills', icon: <Lightbulb /> },
    { id: 'recent-work', text: 'Recent Work', icon: <Computer /> }
  ]

  const handleScroll = (id) => {
    let div = document.getElementById(id)
    div.scrollIntoView({ behavior: 'smooth' })
  }

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

  useEffect(() => {
    let mounted = true
    const handleVisibleSection = () => {
      const { height: headerHeight } = getDimensions(headerRef.current)
      const scrollPosition = window.scrollY + headerHeight + 114

      const selected = LANDING_SECTIONS.find(({ id }) => {
        const ele = document.getElementById(id)
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele)
          return scrollPosition > offsetTop && scrollPosition < offsetBottom
        }
      })
      if (mounted && selected && selected.id !== visibleSection) {
        setVisibleSection(selected.id)
      }
    }
    handleVisibleSection()
    window.addEventListener('scroll', handleVisibleSection)
    return () => {
      mounted = false
      window.removeEventListener('scroll', handleVisibleSection)
    }
  }, [])
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
            sx={{ flexGrow: 1, color: 'neutral.main', textDecoration: 'none', textTransform: 'uppercase' }}
            component={Link}
            color='neutral'
            to='/'
          >
            Jacq Kirkman
          </Typography>
          {mobile ? (
            <>
              <IconButton onClick={toggleDrawer}>
                <MenuIcon color='neutral' />
              </IconButton>
            </>
          ) : (
            <>
              {LANDING_SECTIONS.map((section) =>
                !section.hideNavigation ? (
                  <Box
                    key={'section-tab-' + section.id}
                    sx={{ margin: '0px 10px' }}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'Comfortaa',
                        textTransform: 'uppercase',
                        color: visibleSection === section.id ? '#FF7E96' : null,
                        '&:hover': {
                          cursor: 'pointer'
                        }
                      }}
                      onClick={() => handleScroll(section.id)}
                    >
                      {section.text}
                    </Typography>
                  </Box>
                ) : null
              )}
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor='right' open={drawer} onClose={toggleDrawer}>
        <List>
          {LANDING_SECTIONS.map((section) =>
            !section.hideNavigation ? (
              <ListItemButton
                key={'section-list-button-' + section.id}
                onClick={() => handleScroll(section.id)}
              >
                <ListItemIcon sx={{ color: 'neutral.main' }}>
                  {section.icon}
                </ListItemIcon>
                <ListItemText>{section.text}</ListItemText>
              </ListItemButton>
            ) : null
          )}
        </List>
      </Drawer>
    </>
  )
})

export default NavigationBar
