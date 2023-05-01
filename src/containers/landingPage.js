import React, { useRef, useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  Grid,
  Card,
  CardMedia,
  IconButton,
  CardActions,
  CardContent,
  useMediaQuery
} from '@mui/material'
import { motion, useScroll } from 'framer-motion'
import PageHolder from '../components/pageHolder'
import { Download, ExpandMore } from '@mui/icons-material'
import ViewResume from '../components/viewResume'
const LandingPage = () => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const pageRef = useRef(null)
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['center center', 'end end']
  })

  const [isHover, setIsHover] = useState(false)

  const PageSection = (props) => {
    return (
      <Box
        id={props.id}
        sx={{ marginBottom: { xs: '10vh', sm: '10vh' }, ...props.style }}
      >
        {props.children}
      </Box>
    )
  }

  const styles = {
    // box: {
    //   display: 'flex',
    //   alignItems: 'center'
    // }
  }

  const CARD_CONTENT = [
    {
      title: 'Marketing Landing Page',
      dates: 'April 2023',
      description: 'Front End Developer',
      image: 'rrLandingPage.png',
      alt: 'marketing landing page screenshot',
      alignment: 'top',
      link: '/rr-landing-page'
    },
    {
      title: 'Email Tool',
      dates: 'October 2022',
      description: 'Design Sprint Lead, UX Designer, and Developer',
      image: 'email_tool.png',
      alt: 'Email Tool screen cap',
      alignment: 'top',
      link: '/email-tool'
    },
    {
      title: 'Design Refresh',
      dates: 'September 2022',
      description: 'UX Designer and Front End Developer',
      image: '10_5_temprollingrobotspreview.png',
      alt: 'Rolling Robots Account Info Page',
      alignment: 'top',
      link: '/design-refresh'
    }
  ]

  const ClickableCard = ({ item }) => {
    return (
      <motion.div
        whileHover={{
          y: -3,
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.05)',
          cursor: 'pointer'
        }}
        transition={{ duration: 0.5, type: 'spring' }}
        style={{ height: '100%' }}
      >
        <Card
          elevation='0'
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
          onClick={() => {
            window.location = item.link
          }}
        >
          <CardMedia
            component='img'
            alt='project-image-1'
            image={require(`../images/${item.image}`)}
            sx={{
              objectFit: 'cover',
              height: '300px',
              objectPosition: item.alignment
            }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              variant='h5'
              color='primary'
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              {item.title}
            </Typography>
            <Typography>{item.dates}</Typography>
            <Typography>{item.description}</Typography>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <>
      {/* <Box
                component='div'
                id='landing-page'
                style={{
                    // backgroundColor: 'orange',
                    height: '95vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }} */}

      {/* <Typography>Hello! My name is</Typography> */}

      <PageHolder
        id='landing-page'
        // box={{ ...styles.box, scrollBehavior: 'smooth' }}
        title={<div ref={pageRef}>RECENT WORK</div>}
        landing={
          <>
            <Box
              sx={{
                height: { xs: '70vh', sm: '80vh' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start'
              }}
            >
              <Typography variant='h1' color='primary'>
                Hello, I'm Jacq!
              </Typography>
              <Typography fontSize='1.5rem' fontFamily='Comfortaa'>
                I'm a UX Engineer. I design and build stuff for the web.
              </Typography>
              <ViewResume
                sx={{
                  width: mobile ? '100%' : null,
                  margin: { xs: '30px auto', sm: '30px 0px' }
                }}
              />
            </Box>
            <motion.div style={{ opacity: scrollYProgress }} ref={scrollRef}>
              <Box
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={() =>
                  pageRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  })
                }
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  margin: '0px auto'
                }}
              >
                <motion.div
                  animate={
                    isHover
                      ? {
                          cursor: 'pointer'
                        }
                      : null
                  }
                >
                  <Typography fontFamily='Comfortaa'>SCROLL</Typography>
                </motion.div>
                <motion.div
                  animate={
                    isHover
                      ? {
                          y: 3,
                          cursor: 'pointer'
                        }
                      : null
                  }
                  transition={{ duration: 0.5, type: 'spring' }}
                >
                  <ExpandMore fontSize='large' />
                </motion.div>
              </Box>
            </motion.div>
          </>
        }
      >
                <PageSection>
          <Box
            sx={{
              display: 'flex',
              alignItems: { xs: 'flex-start', sm: 'flex-end' },
              flexDirection: { xs: 'column', sm: 'row' }
            }}
          >
            <Typography variant='h3' display='inline' sx={{ flexGrow: 1 }}>
              Chef Bop{' '}
            </Typography>
            <Typography
              display='inline'
              fontFamily='Comfortaa'
              textAlign='right'
            >
              December 2022 - Present
            </Typography>
          </Box>
          <Typography sx={{marginBottom: '20px'}}>
            An app to make ordering groceries and cooking at home convenient and
            accessible for neurodivergent people.
          </Typography>
          <Grid container spacing='15' sx={{ marginBottom: '40px' }}>
            <Grid item xs={12} sm={6} >
              <ClickableCard
                item={{
                  title: 'Chef Bop Prototype',
                  dates: 'April 2023',
                  description: 'UX Designer and Front End Developer',
                  image: 'chef_bop/chefbop_desktop_mockups.png',
                  alt: 'Chef Bop screenshot',
                  alignment: 'top',
                  link: '/chef-bop'
                }}
              />
            </Grid>
          </Grid>
        </PageSection>
        <PageSection>
          <Box
            sx={{
              display: 'flex',
              alignItems: { xs: 'flex-start', sm: 'flex-end' },
              flexDirection: { xs: 'column', sm: 'row' }
            }}
          >
            <Typography variant='h3' sx={{ flexGrow: 1 }}>
              Rolling Robots{' '}
            </Typography>
            <Typography fontFamily='Comfortaa'>May 2022 - Present</Typography>
          </Box>
          <Typography sx={{ marginBottom: '20px' }}>
            Web based platform to facilitate everything related to Rolling
            Robots course enrollment. Parents can enroll their students in
            robotics workshops. Instructors can manage students and parent
            contact.
          </Typography>
          <Grid container spacing='15' sx={{ marginBottom: '40px' }}>
            {CARD_CONTENT.map((item, index) => {
              return (
                <>
                  <Grid item xs={12} sm={6} key={item.title}>
                    <ClickableCard item={item} />
                  </Grid>
                </>
              )
            })}
          </Grid>
        </PageSection>
        {/* <Box component='img' src={require('../images/8_25_meettheartistJACQ.png')} sx={{ width: '100%', borderRadius: '8px' }} /> */}
      </PageHolder>

      {/* </Box> */}
    </>
  )
}

export default LandingPage
