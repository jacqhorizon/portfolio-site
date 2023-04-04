import React from 'react'
import { Typography, useMediaQuery, Box, Button } from '@mui/material'
import Gallery from '../components/squareGallery'
import PageHolder from '../components/pageHolder'

const ArtContainer = () => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  let dressUp = {
    title: 'Dress Up Game',
    dates: 'October 2022',
    description: 'Web app built in React',
    image: '10_22_inktoberdressup.png',
    alt: 'Dress Up Game Preview image',
    alignment: 'center',
    gitHub: 'https://github.com/jacqthedog/dress-up-game',
    link: 'https://jacqsdressupgame.pages.dev/'
  }

  const styles = {
    headers: {
      marginTop: '20px'
    }
  }
  const SQUARE_ARTWORK = [
    {
      alt: 'A witch and her cat familiar stretching',
      image: '10_6_costober_witch.jpg'
    },
    {
      alt: 'A woman in a mermaid dress sitting a person with a fish head',
      image: '10_2_costober_mermaid.jpg'
    },
    {
      alt: '3 werewolves protecting a werewolf in the center with a cheeseburger',
      image: '10_4_costober_werewolf.jpg'
    },
    {
      alt: 'A girl with purple hair using a ouija board',
      image: '10_1_costober_ghost.jpg'
    },
    {
      alt: 'A girl with brown curly hair and man with long straight hair and wide brim hat make a heart shape with their hands',
      image: '2_13_ThatRiasLover_commission.png'
    },
    {
      alt: 'A cat in a taco costume and a grey cat with one eye jump with a rainbow in the background',
      image: 'IMG_1641.PNG'
    },
    {
      alt: '',
      image: '3_14_brandyncommission1.png'
    },
    {
      alt: '',
      image: '3_14_brandyncommission2.png'
    }
  ]

  const SHIRTS = [
    {
      alt: 'snake girl',
      image: '10_23_snakegirlshirtcopy.jpg'
    },
    {
      alt: 'mushroom girl',
      image: '10_23_mushroomgirlshirtcopy.jpg'
    },
    {
      alt: 'skeleton girl',
      image: '10_23_skullgirlshirtICONcopy.jpg'
    }
  ]

  const MERCHS = [
    {
      alt: "Me and My Boyfriend's Zine",
      image: 'meandboyfriends.jpeg'
    },
    {
      alt: 'Gay shiro charm',
      image: 'gayshiro.jpeg'
    },
    {
      alt: 'Trans keith charm',
      image: 'transkeith.jpeg'
    }
  ]

  const SQUARE_MERCHS = [
    {
      alt: 'Shiro Protection',
      image: 'shiroprotection.jpeg'
    },
    {
      alt: 'Tiger Sticker',
      image: 'tigersticker.jpeg'
    }
  ]

  return (
    <PageHolder id='art' title='ART'>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '100%', sm: '50% 50%' },
          // gridTemplateRows: {xs: '100%', sm: '50% 50%'}
          gridGap: '15px',
          width: {xs: '100%', md: '80%'},
          margin: 'auto auto'
        }}
      >
        <Box
          component='img'
          alt='email tool screenshot'
          src={require('../images/10_22_inktober-dress-upgif.gif')}
          sx={{
            gridColumn: '1/2',
            gridRow: '1/2',
            width: '100%',
            // height: '50vh',
            borderRadius: '8px',
            '&:hover': {
              cursor: 'pointer'
            }
          }}
          onClick={() =>
            window.open('https://jacqsdressupgame.pages.dev/', '_blank')
          }
        />
        {/* <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        > */}
        <Box
          sx={
            {margin: 'auto auto'
              // display: 'flex',
              // flexDirection: 'column',
              // justifyContent: 'space-around'
              // margin: '20px 0px'
            }
          }
        >
          <Typography variant='h2'>Dress Up Game</Typography>
          <Typography>
            A web based dress up game built in React featuring artwork created
            for Inktober 2022
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: {xs: 'column', md: 'row'},
              justifyContent: 'space-around',
              alignItems: 'space-evenly',
              height: {xs: '100px', md: null}, 
              margin: '20px 0px'
            }}
          >
            <Button
              variant='contained'
              disableElevation
              sx={{ color: '#fff' }}
              onClick={() =>
                window.open(
                  'https://github.com/jacqthedog/dress-up-game',
                  '_blank'
                )
              }
            >
              View the Code!
            </Button>
            <Button
              variant='contained'
              disableElevation
              sx={{ color: '#fff' }}
              onClick={() =>
                window.open('https://jacqsdressupgame.pages.dev/', '_blank')
              }
            >
              Play the Game!
            </Button>
          </Box>
        </Box>
        {/* </Box> */}
      </Box>
      <Typography variant='h2' sx={styles.headers}>
        Merch
      </Typography>
      <Gallery type='triplet' content={SHIRTS} />
      <Gallery type='one to two' content={MERCHS} />
      <Gallery
        type={'square'}
        content={SQUARE_MERCHS}
        style={{ marginTop: '15px' }}
      />
      <Typography variant='h2' sx={styles.headers}>
        Other Work
      </Typography>
      <Gallery
        type='square'
        content={SQUARE_ARTWORK}
        style={{ marginTop: '15px' }}
      />
    </PageHolder>
  )
}

export default ArtContainer
