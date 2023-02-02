import React, {useState} from 'react'
import PageHolder from '../components/pageHolder'
import { Box, Typography } from '@mui/material'
import { ArrowRightAlt } from '@mui/icons-material'
import FullScreenImg from '../components/fullScreenImg'

const DesignRefreshContainer = () => {
  const SMALL_MARGIN = '30px'
  const [fullScreen, setFullScreen] = useState(false)
  const [fullScreenImg, setFullScreenImg] = useState('')

  const PageSection = (props) => {
    return (
      <Box id={props.id} sx={{ marginBottom: {xs: '20vh', sm: '25vh'}, ...props.sx }}>
        {props.children}
      </Box>
    )
  }
  const openFullScreen = (obj) => {
    setFullScreen(true)
    setFullScreenImg(obj)
  }

  const closeFullScreen = () => {
    setFullScreen(false)
    setFullScreenImg('')
  }

  return (
    <PageHolder id='design-refresh' title='Design Refresh'>
            {fullScreen ? (
        <FullScreenImg
          imgAlt={fullScreenImg.alt}
          imgSrc={require(`../images/${fullScreenImg.image}`)}
          setFullScreen={setFullScreen}
        />
      ) : (
        <></>
      )}
      <PageSection
        id='navigation'
        sx={{ display: 'grid', gridTemplateColumns: '50% 50%' }}
      >
        <Typography sx={{ gridColumn: '1/3' }}>
          One of my main responsibilities was to refresh the website’s design to
          improve it’s user friendliness while also better reflecting the
          company’s brand.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gridColumn: {xs: '1/3', sm: '1/2'}
          }}
        >
          <Box
            component='img'
            src={require('../images/design_refresh/camp_BEFORE_mockup.png')}
            sx={{
              width: '100%',
              borderRadius: '8px',
              //   height: '250px',
              objectFit: 'cover',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
            onClick={() =>
              openFullScreen({
                alt: 'home page before redesign',
                image: 'design_refresh/camp_BEFORE_mockup.png'
              })
            }
          />
          <Typography>Before</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gridColumn: {xs: '1/3', sm: '2/3'}
          }}
        >
          <Box
            component='img'
            src={require('../images/design_refresh/camp_AFTER_mockup.png')}
            sx={{
              width: '100%',
              borderRadius: '8px',
              //   height: '250px',
              objectFit: 'cover',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
            onClick={() =>
              openFullScreen({
                alt: 'home page after redesign',
                image: 'design_refresh/camp_AFTER_mockup.png'
              })
            }
          />
          <Typography>After</Typography>
        </Box>
      </PageSection>
      <PageSection
        id='navigation'
        // sx={{ display: 'grid', gridTemplateColumns: '50% 50%' }}
      >
        <Typography variant='h2'>Navigation</Typography>
        <Typography sx={{ marginBottom: SMALL_MARGIN }}>
          As the website’s features expanded, the navigation system became more
          confusing and maze-like. To streamline the navigation experience, I
          pitched and developed the concept of having two main navigation bars.
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '50% 50%',
              md: '40% 60%',
              lg: '45% auto'
            },
            gridTemplateRows: 'auto auto',
            gridGap: '10px',
            marginBottom: SMALL_MARGIN
          }}
        >
          <Box>
            <Typography variant='h3' display='inline'>
              Primary Navigation
            </Typography>
            <Typography>
              Controls the main site features: Page navigation, login, and cart
            </Typography>
          </Box>
          <Box>
            <Typography variant='h3'>Secondary Navigation</Typography>
            <Typography>
              Controls a specific page’s features: varies depending on the page
            </Typography>
          </Box>
          <Box
            component='img'
            src={require('../images/design_refresh/navbar_screenshot.png')}
            sx={{
              gridColumn: { xs: '1/3', md: '2/3' },
              gridRow: { xs: '2/3', md: '1/3' },
              width: '100%',
              height: '100%',
              borderRadius: '8px',
              //   height: '250px',
              objectPosition: 'left',
              objectFit: 'cover',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
            onClick={() =>
              openFullScreen({
                alt: 'navigation bar screenshot',
                image: 'design_refresh/navbar_screenshot.png'
              })
            }
          />
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {xs: '50% 50%', sm: '30% 30% auto'},
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Box
              component='img'
              src={require('../images/design_refresh/nav_BEFORE_mobilemockup.png')}
              sx={{
                // gridColumn: '2/3',
                // gridRow: '1/3',
                width: '100%',
                borderRadius: '8px',
                //   height: '250px',
                objectFit: 'cover',
                '&:hover': {
                  cursor: 'pointer'
                }
              }}
              onClick={() =>
                openFullScreen({
                  alt: 'mobile navigation before',
                  image: 'design_refresh/nav_BEFORE_mobilemockup.png'
                })
              }
            />
            <Typography>Before</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Box
              component='img'
              src={require('../images/design_refresh/nav_AFTER_mobilemockup.png')}
              sx={{
                // gridColumn: '2/3',
                // gridRow: '1/3',
                width: '100%',
                borderRadius: '8px',
                //   height: '250px',
                objectFit: 'cover',
                '&:hover': {
                  cursor: 'pointer'
                }
              }}
              onClick={() =>
                openFullScreen({
                  alt: 'mobile navigation after',
                  image: 'design_refresh/nav_AFTER_mobilemockup.png'
                })
              }
            />
            <Typography>After</Typography>
          </Box>
          <Typography sx={{gridColumn: {xs: '1/3', sm: '3/4'}}}>
            On mobile, the primary navigation bar takes the form of a side
            drawer. The user's current location is highlighted, to help prevent
            them from getting lost.
          </Typography>
        </Box>
      </PageSection>
      <PageSection
        id='design-guide'
        sx={{
          display: 'grid',
          gridTemplateColumns: '30% 70%',
          alignItems: 'center'
        }}
      >
        <Typography variant='h2' sx={{ gridColumn: '1/3' }}>
          Design Guide
        </Typography>
        <Typography sx={{ gridColumn: '1/3', marginBottom: SMALL_MARGIN }}>
          Working off of pre existing branding material, I created a basic
          design guide. With these fundamental building blocks established,
          myself and other developers are able to quickly build uniform and
          consistent features.
        </Typography>
        <Box sx={{gridColumn: {xs: '1/3', md: '1/2'}, marginBottom: '10px'}}>
          <Typography>
            The color palette and typography guide were designed with the goal
            of creating the simplest experience for users to access information,
            without losing the fun of the brand's aesthetic.
          </Typography>
          <Typography>
            Both these features were integrated into the website using Mui's
            Theme Provider to make it convenient for developers
          </Typography>
        </Box>
        <Box
          component='img'
          src={require('../images/design_refresh/rr_design_guide.png')}
          sx={{
            marginBottom: SMALL_MARGIN,
            // gridColumn: '2/3',
            // gridRow: '1/3',
            width: '100%',
            borderRadius: '8px',
            //   height: '250px',
            gridColumn: {xs: '1/3', md: '2/3'},
            objectFit: 'cover',
            '&:hover': {
              cursor: 'pointer'
            }
          }}
          onClick={() =>
            openFullScreen({
              alt: 'design guide',
              image: 'design_refresh/rr_design_guide.png'
            })
          }
        />
        <Box sx={{gridColumn: {xs: '1/3', md: '1/2'}, marginBottom: '10px'}}>
          I designed and built reusable card components to further streamline
          the user experience. I focused on emphasizing the hierarchy of
          information and sprinkled in some iconography to keep the user
          experience joyful.
        </Box>
        <Box
          component='img'
          src={require('../images/design_refresh/rr_card_ref.png')}
          sx={{
            // gridColumn: '2/3',
            // gridRow: '1/3',
            width: '100%',
            borderRadius: '8px',
            gridColumn: {xs: '1/3', md: '2/3'},
            objectFit: 'cover',
            '&:hover': {
              cursor: 'pointer'
            }
          }}
          onClick={() =>
            openFullScreen({
              alt: 'resuable card reference',
              image: 'design_refresh/rr_card_ref.png'
            })
          }
        />
      </PageSection>
      <PageSection sx={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
        <Typography variant='h2' sx={{ gridColumn: '1/3' }}>
          Applying the Designs
        </Typography>
        <Typography sx={{ gridColumn: '1/3', marginBottom: SMALL_MARGIN }}>
          The final piece in this design refresh was bringing everything
          together in the account info page. I wanted this page to serve as a
          central hub for everything related to a parent's account so they could
          get a quick overview of their kids and orders, then easily navigate to the catalogs.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gridColumn: {xs: '1/3', md: '1/2'}
          }}
        >
          <Box
            component='img'
            src={require('../images/design_refresh/info_BEFORE_mockup.png')}
            sx={{
              // marginBottom: SMALL_MARGIN,
              // gridColumn: '2/3',
              // gridRow: '1/3',
              width: '100%',
              borderRadius: '8px',
              //   height: '250px',
              objectFit: 'cover',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
            onClick={() =>
              openFullScreen({
                alt: 'account info before redesign',
                image: 'design_refresh/info_BEFORE_mockup.png'
              })
            }
          />
          <Typography>Before</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gridColumn: {xs: '1/3', md: '2/3'}
          }}
        >
          <Box
            component='img'
            src={require('../images/design_refresh/info_AFTER_mockup.png')}
            sx={{
              // marginBottom: SMALL_MARGIN,
              // gridColumn: '2/3',
              // gridRow: '1/3',
              width: '100%',
              borderRadius: '8px',
              //   height: '250px',
              objectFit: 'cover',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
            onClick={() =>
              openFullScreen({
                alt: 'account info after redesign',
                image: 'design_refresh/info_AFTER_mockup.png'
              })
            }
          />
          <Typography>After</Typography>
        </Box>
      </PageSection>
      {/* <PageSection>
        <Typography variant='h2'>Takeaways</Typography>
        <Typography>
        </Typography>
      </PageSection> */}
    </PageHolder>
  )
}

export default DesignRefreshContainer
