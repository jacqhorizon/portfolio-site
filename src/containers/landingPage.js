import React from 'react'
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
  CardContent
} from '@mui/material'
import { motion } from 'framer-motion'
import PageHolder from '../components/pageHolder'

const LandingPage = () => {
  const Content = () => {
    return <></>
  }

  const styles = {
    box: {
      display: 'flex',
      alignItems: 'center'
    }
  }

  const CARD_CONTENT = [
    {
      title: 'Design Refresh',
      dates: 'May 2022 - Present',
      description: 'Front end developer for ecommerce and educational website',
      image: '10_5_temprollingrobotspreview.png',
      alt: 'Rolling Robots Account Info Page',
      alignment: 'top',
      link: '/design-refresh'
    },
    {
      title: 'Email Tool',
      dates: 'October 2022',
      description: 'Web app built in React',
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

      <PageHolder id='landing-page' box={styles.box}>
        <Typography>Hello! My Name is</Typography>
        <Typography>Jacq Kirkman</Typography>
        <Typography>
          I design and build cool stuff for people to use on the web
        </Typography>
        <Button>Resume</Button>
        <Typography color='primary' sx={{ margin: '0px 5%' }}>
          SOME COOL STUFF I'VE DESIGNED
        </Typography>
        <Divider />
        <Typography> Rolling Robots</Typography>
        <Typography>May 2022 - Present</Typography>
        <Grid container spacing='15'>
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
                  whileHover={{y: -3,boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.05)", cursor: 'pointer' }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  style={{height: '100%'}}
                  >
                      <Card
                        elevation='0'
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column'
                        }}
                        onClick={() => {window.location = item.link}}
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
                        <CardActions sx={{ justifyContent: 'flex-end' }}>
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
                        </CardActions>
                      </Card>
                  </motion.div>
                </Grid>
              </>
            )
          })}
        </Grid>
        <Typography>Personal Projects</Typography>

        {/* <Box component='img' src={require('../images/8_25_meettheartistJACQ.png')} sx={{ width: '100%', borderRadius: '8px' }} /> */}
      </PageHolder>

      {/* </Box> */}
    </>
  )
}

export default LandingPage
