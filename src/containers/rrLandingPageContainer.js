import React, { useState } from 'react'
import PageHolder from '../components/pageHolder'
import { Typography, Box, Button } from '@mui/material'
import FullScreenImg from '../components/fullScreenImg'

const RRLandingPageContainer = () => {
  const ImageBox = ({ imgAlt, imgUrl, imgProps }) => {
    return (
      <Box
        component='img'
        alt={imgAlt}
        src={require(`../images/${imgUrl}`)}
        sx={{
          objectFit: 'cover',
          '&:hover': { cursor: 'pointer' },
          ...imgProps
        }}
        onClick={() =>
          openFullScreen({
            alt: imgAlt,
            image: imgUrl
          })
        }
      />
    )
  }

  const [fullScreen, setFullScreen] = useState(false)
  const [fullScreenImg, setFullScreenImg] = useState('')

  const openFullScreen = (obj) => {
    setFullScreen(true)
    setFullScreenImg(obj)
  }

  const closeFullScreen = () => {
    setFullScreen(false)
    setFullScreenImg('')
  }

  return (
    <PageHolder id='landing-page' title='Landing Page'>
      {fullScreen ? (
        <FullScreenImg
          imgAlt={fullScreenImg.alt}
          imgSrc={require(`../images/${fullScreenImg.image}`)}
          setFullScreen={setFullScreen}
        />
      ) : (
        <></>
      )}
      <Box
        sx={{ display: 'grid', gridTemplateColumns: {xs: '100%', sm: 'auto 40%'}, gridGap: '10px', marginBottom: '30px'}}
      >
        <Typography sx={{marginBottom: {xs: '10px', sm: null}}}>
          I was responsible for building the website based on designs provided
          by the marketing team.
        </Typography>
        <Button 
        onClick={() => window.open('https://rollingrobots.net/home')}
        variant='contained' disableElevation sx={{ color: '#fff', fontSize: '24px' }}>
          View Live Site
        </Button>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {xs: '100%', md: '73% auto'},
          //   height: '700px',
          width: '100%'
        }}
      >
        <ImageBox
          imgAlt='Landing Page Screenshot'
          imgUrl='fbLanding_desktop_mockups.png'
          imgProps={{ width: '100%', objectPosition: 'top' }}
        />
        <ImageBox
          imgAlt='Landing Page Screenshot'
          imgUrl='fbLanding_mobile_mockups.png'
          imgProps={{ width: '100%', objectPosition: 'top' }}
        />
      </Box>
    </PageHolder>
  )
}

export default RRLandingPageContainer
