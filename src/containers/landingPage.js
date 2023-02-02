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

  const Content = () => {
    return <></>
  }

  const styles = {
    // box: {
    //   display: 'flex',
    //   alignItems: 'center'
    // }
  }

  const CARD_CONTENT = [
    {
      title: 'Design Refresh',
      dates: 'September 2022',
      // description: 'Front end developer for ecommerce and educational website',
      image: '10_5_temprollingrobotspreview.png',
      alt: 'Rolling Robots Account Info Page',
      alignment: 'top',
      link: '/design-refresh'
    },
    {
      title: 'Email Tool',
      dates: 'October 2022',
      // description: 'Web app built in React',
      image: 'email_tool.png',
      alt: 'Dress Up Game Preview image',
      alignment: 'top',
      gitHub: 'https://github.com/jacqthedog/dress-up-game',
      link: '/email-tool'
    }
  ]

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
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Typography variant='h3' display='inline' sx={{ flexGrow: 1 }}>
            Rolling Robots{' '}
          </Typography>
          <Typography display='inline' fontFamily='Comfortaa'>
            May 2022 - Present
          </Typography>
        </Box>
        <Typography sx={{ marginBottom: '20px' }}>
          Web based platform to facilitate everything related to Rolling Robots
          course enrollment. Parents can enroll their students in robotics
          workshops. Instructors can manage students and parent contact.
        </Typography>
        <Grid container spacing='15' sx={{ marginBottom: '40px' }}>
          {CARD_CONTENT.map((item, index) => {
            return (
              <>
                <Grid item xs={12} sm={6}>
                  {/* <WebCard
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                >
                                </WebCard> */}
                  {/* <img src={require(`../images/${item.image}`)} style={{ zIndex: index + 1 }} /> */}
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
                      {/* <CardActions sx={{ justifyContent: 'flex-end' }}> */}
                      {/* {item.gitHub ? (
                            <IconButton
                              onClick={() => window.open(item.gitHub, '_blank')}
                            >
                              <GitHub color='primary' />
                            </IconButton>
                          ) : (
                            <></>
                          )}
                          <IconButton
                            onClick={() => window.open(item.link, '_blank')}
                          >
                            <Launch color='primary' />
                          </IconButton> */}
                      {/* </CardActions> */}
                    </Card>
                  </motion.div>
                </Grid>
              </>
            )
          })}
        </Grid>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Typography variant='h3' display='inline' sx={{ flexGrow: 1 }}>
            Chef Bop{' '}
          </Typography>
          <Typography display='inline' fontFamily='Comfortaa'>
            December 2022 - Present
          </Typography>
        </Box>
        <Typography>
          An app to make ordering groceries and cooking at home convenient and
          accessible for neurodivergent people. 
        </Typography>
        <Typography><b>Details coming soon!</b></Typography>
        {/* <Box component='img' src={require('../images/8_25_meettheartistJACQ.png')} sx={{ width: '100%', borderRadius: '8px' }} /> */}
      </PageHolder>

      {/* </Box> */}
    </>
  )
}

export default LandingPage
